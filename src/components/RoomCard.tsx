
import { Link } from "react-router-dom";
import { Star, Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Room } from "@/types";

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <Link to={`/room/${room.id}`} className="block">
      <div className="room-card bg-white rounded-lg overflow-hidden shadow">
        <div className="relative">
          <img
            src={room.images[0]}
            alt={room.title}
            className="w-full room-image"
          />
          {room.sharingType && (
            <Badge className="absolute top-2 left-2 bg-roomshare-primary">
              {room.sharingType}
            </Badge>
          )}
          {room.hourlyBooking && (
            <Badge className="absolute top-2 right-2 bg-roomshare-accent">
              <Clock size={14} className="mr-1" /> Hourly
            </Badge>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-gray-900 line-clamp-1">{room.title}</h3>
            <div className="flex items-center">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm ml-1">{room.rating}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-2 line-clamp-1">{room.location}</p>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Users size={16} className="mr-1" />
            <span>{room.maxOccupancy} max</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-gray-900">₹{room.price}</span>
              <span className="text-gray-500 text-sm">
                {room.sharingType === "Shared" ? "/bed" : "/night"}
              </span>
            </div>
            {room.discount && (
              <Badge variant="outline" className="text-green-600 border-green-600">
                {room.discount}% OFF
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
