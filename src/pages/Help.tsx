
import React from 'react';
import AppLayout from '../components/AppLayout';
import { ChevronDown, Mail, MessageSquare } from 'lucide-react';

const Help = () => {
  return (
    <AppLayout>
      <div className="flex flex-col h-full overflow-y-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Help & Support</h1>
        
        <div className="space-y-6">
          <div className="bg-card rounded-lg shadow-sm p-4 border border-border">
            <h2 className="font-semibold text-lg mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-2 hover:bg-muted rounded-lg">
                  <span>What is Nelson-GPT?</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="text-muted-foreground mt-3 p-2">
                  Nelson-GPT is an AI-powered pediatric assistant that uses the knowledge from the Nelson Textbook of Pediatrics to answer your medical questions related to pediatric care. It provides evidence-based information to assist healthcare professionals.
                </div>
              </details>
              
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-2 hover:bg-muted rounded-lg">
                  <span>How accurate is the information?</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="text-muted-foreground mt-3 p-2">
                  Nelson-GPT uses RAG (Retrieval Augmented Generation) technology to find relevant information from the Nelson Textbook of Pediatrics, ensuring high accuracy. However, the app is designed to be an educational tool and should not replace clinical judgment or professional medical advice.
                </div>
              </details>
              
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-2 hover:bg-muted rounded-lg">
                  <span>Can I use Nelson-GPT offline?</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="text-muted-foreground mt-3 p-2">
                  Yes, Nelson-GPT is designed as a Progressive Web App (PWA) which means it can be installed on your device and some features are available offline. However, for generating new responses, an internet connection is required.
                </div>
              </details>
              
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-2 hover:bg-muted rounded-lg">
                  <span>How do I install the app on my device?</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="text-muted-foreground mt-3 p-2">
                  <p>On iOS Safari:</p>
                  <ol className="list-decimal pl-4 space-y-1 mt-2">
                    <li>Open Nelson-GPT in Safari</li>
                    <li>Tap the share icon</li>
                    <li>Select "Add to Home Screen"</li>
                    <li>Confirm by tapping "Add"</li>
                  </ol>
                  
                  <p className="mt-3">On Android Chrome:</p>
                  <ol className="list-decimal pl-4 space-y-1 mt-2">
                    <li>Open Nelson-GPT in Chrome</li>
                    <li>Tap the three dots menu</li>
                    <li>Select "Add to Home Screen"</li>
                    <li>Confirm by tapping "Add"</li>
                  </ol>
                </div>
              </details>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm p-4 border border-border">
            <h2 className="font-semibold text-lg mb-4">Contact Support</h2>
            
            <div className="space-y-4">
              <div className="flex items-center p-3 rounded-lg border border-input bg-background">
                <Mail className="h-5 w-5 text-nelson-primary mr-3" />
                <div>
                  <h3 className="font-medium">Email Support</h3>
                  <p className="text-sm text-muted-foreground">support@nelson-gpt.com</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-lg border border-input bg-background">
                <MessageSquare className="h-5 w-5 text-nelson-primary mr-3" />
                <div>
                  <h3 className="font-medium">Live Chat</h3>
                  <p className="text-sm text-muted-foreground">Available 9am-5pm ET, Mon-Fri</p>
                </div>
              </div>
              
              <button className="w-full bg-nelson-primary text-white py-3 rounded-lg hover:bg-nelson-primary/90 transition-colors">
                Start Live Chat
              </button>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm p-4 border border-border">
            <h2 className="font-semibold text-lg mb-4">About</h2>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Nelson-GPT v1.0.0</p>
              <p>Powered by Nelson Textbook of Pediatrics</p>
              <p>© 2025 Nelson-GPT. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Help;
