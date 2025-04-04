
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
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
