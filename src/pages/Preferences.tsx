
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Check, User, Users, Cigarette, CigaretteOff, UtensilsCrossed, Utensils } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define the schema for our preferences form
const formSchema = z.object({
  gender: z.enum(["male", "female", "any"]),
  diet: z.enum(["vegetarian", "non-vegetarian", "no-preference"]),
  smoking: z.enum(["non-smoker", "smoker", "no-preference"]),
  accommodationType: z.enum(["family", "couple", "other"]),
  ageRange: z.object({
    min: z.coerce.number().min(18).max(100),
    max: z.coerce.number().min(18).max(100),
  }).refine(data => data.min <= data.max, {
    message: "Maximum age must be greater than minimum age",
    path: ["max"]
  })
});

type PreferencesFormValues = z.infer<typeof formSchema>;

const PreferencesPage = () => {
  const navigate = useNavigate();
  const [isFirstTime, setIsFirstTime] = useState(true);

  // Set default values from localStorage if they exist
  useEffect(() => {
    const savedPreferences = localStorage.getItem("userPreferences");
    if (savedPreferences) {
      setIsFirstTime(false);
      form.reset(JSON.parse(savedPreferences));
    }
  }, []);

  // Set up form with react-hook-form
  const form = useForm<PreferencesFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "any",
      diet: "no-preference",
      smoking: "no-preference",
      accommodationType: "other",
      ageRange: {
        min: 18,
        max: 65
      }
    }
  });

  const onSubmit = (values: PreferencesFormValues) => {
    // Save preferences to localStorage
    localStorage.setItem("userPreferences", JSON.stringify(values));
    
    // Show success message
    toast.success(isFirstTime ? "Preferences saved! Now you can explore rooms." : "Your preferences have been updated!");
    
    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-6">Set Your Preferences</h1>
      
      {isFirstTime && (
        <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100">
          <p className="text-blue-800 text-sm">
            Welcome to RoomShare! Please set your preferences to help us find the perfect roommate match for you.
          </p>
        </div>
      )}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Gender Preferences */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Gender Preferences</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                  >
                    <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        Male
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        Female
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                      <RadioGroupItem value="any" id="any_gender" />
                      <Label htmlFor="any_gender" className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Any
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Smoking Preferences */}
          <FormField
            control={form.control}
            name="smoking"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Smoking Preferences</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                  >
                    <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                      <RadioGroupItem value="non-smoker" id="non-smoker" />
                      <Label htmlFor="non-smoker" className="flex items-center">
                        <CigaretteOff className="mr-2 h-4 w-4" />
                        Non-smoker
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                      <RadioGroupItem value="smoker" id="smoker" />
                      <Label htmlFor="smoker" className="flex items-center">
                        <Cigarette className="mr-2 h-4 w-4" />
                        Smoker
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                      <RadioGroupItem value="no-preference" id="no-preference-smoking" />
                      <Label htmlFor="no-preference-smoking" className="flex items-center">
                        <Check className="mr-2 h-4 w-4" />
                        No preference
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Diet Preferences */}
          <FormField
            control={form.control}
            name="diet"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Diet Preferences</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                  >
                    <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                      <RadioGroupItem value="vegetarian" id="vegetarian" />
                      <Label htmlFor="vegetarian" className="flex items-center">
                        <Utensils className="mr-2 h-4 w-4" />
                        Vegetarian
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                      <RadioGroupItem value="non-vegetarian" id="non-vegetarian" />
                      <Label htmlFor="non-vegetarian" className="flex items-center">
                        <UtensilsCrossed className="mr-2 h-4 w-4" />
                        Non-vegetarian
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                      <RadioGroupItem value="no-preference" id="no-preference-diet" />
                      <Label htmlFor="no-preference-diet" className="flex items-center">
                        <Check className="mr-2 h-4 w-4" />
                        No preference
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Accommodation Type */}
          <FormField
            control={form.control}
            name="accommodationType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Accommodation Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                  >
                    <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                      <RadioGroupItem value="family" id="family" />
                      <Label htmlFor="family" className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Family
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                      <RadioGroupItem value="couple" id="couple" />
                      <Label htmlFor="couple" className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Couple
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        Other
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Age Range */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium">Age Range</h2>
            <div className="flex items-center gap-4">
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="ageRange.min"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Minimum Age</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Min" min={18} max={100} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="ageRange.max"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Maximum Age</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Max" min={18} max={100} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          
          {/* Save Button */}
          <Button type="submit" className="w-full">
            {isFirstTime ? "Save Preferences & Continue" : "Update Preferences"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PreferencesPage;
