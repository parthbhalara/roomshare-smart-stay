
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
  ChevronLeft, Star, MapPin, Users, Clock, Wifi, Tv, 
  Coffee, Share2, Heart, Calendar, User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { mockRooms } from "@/data/mockData";
import { toast } from "@/components/ui/use-toast";

const RoomDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [liked, setLiked] = useState(false);

  const room = mockRooms.find(r => r.id === id);

  if (!room) {
    return (
      <div className="container mx-auto px-4 py-6 text-center">
        <p>Room not found.</p>
        <Button onClick={() => navigate(-1)} variant="link" className="mt-4">
          <ChevronLeft className="mr-2" size={16} /> Back to rooms
        </Button>
      </div>
    );
  }

  const handleBookNow = () => {
    toast({
      title: "Booking Initiated",
      description: "This feature will be available in the next version.",
    });
  };

  const handleToggleLike = () => {
    setLiked(!liked);
    toast({
      title: liked ? "Removed from favorites" : "Added to favorites",
      description: liked ? "This room has been removed from your favorites." : "This room has been added to your favorites.",
    });
  };

  const handleShare = () => {
    toast({
      title: "Share Room",
      description: "Sharing functionality will be available in the next version.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-6 pb-24">
      <Button onClick={() => navigate(-1)} variant="ghost" className="mb-4 -ml-2">
        <ChevronLeft className="mr-1" size={18} /> Back
      </Button>
      
      <div className="relative mb-6">
        <div className="rounded-lg overflow-hidden h-64">
          <img
            src={room.images[selectedImage] || "/placeholder.svg"}
            alt={room.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {room.images.length > 1 && (
          <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
            {room.images.map((image, index) => (
              <div 
                key={index}
                className={`w-20 h-16 rounded overflow-hidden flex-shrink-0 cursor-pointer border-2 ${
                  selectedImage === index ? "border-roomshare-primary" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`Room view ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
        
        <div className="absolute top-2 right-2 flex gap-2">
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full bg-white bg-opacity-80 hover:bg-white"
            onClick={handleShare}
          >
            <Share2 size={18} className="text-gray-700" />
          </Button>
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full bg-white bg-opacity-80 hover:bg-white"
            onClick={handleToggleLike}
          >
            <Heart 
              size={18} 
              className={liked ? "text-red-500 fill-red-500" : "text-gray-700"} 
            />
          </Button>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold text-gray-900">{room.title}</h1>
          <div className="flex items-center">
            <Star size={18} className="text-yellow-500 fill-yellow-500" />
            <span className="ml-1 font-medium">{room.rating}</span>
            <span className="text-gray-500 ml-1">({room.reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center mt-2">
          <MapPin size={16} className="text-gray-500 mr-1" />
          <span className="text-gray-500">{room.location}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge className="bg-roomshare-primary">
            {room.sharingType}
          </Badge>
          {room.hourlyBooking && (
            <Badge className="bg-roomshare-accent">
              <Clock size={14} className="mr-1" /> Hourly Available
            </Badge>
          )}
          <Badge variant="outline">
            <Users size={14} className="mr-1" /> {room.maxOccupancy} max
          </Badge>
        </div>
      </div>
      
      <Tabs defaultValue="details">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-600 mb-4">{room.description}</p>
              
              <h3 className="font-semibold mb-2">Room Sharing</h3>
              <p className="text-gray-600 mb-2">
                This room has {room.totalSpots} {room.totalSpots === 1 ? "spot" : "spots"} in total, with {room.availableSpots} currently available.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-roomshare-primary h-2.5 rounded-full" 
                  style={{ width: `${(room.availableSpots / room.totalSpots) * 100}%` }}
                ></div>
              </div>
              
              {room.bookedBy.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Currently Shared With</h3>
                  <div className="flex flex-wrap gap-2">
                    {room.bookedBy.map((userId, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                          <User size={14} />
                        </div>
                        <span className="ml-2">User {index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="amenities" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4">Room Amenities</h3>
              <div className="grid grid-cols-2 gap-y-3">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    {amenity.includes("Wi-Fi") ? <Wifi size={16} className="mr-2" /> :
                     amenity.includes("TV") ? <Tv size={16} className="mr-2" /> :
                     amenity.includes("Coffee") ? <Coffee size={16} className="mr-2" /> :
                     <div className="w-4 h-4 mr-2 rounded-full bg-roomshare-light" />}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="availability" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4">Availability</h3>
              <p className="text-gray-600 mb-4">
                {room.availableSpots === room.totalSpots 
                  ? "This room is currently fully available." 
                  : room.availableSpots === 0 
                    ? "This room is currently fully booked."
                    : `This room has ${room.availableSpots} out of ${room.totalSpots} spots available.`}
              </p>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Select Booking Type</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Button variant="outline" className="justify-start">
                    <Calendar className="mr-2 h-4 w-4" /> Full Stay
                  </Button>
                  {room.hourlyBooking && (
                    <Button variant="outline" className="justify-start">
                      <Clock className="mr-2 h-4 w-4" /> Hourly
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold">₹{room.price}
              <span className="text-sm font-normal text-gray-500">
                {room.sharingType === "Shared" ? "/bed" : "/night"}
              </span>
            </p>
            {room.discount && (
              <p className="text-green-600 text-sm">{room.discount}% off</p>
            )}
          </div>
          <Button className="bg-roomshare-primary hover:bg-roomshare-dark" onClick={handleBookNow}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage;
