
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ChevronRight, MapPin, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { mockRooms, mockBookings } from "@/data/mockData";
import { format } from "date-fns";
import { toast } from "@/components/ui/use-toast";

const BookingsPage = () => {
  const activeBookings = mockBookings.filter(booking => 
    booking.status === "Confirmed" || booking.status === "Pending"
  );
  
  const pastBookings = mockBookings.filter(booking => 
    booking.status === "Completed" || booking.status === "Cancelled"
  );

  const getRoom = (roomId) => {
    return mockRooms.find(room => room.id === roomId);
  };

  const formatBookingDate = (dateStr) => {
    try {
      return format(new Date(dateStr), "MMM d, yyyy h:mm a");
    } catch (error) {
      return dateStr;
    }
  };

  const handleCancelBooking = (bookingId) => {
    toast({
      title: "Booking Cancellation",
      description: "This feature will be available in the next version.",
    });
  };

  const BookingCard = ({ booking }) => {
    const room = getRoom(booking.roomId);
    
    if (!room) return null;
    
    return (
      <div className="bg-white rounded-lg shadow mb-4">
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">{room.title}</h3>
            <Badge 
              className={
                booking.status === "Confirmed" ? "bg-green-500" : 
                booking.status === "Pending" ? "bg-yellow-500" :
                booking.status === "Completed" ? "bg-blue-500" : "bg-red-500"
              }
            >
              {booking.status}
            </Badge>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <MapPin size={14} className="mr-1" />
            <span>{room.location}</span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Clock size={14} className="mr-1" />
            <span>Check-in: {formatBookingDate(booking.checkIn)}</span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Clock size={14} className="mr-1" />
            <span>Check-out: {formatBookingDate(booking.checkOut)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold">₹{booking.price}</span>
              <span className="text-sm text-gray-500">
                {booking.sharingType === "Hourly" ? " (Hourly)" : booking.sharingType === "Shared" ? " (Shared)" : " (Private)"}
              </span>
            </div>
            
            <Link to={`/room/${room.id}`} className="text-roomshare-primary flex items-center">
              View Details <ChevronRight size={16} />
            </Link>
          </div>
          
          {(booking.status === "Confirmed" || booking.status === "Pending") && (
            <button 
              className="w-full mt-3 py-2 text-red-600 border border-red-300 rounded-md text-sm"
              onClick={() => handleCancelBooking(booking.id)}
            >
              Cancel Booking
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6 pb-24">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Your Bookings</h1>
      </header>
      
      <Tabs defaultValue="active">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          {activeBookings.length > 0 ? (
            activeBookings.map(booking => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          ) : (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-3" />
              <h3 className="font-medium text-gray-700 mb-1">No active bookings</h3>
              <p className="text-gray-500 mb-4">You don't have any upcoming stays.</p>
              <Link 
                to="/explore" 
                className="text-roomshare-primary hover:text-roomshare-dark"
              >
                Explore rooms
              </Link>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="past">
          {pastBookings.length > 0 ? (
            pastBookings.map(booking => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          ) : (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-3" />
              <h3 className="font-medium text-gray-700 mb-1">No past bookings</h3>
              <p className="text-gray-500 mb-4">Your booking history will appear here.</p>
              <Link 
                to="/explore" 
                className="text-roomshare-primary hover:text-roomshare-dark"
              >
                Book your first stay
              </Link>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingsPage;
