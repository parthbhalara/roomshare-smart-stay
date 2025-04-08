
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";

const Layout = () => {
  const [hasPreferences, setHasPreferences] = useState<boolean | null>(null);
  const location = useLocation();

  // Check if user has set preferences (in a real app, this would use actual user data)
  useEffect(() => {
    // For MVP, we'll use localStorage to check if preferences are set
    const preferences = localStorage.getItem("userPreferences");
    setHasPreferences(!!preferences);
  }, []);

  // If we're still loading preferences data, show nothing yet
  if (hasPreferences === null) {
    return null;
  }

  // If preferences aren't set and we're not already on the preferences page,
  // redirect to preferences page
  if (!hasPreferences && location.pathname !== "/preferences") {
    return <Navigate to="/preferences" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 py-4 text-center shadow-sm">
        <h1 className="text-xl font-bold text-roomshare-primary">RoomShare</h1>
      </header>
      <main className="flex-1 pb-16">
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};

export default Layout;
