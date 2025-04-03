
import { Link, useLocation } from "react-router-dom";
import { Home, Search, User, Calendar, MessageSquare } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 z-50">
      <div className="container max-w-md mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className={`navigation-item ${isActive('/') ? 'active' : ''}`}>
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link to="/explore" className={`navigation-item ${isActive('/explore') ? 'active' : ''}`}>
            <Search size={20} />
            <span>Explore</span>
          </Link>
          <Link to="/bookings" className={`navigation-item ${isActive('/bookings') ? 'active' : ''}`}>
            <Calendar size={20} />
            <span>Bookings</span>
          </Link>
          <Link to="/profile" className={`navigation-item ${isActive('/profile') ? 'active' : ''}`}>
            <User size={20} />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
