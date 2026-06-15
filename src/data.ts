import { Speciality, Testimonial, GalleryItem, Feature, MenuItem } from './types';

export const SPECIALITIES: Speciality[] = [
  {
    id: 'spec_1',
    title: 'Biryani Specials',
    description: 'Delectable, slow-cooked basmati rice layered with luxury saffron, royal spices, and tender marinated proteins.',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800',
    iconName: 'chef-hat',
    popularDishes: ['Royal Chicken Dum Biryani', 'Premium Mutton Dum Biryani', 'Special Syed Family Biryani Subpack']
  },
  {
    id: 'spec_2',
    title: 'Chicken Delicacies',
    description: 'Juicy chicken slow-cooked in rich cashew paste, thick spiced tomato gravies, and traditional Andhra aromatic oils.',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=800',
    iconName: 'flame',
    popularDishes: ['Andhra Chicken Curry', 'Mughlai Butter Chicken', 'Syed Special Kadai Chicken']
  },
  {
    id: 'spec_3',
    title: 'Mutton Specials',
    description: 'Tender premium cuts of meat simmered for hours under pressure with whole spices, releasing supreme richness.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    iconName: 'star',
    popularDishes: ['Mutton Masala Double Rich', 'Andhra Spice Mutton Fry', 'Royal Mutton Rogan Josh']
  },
  {
    id: 'spec_4',
    title: 'Tandoori Dishes',
    description: 'Freshly skewered meats double-fired in our traditional clay tandoor clay oven, served with mint chutney and fresh lime.',
    image: 'https://images.unsplash.com/photo-1628294895550-980a30017c9d?auto=format&fit=crop&q=80&w=800',
    iconName: 'flame',
    popularDishes: ['Charred Chicken Tandoori Full', 'Creamy Malai Tikka Kabab', 'Spiced Hariyali Kabab']
  },
  {
    id: 'spec_5',
    title: 'Family Meals',
    description: 'Curated giant platters and combo bucket biryanis designed with love for whole families to feast together.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
    iconName: 'utensils',
    popularDishes: ['Syed Deluxe Family Bucket (4-5 Pax)', 'Royal Maharaja Family Thali', 'Mini Family Biryani Pack']
  },
  {
    id: 'spec_6',
    title: 'Chinese Cuisine',
    description: 'A stellar fusion of Indo-Asian recipes, cooked with freshly chopped bell peppers in fiery hot woks.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
    iconName: 'globe',
    popularDishes: ['Spicy Schezwan Chicken Fried Rice', 'Chilli Chicken Wet', 'Royal Hakka Seafood Noodles']
  }
];

