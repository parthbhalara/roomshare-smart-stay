import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Clock, MessageSquare } from "lucide-react";

const MessagesPage = () => {
  const conversations = [
    {
      id: "1",
      name: "Raj Kumar",
      lastMessage: "What time will you arrive?",
      time: "10:30 AM",
      unread: true,
      avatar: "https://i.pravatar.cc/150?img=59"
    },
    {
      id: "2",
      name: "Priya Singh",
      lastMessage: "I've checked in already.",
      time: "Yesterday",
      unread: false,
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
      id: "3",
      name: "Amit Sharma",
      lastMessage: "The room is quite spacious.",
      time: "Yesterday",
      unread: false,
      avatar: "https://i.pravatar.cc/150?img=58"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-4">Messages</h1>
      
      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Search conversations"
          className="pr-10"
        />
        <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
      </div>
      
      <div className="space-y-3">
        {conversations.map(convo => (
          <Card key={convo.id} className="hover-scale">
            <CardContent className="p-3">
              <div className="flex items-center">
                <div className="relative mr-3">
                  <img 
                    src={convo.avatar} 
                    alt={convo.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {convo.unread && (
                    <span className="absolute -top-1 -right-1 bg-roomshare-primary rounded-full w-3 h-3"></span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`font-medium ${convo.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                      {convo.name}
                    </h3>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock size={12} className="mr-1" />
                      {convo.time}
                    </span>
                  </div>
                  <p className={`text-sm truncate ${convo.unread ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
                    {convo.lastMessage}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {conversations.length === 0 && (
        <div className="text-center py-12">
          <div className="mb-4">
            <MessageSquare size={40} className="mx-auto text-gray-300" />
          </div>
          <h3 className="text-lg font-medium text-gray-700">No messages yet</h3>
          <p className="text-gray-500 mb-4">
            Your conversations with roommates will appear here
          </p>
          <Button variant="outline">Explore Rooms</Button>
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
