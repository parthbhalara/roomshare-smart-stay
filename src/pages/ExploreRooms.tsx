
import { useState } from "react";
import { Search, Filter, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RoomCard from "@/components/RoomCard";
import { mockRooms } from "@/data/mockData";

const ExploreRoomsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sharingFilter, setSharingFilter] = useState<string | null>(null);
  const [hourlyFilter, setHourlyFilter] = useState<boolean | null>(null);

  const filteredRooms = mockRooms.filter(room => {
    // Filter by search query
    if (
      searchQuery &&
      !room.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !room.location.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    
    // Filter by sharing type
    if (sharingFilter && room.sharingType !== sharingFilter) {
      return false;
    }
    
    // Filter by hourly booking
    if (hourlyFilter !== null && room.hourlyBooking !== hourlyFilter) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Explore Rooms</h1>
      </header>
      
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder="Search by location or hotel name"
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="flex items-center space-x-2 mb-6 overflow-x-auto pb-2">
        <Button
          variant={sharingFilter === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSharingFilter(null)}
          className={sharingFilter === null ? "bg-roomshare-primary" : ""}
        >
          All
        </Button>
        <Button
          variant={sharingFilter === "Shared" ? "default" : "outline"}
          size="sm"
          onClick={() => setSharingFilter("Shared")}
          className={sharingFilter === "Shared" ? "bg-roomshare-primary" : ""}
        >
          Shared Rooms
        </Button>
        <Button
          variant={sharingFilter === "Private" ? "default" : "outline"}
          size="sm"
          onClick={() => setSharingFilter("Private")}
          className={sharingFilter === "Private" ? "bg-roomshare-primary" : ""}
        >
          Private Rooms
        </Button>
        <Button
          variant={hourlyFilter === true ? "default" : "outline"}
          size="sm"
          onClick={() => setHourlyFilter(prevState => prevState === true ? null : true)}
          className={hourlyFilter === true ? "bg-roomshare-primary" : ""}
        >
          Hourly
        </Button>
      </div>

      <div className="mb-4">
        <p className="text-gray-600">
          {filteredRooms.length} {filteredRooms.length === 1 ? "room" : "rooms"} available
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {filteredRooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
        {filteredRooms.length === 0 && (
          <div className="col-span-2 text-center py-12">
            <p className="text-gray-500">No rooms found matching your criteria.</p>
            <Button 
              variant="link" 
              className="text-roomshare-primary"
              onClick={() => {
                setSearchQuery("");
                setSharingFilter(null);
                setHourlyFilter(null);
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreRoomsPage;
