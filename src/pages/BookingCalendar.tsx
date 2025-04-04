
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar as CalendarIcon } from "lucide-react";

const BookingCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  
  const timeSlots = [
    "08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00",
    "12:00 - 13:00", "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00",
    "16:00 - 17:00", "17:00 - 18:00", "18:00 - 19:00", "19:00 - 20:00",
    "20:00 - 21:00", "21:00 - 22:00", "22:00 - 23:00", "23:00 - 00:00"
  ];

  const handleTimeSlotSelect = (slot: string) => {
    setSelectedTimeSlot(slot);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-6">Hourly Booking</h1>
      
      <div className="space-y-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-4">
              <CalendarIcon size={20} className="text-roomshare-primary mr-2" />
              <h2 className="text-lg font-medium">Select Date</h2>
            </div>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="mx-auto"
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-4">
              <Clock size={20} className="text-roomshare-primary mr-2" />
              <h2 className="text-lg font-medium">Select Time Slot</h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <Button
                  key={slot}
                  variant={selectedTimeSlot === slot ? "default" : "outline"}
                  className={`justify-start ${selectedTimeSlot === slot ? 'bg-roomshare-primary' : ''}`}
                  onClick={() => handleTimeSlotSelect(slot)}
                >
                  <Clock size={16} className="mr-2" />
                  {slot}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-medium mb-4">Booking Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">
                  {selectedDate ? selectedDate.toLocaleDateString() : "Not selected"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">
                  {selectedTimeSlot || "Not selected"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">1 hour</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-medium">₹599</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Button className="w-full">Proceed to Payment</Button>
      </div>
    </div>
  );
};

export default BookingCalendarPage;
