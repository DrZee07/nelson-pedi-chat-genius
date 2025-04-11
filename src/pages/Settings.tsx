
import React from 'react';
import AppLayout from '../components/AppLayout';
import { Bell, Moon, Trash2, Download, RefreshCw, Globe, Shield } from 'lucide-react';

const Settings = () => {
  return (
    <AppLayout>
      <div className="flex flex-col h-full overflow-y-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <div className="space-y-6">
          <div className="bg-card rounded-lg shadow-sm p-4 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-nelson-primary mr-3" />
                <h2 className="font-semibold">Notifications</h2>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Push Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-nelson-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Email Updates</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-nelson-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm p-4 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Moon className="h-5 w-5 text-nelson-primary mr-3" />
                <h2 className="font-semibold">Appearance</h2>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Dark Mode</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-nelson-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Font Size</span>
                <select className="bg-background border border-input rounded-md px-3 py-2">
                  <option>Small</option>
                  <option selected>Medium</option>
                  <option>Large</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm p-4 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-nelson-primary mr-3" />
                <h2 className="font-semibold">Language & Region</h2>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Language</span>
                <select className="bg-background border border-input rounded-md px-3 py-2">
                  <option selected>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm p-4 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-nelson-primary mr-3" />
                <h2 className="font-semibold">Privacy & Data</h2>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Save Chat History</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-nelson-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Usage Analytics</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-nelson-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            </div>
            
            <button className="flex items-center text-destructive mt-3">
              <Trash2 className="h-4 w-4 mr-2" />
              <span>Clear All Chat History</span>
            </button>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm p-4 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Download className="h-5 w-5 text-nelson-primary mr-3" />
                <h2 className="font-semibold">Application</h2>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>App Version</span>
                <span className="text-muted-foreground">1.0.0</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Storage Used</span>
                <span className="text-muted-foreground">23 MB</span>
              </div>
              
              <button className="flex items-center text-nelson-primary">
                <RefreshCw className="h-4 w-4 mr-2" />
                <span>Check for Updates</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;