export const WHY_CHOOSE_US: Feature[] = [
  {
    id: 'choose_1',
    title: 'Fresh Ingredients',
    description: 'We source daily handpicked organic vegetables and premium quality Halal meats to ensure high food standards.',
    iconName: 'heart'
  },
  {
    id: 'choose_2',
    title: 'Hygienic Kitchen',
    description: 'Our world-class commercial kitchen is rigorously deep-cleaned and monitored twice daily for pristine hygiene.',
    iconName: 'sparkles'
  },
  {
    id: 'choose_3',
    title: 'Family Atmosphere',
    description: 'Designed specifically with elegant booth partitions and spacious tables for private, ambient family dining.',
    iconName: 'users'
  },
  {
    id: 'choose_4',
    title: 'Fast Service',
    description: 'A stellar network of trained waiting staff and seasoned kitchen lines ensures meals are served piping hot in minutes.',
    iconName: 'zap'
  },
  {
    id: 'choose_5',
    title: 'Affordable Prices',
    description: 'Premium royal portions and unforgettable five-star tastes offered at competitive, family-friendly prices.',
    iconName: 'indian-rupee'
  },
  {
    id: 'choose_6',
    title: 'Delicious Taste',
    description: 'Traditional legacy recipes refined by Syed master chefs to provide a mouthwatering burst of spices in every bite.',
    iconName: 'soup'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal_1',
    title: 'The Royal Family Seating Area',
    category: 'ambience',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal_2',
    title: 'Our Signature Chicken Dum Biryani',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal_3',
    title: 'Clay Oven Cooking - Master Chef',
    category: 'chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal_4',
    title: 'Golden Mutton Curry Sizzlers',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal_5',
    title: 'Elegantly Set Dining Tables',
    category: 'ambience',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal_6',
    title: 'Royal Smokey Kebabs Platter',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev_1',
    name: 'Mohammed Ali',
    role: 'Local Food Critic',
    rating: 5,
    text: 'Syed Royal Restaurant never fails to amaze. Their Mutton Dum Biryani is authentic, aromatic and absolutely melts in the mouth. Highly recommend the Family Bucket when visiting with kids.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    date: '3 weeks ago'
  },
  {
    id: 'rev_2',
    name: 'Sravani Krishnan',
    role: 'Vijayawada Explorer',
    rating: 5,
    text: 'The best family dining spot in Islampet. Extremely hygienic kitchen and standard, lightning-fast services. The Andhra Spiced Chicken Masala paired with fresh butter Naans was phenomenal!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    date: '1 week ago'
  },
  {
    id: 'rev_3',
    name: 'Syed Salman',
    role: 'Regular Patron',
    rating: 4,
    text: 'A clean luxury experience at incredibly affordable prices! The atmosphere is dark, quiet, and premium, perfect for royal family meals. The Grilled Chicken Tandoori is juicy and charred beautifully.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    date: '24 days ago'
  },
  {
    id: 'rev_4',
    name: 'Anjali Sharma',
    role: 'Travel Vlogger',
    rating: 5,
    text: 'Stopped here during my Vijayawada food tour and had an amazing dining experience. Every spice tastes fresh and premium. Special shout-out to the service staff for their warm royal hospitality!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    date: '1 month ago'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Royal Chicken Dum Biryani',
    description: 'Slow-cooked aged Basmati rice layered with juicy masala chicken, boiled egg, fried onions, and pure saffron milk.',
    price: '₹320',
    category: 'biryani',
    isPopular: true
  },
  {
    id: 'm2',
    name: 'Premium Mutton Dum Biryani',
    description: 'Traditional slow dum recipe featuring tender mutton chunks cooked with ghee, luxury dry fruits, and native Andhra spices.',
    price: '₹440',
    category: 'biryani',
    isPopular: true
  },
  {
    id: 'm3',
    name: 'Syed Special Joint Biryani',
    description: 'A signature spicy creation with double roasted chicken joints on fragrant rice, topped with hand-rubbed spices.',
    price: '₹380',
    category: 'biryani'
  },
  {
    id: 'm4',
    name: 'Syed Deluxe Family Bucket',
    description: 'A heavy luxury bucket consisting of rich biryani (sufficient for 4-5 adults), chicken tikka starters, soft drinks, and desserts.',
    price: '₹1,199',
    category: 'biryani',
    isPopular: true
  },
  {
    id: 'm5',
    name: 'Andhra Spicy Chicken Fry',
    description: 'Bite-sized chicken nuggets deep-fried with local black pepper, fresh curry leaves, and green chillies.',
    price: '₹280',
    category: 'chicken'
  },
  {
    id: 'm6',
    name: 'Mughlai Butter Chicken',
    description: 'Boneless tandoori chicken cooked in an award-winning silky red butter gravy sweetened with honey and cashew butter.',
    price: '₹310',
    category: 'chicken',
    isPopular: true
  },
  {
    id: 'm7',
    name: 'Royal Chicken Mughlai Karahi',
    description: 'A semi-dry chicken spiced thick gravy slow-cooked with fresh ginger, garlic, tomatoes, and crushed coriander.',
    price: '₹320',
    category: 'chicken'
  },
  {
    id: 'm8',
    name: 'Andhra Spice Mutton Fry',
    description: 'Semi-dry premium baby goat chunks tossed with coconut strips, roasted peanuts, and spicy hand-ground pepper.',
    price: '₹450',
    category: 'mutton',
    isPopular: true
  },
  {
    id: 'm9',
    name: 'Royal Mutton Rogan Josh',
    description: 'Rich Kashmiri preparation of mutton stewed in a aromatic gravy of dry red chillies, fennel seeds, and high-grade saffron.',
    price: '₹460',
    category: 'mutton'
  },
  {
    id: 'm10',
    name: 'Charred Chicken Tandoori (Full)',
    description: 'Full whole chicken marinated with Greek yogurt, tandoori masala and lemon, roasted to perfection in clay charcoal ovens.',
    price: '₹480',
    category: 'tandoori',
    isPopular: true
  },
  {
    id: 'm11',
    name: 'Creamy Malai Tikka Kabab',
    description: 'Mouth-melting boneless chicken cubes dipped in a rich mixture of cream, curd, cardamom leaf powders, and char-grilled.',
    price: '₹290',
    category: 'tandoori'
  },
  {
    id: 'm12',
    name: 'Fiery Schezwan Fried Rice',
    description: 'Stir-fried basmati rice tossed with fresh carrots, spring onions, chopped garlic and high-spicy schezwan sauce.',
    price: '₹240',
    category: 'chinese'
  },
  {
    id: 'm13',
    name: 'Chilli Chicken Sizzler (Wet)',
    description: 'Batter-fried chicken strips tossed in soy sauce, vinegar, sweet chilli jam, capsicum and red onions.',
    price: '₹260',
    category: 'chinese'
  },
  {
    id: 'm14',
    name: 'Royal Shahi Tukda Dessert',
    description: 'Deep-fried ghee bread slices soaked in thick sweetened cardamon milk, topped with rich gold foils and almonds.',
    price: '₹140',
    category: 'drinks'
  },
  {
    id: 'm15',
    name: 'Syed Signature Rose Lassi',
    description: 'Churned sweet yogurt infusion of real rose petal syrup and crushed ice, garnished with royal saffron threads.',
    price: '₹95',
    category: 'drinks'
  }
];
