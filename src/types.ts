export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'biryani' | 'chicken' | 'mutton' | 'tandoori' | 'chinese' | 'drinks';
  isPopular?: boolean;
}

export interface Speciality {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: 'chef-hat' | 'flame' | 'shield' | 'clock' | 'utensils' | 'globe' | 'star';
  popularDishes: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'ambience' | 'chef';
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: 'heart' | 'sparkles' | 'users' | 'zap' | 'indian-rupee' | 'soup';
}
