
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ExploreRoomsPage from "./pages/ExploreRooms";
import RoomDetailPage from "./pages/RoomDetail";
import ProfilePage from "./pages/Profile";
import BookingsPage from "./pages/Bookings";
import AuthPage from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import PreferencesPage from "./pages/Preferences";
import VerificationPage from "./pages/Verification";
import MessagesPage from "./pages/Messages";
import BookingCalendarPage from "./pages/BookingCalendar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="explore" element={<ExploreRoomsPage />} />
            <Route path="room/:id" element={<RoomDetailPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="bookings" element={<BookingsPage />} />
            <Route path="preferences" element={<PreferencesPage />} />
            <Route path="verification" element={<VerificationPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="booking" element={<BookingCalendarPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
