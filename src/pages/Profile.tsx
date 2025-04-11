
import React from 'react';
import AppLayout from '../components/AppLayout';
import { User, Mail, Phone, Calendar } from 'lucide-react';

const Profile = () => {
  return (
    <AppLayout>
      <div className="flex flex-col h-full overflow-y-auto p-4">
        <div className="text-center mb-6">
          <div className="w-24 h-24 rounded-full bg-nelson-primary mx-auto flex items-center justify-center text-white">
            <User className="h-12 w-12" />
          </div>
          <h1 className="text-2xl font-bold mt-4">Dr. Jane Smith</h1>
          <p className="text-muted-foreground">Pediatrician</p>
        </div>
        
        <div className="space-y-6 max-w-md mx-auto w-full">
          <div className="bg-card rounded-lg shadow-sm p-4 border border-border">
            <h2 className="font-semibold text-lg mb-4">Personal Information</h2>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-nelson-primary mr-3" />
                <span>dr.jane.smith@example.com</span>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-nelson-primary mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-nelson-primary mr-3" />
                <span>Member since January 2023</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm p-4 border border-border">
            <h2 className="font-semibold text-lg mb-4">App Usage</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Conversations</span>
                <span className="font-medium">27</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Questions Asked</span>
                <span className="font-medium">142</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Last Session</span>
                <span className="font-medium">Today, 9:45 AM</span>
              </div>
            </div>
          </div>
          
          <button className="w-full bg-nelson-primary text-white py-3 rounded-lg hover:bg-nelson-primary/90 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
