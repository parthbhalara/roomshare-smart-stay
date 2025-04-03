
export interface Room {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  location: string;
  sharingType: 'Shared' | 'Private';
  hourlyBooking: boolean;
  rating: number;
  reviews: number;
  maxOccupancy: number;
  amenities: string[];
  discount: number | null;
  availableSpots: number;
  totalSpots: number;
  bookedBy: string[];
}

export interface UserPreferences {
  smoking: boolean;
  vegetarian: boolean;
  hygiene: 'Low' | 'Medium' | 'High';
  ageRange: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  gender: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
  preferences: UserPreferences;
  verified: boolean;
  rating: number;
  reviews: number;
}

export interface Booking {
  id: string;
  roomId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  price: number;
  sharingType: 'Shared' | 'Private' | 'Hourly';
  createdAt: string;
}
