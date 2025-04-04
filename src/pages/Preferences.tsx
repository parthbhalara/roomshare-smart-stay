
import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const PreferencesPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-6">Set Your Preferences</h1>
      
      <div className="space-y-6">
        {/* Gender Preferences */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Gender Preferences</h2>
          <div className="flex gap-4">
            <Button variant="outline" className="flex-1 justify-start">Male</Button>
            <Button variant="outline" className="flex-1 justify-start">Female</Button>
            <Button variant="outline" className="flex-1 justify-start">Any</Button>
          </div>
        </div>
        
        {/* Smoking Preferences */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Smoking</h2>
          <div className="flex gap-4">
            <Button variant="outline" className="flex-1 justify-start">Non-smoker</Button>
            <Button variant="outline" className="flex-1 justify-start">Smoker</Button>
            <Button variant="outline" className="flex-1 justify-start">No preference</Button>
          </div>
        </div>
        
        {/* Diet Preferences */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Diet</h2>
          <div className="flex gap-4">
            <Button variant="outline" className="flex-1 justify-start">Vegetarian</Button>
            <Button variant="outline" className="flex-1 justify-start">Non-vegetarian</Button>
            <Button variant="outline" className="flex-1 justify-start">No preference</Button>
          </div>
        </div>
        
        {/* Hygiene Expectations */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Hygiene Expectations</h2>
          <div className="grid grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start">Low</Button>
            <Button variant="outline" className="justify-start">Medium</Button>
            <Button variant="outline" className="justify-start">High</Button>
          </div>
        </div>
        
        {/* Age Range */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Age Range</h2>
          <div className="flex items-center gap-4">
            <Input type="number" placeholder="Min" className="w-24" />
            <span>to</span>
            <Input type="number" placeholder="Max" className="w-24" />
          </div>
        </div>
        
        {/* Save Button */}
        <Button className="w-full">Save Preferences</Button>
      </div>
    </div>
  );
};

export default PreferencesPage;
