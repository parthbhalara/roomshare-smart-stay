
import { Room, User } from "@/types";

export const mockRooms: Room[] = [
  {
    id: "1",
    title: "Deluxe Twin Room with Ocean View",
    description: "Spacious twin room with spectacular ocean views. Perfect for solo travelers or friends looking to share.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    price: 2500,
    location: "Mumbai, Maharashtra",
    sharingType: "Shared",
    hourlyBooking: true,
    rating: 4.8,
    reviews: 24,
    maxOccupancy: 2,
    amenities: ["Free Wi-Fi", "Air conditioning", "Private bathroom", "TV"],
    discount: 15,
    availableSpots: 1,
    totalSpots: 2,
    bookedBy: []
  },
  {
    id: "2",
    title: "Premium Single with Work Desk",
    description: "Modern single room with dedicated work space. Ideal for business travelers who need to work remotely.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    price: 1800,
    location: "Bangalore, Karnataka",
    sharingType: "Private",
    hourlyBooking: true,
    rating: 4.5,
    reviews: 18,
    maxOccupancy: 1,
    amenities: ["Free Wi-Fi", "Work desk", "Coffee maker", "Ironing facilities"],
    discount: null,
    availableSpots: 1,
    totalSpots: 1,
    bookedBy: []
  },
  {
    id: "3",
    title: "Budget Triple Room Near Metro",
    description: "Affordable triple room perfect for groups or families. Close to public transport for easy city access.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    price: 1200,
    location: "Delhi, NCR",
    sharingType: "Shared",
    hourlyBooking: false,
    rating: 4.2,
    reviews: 37,
    maxOccupancy: 3,
    amenities: ["Free Wi-Fi", "Air conditioning", "Shared bathroom", "Locker"],
    discount: 20,
    availableSpots: 2,
    totalSpots: 3,
    bookedBy: []
  },
  {
    id: "4",
    title: "Luxury Suite with Private Balcony",
    description: "Upscale suite with spacious private balcony and premium amenities.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    price: 5000,
    location: "Goa, Calangute",
    sharingType: "Private",
    hourlyBooking: false,
    rating: 4.9,
    reviews: 52,
    maxOccupancy: 2,
    amenities: ["Free Wi-Fi", "Air conditioning", "Private bathroom", "Minibar", "Sea view"],
    discount: null,
    availableSpots: 1,
    totalSpots: 1,
    bookedBy: []
  },
  {
    id: "5",
    title: "Cozy Double Room in Central Area",
    description: "Comfortable double room located in the heart of the city with easy access to attractions.",
    images: ["/placeholder.svg"],
    price: 2200,
    location: "Jaipur, Rajasthan",
    sharingType: "Shared",
    hourlyBooking: false,
    rating: 4.3,
    reviews: 15,
    maxOccupancy: 2,
    amenities: ["Free Wi-Fi", "Air conditioning", "TV", "Room service"],
    discount: 10,
    availableSpots: 1,
    totalSpots: 2,
    bookedBy: []
  },
  {
    id: "6",
    title: "Female-Only Dormitory Room",
    description: "Safe and comfortable female-only dormitory with private lockers and reading lights.",
    images: ["/placeholder.svg"],
    price: 800,
    location: "Pondicherry",
    sharingType: "Shared",
    hourlyBooking: false,
    rating: 4.6,
    reviews: 28,
    maxOccupancy: 6,
    amenities: ["Free Wi-Fi", "Air conditioning", "Shared bathroom", "Lockers"],
    discount: 5,
    availableSpots: 3,
    totalSpots: 6,
    bookedBy: []
  }
];

export const mockUsers: User[] = [
  {
    id: "u1",
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91 9876543210",
    avatar: "/placeholder.svg",
    gender: "Female",
    preferences: {
      smoking: false,
      vegetarian: true,
      hygiene: "High",
      ageRange: "25-35"
    },
    verified: true,
    rating: 4.7,
    reviews: 12
  },
  {
    id: "u2",
    name: "Rahul Singh",
    email: "rahul@example.com",
    phone: "+91 9876543211",
    avatar: "/placeholder.svg",
    gender: "Male",
    preferences: {
      smoking: false,
      vegetarian: false,
      hygiene: "Medium",
      ageRange: "18-25"
    },
    verified: true,
    rating: 4.5,
    reviews: 8
  }
];

export const mockBookings = [
  {
    id: "b1",
    roomId: "1",
    userId: "u1",
    checkIn: "2025-05-10T14:00:00",
    checkOut: "2025-05-12T11:00:00",
    status: "Confirmed",
    price: 5000,
    sharingType: "Shared",
    createdAt: "2025-04-01T08:30:00"
  },
  {
    id: "b2",
    roomId: "3",
    userId: "u2",
    checkIn: "2025-04-15T12:00:00",
    checkOut: "2025-04-15T18:00:00",
    status: "Completed",
    price: 900,
    sharingType: "Hourly",
    createdAt: "2025-04-01T10:15:00"
  }
];
