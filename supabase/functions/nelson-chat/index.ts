
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.0";

// CORS headers for browser requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query } = await req.json();
    
    if (!query) {
      return new Response(
        JSON.stringify({ error: 'Query is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || 'https://alhctsqjhnbglqkvrspg.supabase.co';
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || Deno.env.get('SUPABASE_ANON_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    console.log('Searching for relevant content...');
    
    // Get relevant chunks from the database based on the query
    // In a real implementation, this would use embeddings for semantic search
    const { data: chunks, error: chunksError } = await supabase
      .from('chunks')
      .select('text, chapter')
      .textSearch('text', query, {
        type: 'plain',
        config: 'english'
      })
      .limit(5);
    
    if (chunksError) {
      console.error('Error fetching chunks:', chunksError);
      throw new Error('Failed to retrieve relevant content');
    }
    
    console.log(`Found ${chunks?.length || 0} relevant chunks`);
    
    // Prepare context from retrieved chunks
    let context = '';
    if (chunks && chunks.length > 0) {
      context = chunks.map(chunk => `${chunk.chapter ? `[${chunk.chapter}] ` : ''}${chunk.text}`).join('\n\n');
    } else {
      context = "No specific information found in Nelson Textbook for this query.";
    }
    
    // Format prompt with context and user query
    const systemPrompt = `You are Nelson-GPT, an AI assistant for pediatric medicine based on the Nelson Textbook of Pediatrics.
Your goal is to provide accurate, evidence-based information to medical professionals about pediatric conditions, treatments, and guidelines.
You should be professional, empathetic, and precise in your answers.
Base your responses on the following context from Nelson Textbook of Pediatrics:

${context}

If the provided context doesn't contain relevant information for the query, acknowledge this and provide general medical knowledge while clearly stating that it's not specifically from Nelson Textbook.
Always cite the relevant chapter if available.`;

    // Call Mistral API
    const mistralKey = Deno.env.get('MISTRAL_API_KEY');
    
    if (!mistralKey) {
      throw new Error('Mistral API key not configured');
    }
    
    console.log('Calling Mistral API...');
    
    const mistralResponse = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${mistralKey}`
      },
      body: JSON.stringify({
        model: "mistral-large-latest",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: query }
        ],
        temperature: 0.7
      })
    });
    
    if (!mistralResponse.ok) {
      const errorData = await mistralResponse.text();
      console.error('Mistral API error:', errorData);
      throw new Error(`Mistral API error: ${mistralResponse.status}`);
    }
    
    const mistralData = await mistralResponse.json();
    const response = mistralData.choices[0].message.content;
    
    console.log('Successfully generated response');
    
    // Return the AI-generated response
    return new Response(
      JSON.stringify({ 
        response,
        sourcesCount: chunks?.length || 0
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
