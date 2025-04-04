
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Upload, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const VerificationPage = () => {
  const [verificationStep, setVerificationStep] = useState<number>(1);
  const [aadharNumber, setAadharNumber] = useState<string>("");
  
  const handleNext = () => {
    if (verificationStep < 3) {
      setVerificationStep(verificationStep + 1);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-6">Aadhaar Verification</h1>
      
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-center mb-6">
            <Shield size={40} className="text-roomshare-primary" />
          </div>
          
          <p className="text-gray-700 text-center mb-6">
            To ensure safety and trust, we require Aadhaar verification for all users.
            Your data is secure and encrypted.
          </p>
          
          {verificationStep === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Step 1: Enter Aadhaar Number</h2>
              <Input 
                type="text" 
                placeholder="XXXX XXXX XXXX" 
                value={aadharNumber}
                onChange={(e) => setAadharNumber(e.target.value)}
              />
              <Button className="w-full" onClick={handleNext}>Next</Button>
            </div>
          )}
          
          {verificationStep === 2 && (
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Step 2: Upload Aadhaar Card</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <Upload size={24} className="mx-auto text-gray-500 mb-2" />
                <p className="text-gray-500 mb-2">Click to upload or drag and drop</p>
                <p className="text-gray-400 text-sm">JPG, PNG or PDF (max. 5MB)</p>
              </div>
              <Button className="w-full" onClick={handleNext}>Upload & Verify</Button>
            </div>
          )}
          
          {verificationStep === 3 && (
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center">
                <CheckCircle size={60} className="text-green-500" />
              </div>
              <h2 className="text-lg font-medium">Verification in Process</h2>
              <p className="text-gray-500">
                We've received your documents. Verification usually takes 24-48 hours.
                We'll notify you once it's complete.
              </p>
              <Button variant="outline" className="w-full" onClick={() => window.history.back()}>
                Return to Home
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="flex items-center justify-center gap-2 my-4">
        <div className={`w-3 h-3 rounded-full ${verificationStep >= 1 ? 'bg-roomshare-primary' : 'bg-gray-300'}`}></div>
        <div className={`w-3 h-3 rounded-full ${verificationStep >= 2 ? 'bg-roomshare-primary' : 'bg-gray-300'}`}></div>
        <div className={`w-3 h-3 rounded-full ${verificationStep >= 3 ? 'bg-roomshare-primary' : 'bg-gray-300'}`}></div>
      </div>
    </div>
  );
};

export default VerificationPage;
