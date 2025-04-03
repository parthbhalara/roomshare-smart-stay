
import { useState } from "react";
import { 
  User, Settings, Star, Shield, LogOut, ChevronRight, CreditCard, 
  Bell, HelpCircle, BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { mockUsers } from "@/data/mockData";
import { toast } from "@/components/ui/use-toast";

const ProfilePage = () => {
  const [user] = useState(mockUsers[0]);
  
  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "This feature will be available in the next version.",
    });
  };
  
  const menuItems = [
    { icon: <User size={18} />, title: "Personal Information", link: "#" },
    { icon: <CreditCard size={18} />, title: "Payment Methods", link: "#" },
    { icon: <Bell size={18} />, title: "Notifications", link: "#" },
    { icon: <Settings size={18} />, title: "Preferences", link: "#" },
    { icon: <HelpCircle size={18} />, title: "Help Center", link: "#" },
    { icon: <BookOpen size={18} />, title: "Terms & Policies", link: "#" }
  ];
  
  const MenuItem = ({ icon, title, link }) => (
    <a 
      href={link} 
      className="flex justify-between items-center p-4 border-b border-gray-100"
      onClick={(e) => {
        e.preventDefault();
        toast({
          title: title,
          description: "This feature will be available in the next version.",
        });
      }}
    >
      <div className="flex items-center">
        <div className="text-gray-500 mr-3">{icon}</div>
        <span>{title}</span>
      </div>
      <ChevronRight size={18} className="text-gray-400" />
    </a>
  );

  return (
    <div className="container mx-auto px-4 py-6 pb-24">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
      </header>
      
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 flex items-center">
          <Avatar className="w-16 h-16 mr-4">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <div className="flex items-center mt-1">
              <Star size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
              <span>{user.rating}</span>
              <span className="text-gray-500 text-sm ml-1">({user.reviews} reviews)</span>
            </div>
            {user.verified && (
              <div className="flex items-center text-green-600 text-sm mt-1">
                <Shield size={14} className="mr-1" />
                Verified User
              </div>
            )}
          </div>
        </div>
        
        <div className="px-6 py-3 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center">
            <Bell size={18} className="text-gray-500 mr-2" />
            <span>Notifications</span>
          </div>
          <Switch />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold">Account Settings</h3>
        </div>
        
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
      
      <Button 
        variant="outline" 
        className="w-full border-red-300 text-red-600 hover:bg-red-50"
        onClick={handleLogout}
      >
        <LogOut size={18} className="mr-2" />
        Logout
      </Button>
    </div>
  );
};

export default ProfilePage;
