
import React from "react";
import { Link } from "react-router-dom";
import { Search, Shield, Clock, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 pb-16">
      {/* Hero Section */}
      <section className="pt-6 pb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Find your perfect <span className="text-roomshare-primary">room share</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Book private or shared rooms with verified roommates
        </p>
        
        {/* Search Bar */}
        <Link to="/explore">
          <div className="relative mb-8 cursor-pointer">
            <Input
              type="text"
              placeholder="Search by location"
              className="pr-10 bg-white"
              readOnly
            />
            <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
          </div>
        </Link>
      </section>

      {/* Key Features Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Book Your Way</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="hover-scale">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="bg-roomshare-light rounded-full p-3 mb-3">
                <User size={24} className="text-roomshare-primary" />
              </div>
              <h3 className="font-medium text-center">Private Room</h3>
              <p className="text-xs text-center text-gray-500 mt-1">Book entire rooms</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="bg-roomshare-light rounded-full p-3 mb-3 relative">
                <User size={24} className="text-roomshare-primary" />
                <span className="absolute -right-1 -top-1 bg-roomshare-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">+</span>
              </div>
              <h3 className="font-medium text-center">Shared Room</h3>
              <p className="text-xs text-center text-gray-500 mt-1">Book just a bed</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">RoomShare Features</h2>
        <div className="grid grid-cols-1 gap-4">
          <Link to="/preferences" className="block">
            <Card className="hover-scale bg-gradient-to-r from-roomshare-primary to-roomshare-secondary text-white">
              <CardContent className="p-4 flex items-center">
                <div className="mr-4 bg-white rounded-full p-2">
                  <User size={24} className="text-roomshare-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Preference Matching</h3>
                  <p className="text-sm opacity-90">Find compatible roommates</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/verification" className="block">
            <Card className="hover-scale">
              <CardContent className="p-4 flex items-center">
                <div className="mr-4 bg-roomshare-light rounded-full p-2">
                  <Shield size={24} className="text-roomshare-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Aadhaar Verification</h3>
                  <p className="text-sm text-gray-500">Verify your identity for safety</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/booking" className="block">
            <Card className="hover-scale">
              <CardContent className="p-4 flex items-center">
                <div className="mr-4 bg-roomshare-light rounded-full p-2">
                  <Clock size={24} className="text-roomshare-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Hourly Booking</h3>
                  <p className="text-sm text-gray-500">Book rooms by the hour</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/messages" className="block">
            <Card className="hover-scale">
              <CardContent className="p-4 flex items-center">
                <div className="mr-4 bg-roomshare-light rounded-full p-2">
                  <MessageSquare size={24} className="text-roomshare-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Chat with Roommates</h3>
                  <p className="text-sm text-gray-500">Coordinate your stay</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Popular Rooms Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Popular Rooms</h2>
          <Link to="/explore" className="text-roomshare-primary text-sm">
            See all
          </Link>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Discover our most booked shared and private rooms
        </p>
        <Link to="/explore">
          <Button className="w-full">Explore All Rooms</Button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
