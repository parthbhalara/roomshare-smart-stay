
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Calendar, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RoomCard from "@/components/RoomCard";
import { mockRooms } from "@/data/mockData";

const HomePage = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const popularDestinations = [
    { id: 1, name: "Mumbai", image: "/placeholder.svg" },
    { id: 2, name: "Delhi", image: "/placeholder.svg" },
    { id: 3, name: "Bangalore", image: "/placeholder.svg" },
    { id: 4, name: "Goa", image: "/placeholder.svg" }
  ];

  const featuredRooms = mockRooms.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">RoomShare</h1>
        <p className="text-gray-600">Find your perfect shared space</p>
      </header>

      <Card className="mb-8">
        <CardContent className="p-4">
          <Tabs defaultValue="room">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="room">Room Sharing</TabsTrigger>
              <TabsTrigger value="hourly">Hourly Booking</TabsTrigger>
            </TabsList>
            <TabsContent value="room">
              <div className="space-y-4">
                <div className="flex items-center border rounded-md p-3 bg-white">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <Input 
                    type="text" 
                    placeholder="Where are you going?" 
                    className="border-0 focus-visible:ring-0 p-0" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center border rounded-md p-3 bg-white">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <Input 
                      type="date" 
                      placeholder="Check-in" 
                      className="border-0 focus-visible:ring-0 p-0"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center border rounded-md p-3 bg-white">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <Input 
                      type="date" 
                      placeholder="Check-out" 
                      className="border-0 focus-visible:ring-0 p-0"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex items-center border rounded-md p-3 bg-white">
                  <User className="h-5 w-5 text-gray-400 mr-2" />
                  <select 
                    className="w-full border-0 focus:ring-0 bg-transparent"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="">Number of guests</option>
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                  </select>
                </div>

                <Button className="w-full bg-roomshare-primary hover:bg-roomshare-dark">
                  <Search className="mr-2 h-4 w-4" /> Search Rooms
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="hourly">
              <div className="space-y-4">
                <div className="flex items-center border rounded-md p-3 bg-white">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <Input 
                    type="text" 
                    placeholder="Where are you going?" 
                    className="border-0 focus-visible:ring-0 p-0"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center border rounded-md p-3 bg-white">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <Input 
                      type="datetime-local" 
                      placeholder="Start time" 
                      className="border-0 focus-visible:ring-0 p-0"
                    />
                  </div>
                  <div className="flex items-center border rounded-md p-3 bg-white">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <Input 
                      type="datetime-local" 
                      placeholder="End time" 
                      className="border-0 focus-visible:ring-0 p-0"
                    />
                  </div>
                </div>

                <Button className="w-full bg-roomshare-primary hover:bg-roomshare-dark">
                  <Search className="mr-2 h-4 w-4" /> Search Hourly Rooms
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Popular Destinations</h2>
          <Link to="/explore" className="text-roomshare-primary flex items-center">
            See all <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularDestinations.map((destination) => (
            <Link to="/explore" key={destination.id} className="block">
              <div className="relative rounded-lg overflow-hidden h-32">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <h3 className="text-white font-medium">{destination.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Featured Rooms</h2>
          <Link to="/explore" className="text-roomshare-primary flex items-center">
            See all <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredRooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      <section>
        <div className="bg-roomshare-light rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">How RoomShare Works</h2>
          <p className="text-gray-600 mb-4">
            Save money by booking a portion of a room or find a compatible roommate for your stay.
          </p>
          <Button variant="outline" className="border-roomshare-primary text-roomshare-primary hover:bg-roomshare-light">
            Learn More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
