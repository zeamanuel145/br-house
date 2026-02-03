// Types
export interface Room {
  id: string
  image: string
  title: string
  category: string
  description: string
  fullDescription: string
  sqft: string
  features: string[]
}

export interface Stat {
  value: string
  label: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: "left" | "right"
}

// Company Information
export const companyInfo = {
  name: "Altaterra",
  tagline: "DISCOVER THE SPACE YOU BELONG TO",
  description: "A new land for a new beginning. Designed for those who seek harmony between space, style, and substance.",
  aboutTitle: "OUR STORY BEGINS WITH THE LAND",
  aboutDescription: "Altaterra was founded on a simple belief — that where you live should be in harmony with how you live. From our first developments rooted in natural surroundings to our growing presence in modern urban spaces, we've stayed true to our mission: crafting spaces that feel grounded, thoughtful, and timeless.",
  galleryTitle: "EXPLORE OUR LIVING SPACES",
  galleryDescription: "Discover thoughtfully designed interiors where every detail reflects quality craftsmanship and timeless elegance.",
  showcaseTitle: "CRAFTED SPACES, READY TO BEGIN",
  showcaseDescription: "Discover unique living spaces designed to inspire — available now across cities and landscapes. Each project reflects our vision for thoughtful, timeless living.",
}

// Stats Data
export const stats: Stat[] = [
  {
    value: "10+",
    label: "Cities",
    description: "where Altaterra has helped shape modern living",
  },
  {
    value: "15+",
    label: "Years",
    description: "of Experience in real estate development",
  },
  {
    value: "80%",
    label: "Green Integration",
    description: "across all developments",
  },
  {
    value: "87%",
    label: "Customer satisfaction",
    description: "across all property handovers",
  },
]

// Rooms Data
export const rooms: Room[] = [
  {
    id: "bathroom-1",
    image: "/images/rooms/bathroom-1.jpg",
    title: "Master Bathroom",
    category: "Bathroom",
    description: "Luxurious spa-inspired bathroom with freestanding tub and marble finishes.",
    fullDescription: "Luxurious spa-inspired bathroom with freestanding tub and marble finishes. Experience tranquility with premium fixtures, heated floors, and ambient lighting designed to create your personal sanctuary.",
    sqft: "120 sq ft",
    features: ["Freestanding Soaking Tub", "Heated Marble Floors", "Rain Shower", "Double Vanity", "LED Mirrors"],
  },
  {
    id: "bathroom-2",
    image: "/images/rooms/bathroom-2.jpg",
    title: "En-Suite Bath",
    category: "Bathroom",
    description: "Modern double vanity bathroom with rain shower and LED mirrors.",
    fullDescription: "Modern double vanity bathroom with rain shower and LED mirrors. Clean lines meet functional elegance in this thoughtfully designed space.",
    sqft: "95 sq ft",
    features: ["Walk-in Shower", "Smart Mirrors", "Underfloor Heating", "Premium Fixtures"],
  },
  {
    id: "bedroom-1",
    image: "/images/rooms/bedroom-1.jpg",
    title: "Master Suite",
    category: "Bedroom",
    description: "Expansive master bedroom with panoramic city views and walk-in closet.",
    fullDescription: "Expansive master bedroom with panoramic city views and walk-in closet. Floor-to-ceiling windows flood the space with natural light while automated blinds ensure privacy when desired.",
    sqft: "450 sq ft",
    features: ["City Views", "Walk-in Closet", "Smart Home Controls", "Blackout Blinds", "En-Suite Bathroom"],
  },
  {
    id: "bedroom-2",
    image: "/images/rooms/bedroom-2.jpg",
    title: "Mountain View Room",
    category: "Bedroom",
    description: "Serene bedroom retreat with breathtaking mountain vistas.",
    fullDescription: "Serene bedroom retreat with breathtaking mountain vistas. Wake up to nature's grandeur through expansive windows that frame the landscape like living art.",
    sqft: "320 sq ft",
    features: ["Panoramic Views", "Private Balcony", "Custom Closets", "Reading Nook"],
  },
  {
    id: "bedroom-3",
    image: "/images/rooms/bedroom-3.jpg",
    title: "Guest Bedroom",
    category: "Bedroom",
    description: "Elegant guest quarters with premium amenities and natural light.",
    fullDescription: "Elegant guest quarters with premium amenities and natural light. Designed to make visitors feel at home with hotel-quality comfort.",
    sqft: "280 sq ft",
    features: ["Queen Bed", "Private Bath", "Work Desk", "Ample Storage"],
  },
  {
    id: "balcony-1",
    image: "/images/rooms/balcony-1.jpg",
    title: "Sky Terrace",
    category: "Balcony",
    description: "Private outdoor space with stunning sunset views over the city.",
    fullDescription: "Private outdoor space with stunning sunset views over the city. Perfect for morning coffee or evening relaxation under the stars.",
    sqft: "180 sq ft",
    features: ["Lounge Seating", "Built-in Planters", "Glass Railings", "Weather Protection"],
  },
  {
    id: "balcony-2",
    image: "/images/rooms/balcony-2.jpg",
    title: "Ocean Terrace",
    category: "Balcony",
    description: "Expansive terrace perfect for entertaining with ocean panoramas.",
    fullDescription: "Expansive terrace perfect for entertaining with ocean panoramas. Host gatherings or enjoy solitude with the rhythm of the waves as your soundtrack.",
    sqft: "250 sq ft",
    features: ["Outdoor Dining", "BBQ Area", "String Lighting", "Ocean Views"],
  },
  {
    id: "kitchen-1",
    image: "/images/rooms/kitchen-1.jpg",
    title: "Gourmet Kitchen",
    category: "Kitchen",
    description: "Chef-inspired kitchen with marble island and premium appliances.",
    fullDescription: "Chef-inspired kitchen with marble island and premium appliances. Every detail designed for both serious cooking and casual entertaining.",
    sqft: "380 sq ft",
    features: ["Marble Counters", "Sub-Zero Fridge", "Wine Storage", "Breakfast Bar"],
  },
  {
    id: "kitchen-2",
    image: "/images/rooms/kitchen-2.jpg",
    title: "Modern Kitchen",
    category: "Kitchen",
    description: "Contemporary culinary space with professional-grade range.",
    fullDescription: "Contemporary culinary space with professional-grade range. Dark wood cabinets and warm lighting create an inviting atmosphere for culinary creativity.",
    sqft: "420 sq ft",
    features: ["Professional Range", "Custom Cabinetry", "Butler's Pantry", "Smart Appliances"],
  },
  {
    id: "kitchen-3",
    image: "/images/rooms/kitchen-3.jpg",
    title: "Scandinavian Kitchen",
    category: "Kitchen",
    description: "Minimalist design with light wood and integrated appliances.",
    fullDescription: "Minimalist design with light wood and integrated appliances. Clean aesthetics meet practical function in this serene cooking space.",
    sqft: "300 sq ft",
    features: ["Hidden Storage", "Integrated Appliances", "Natural Materials", "Open Shelving"],
  },
  {
    id: "living-1",
    image: "/images/rooms/living-1.jpg",
    title: "Grand Living Room",
    category: "Living Room",
    description: "Spacious living area with fireplace and floor-to-ceiling windows.",
    fullDescription: "Spacious living area with fireplace and floor-to-ceiling windows. The heart of the home designed for both intimate gatherings and grand entertaining.",
    sqft: "650 sq ft",
    features: ["Gas Fireplace", "Built-in Media", "City Views", "Custom Millwork"],
  },
  {
    id: "living-2",
    image: "/images/rooms/living-2.jpg",
    title: "Garden Living",
    category: "Living Room",
    description: "Open-plan living with seamless indoor-outdoor connection.",
    fullDescription: "Open-plan living with seamless indoor-outdoor connection. Sliding glass walls blur the boundary between interior comfort and natural beauty.",
    sqft: "520 sq ft",
    features: ["Garden Access", "Sliding Glass Walls", "Wood Floors", "Natural Light"],
  },
  {
    id: "living-3",
    image: "/images/rooms/living-3.jpg",
    title: "Penthouse Lounge",
    category: "Living Room",
    description: "Double-height ceiling with dramatic chandelier and marble accents.",
    fullDescription: "Double-height ceiling with dramatic chandelier and marble accents. A statement space that embodies luxury living at its finest.",
    sqft: "800 sq ft",
    features: ["Double Height Ceiling", "Designer Chandelier", "Marble Accents", "Premium Finishes"],
  },
  {
    id: "dining-1",
    image: "/images/rooms/dining-1.jpg",
    title: "Formal Dining",
    category: "Dining Room",
    description: "Elegant dining space for memorable gatherings and entertaining.",
    fullDescription: "Elegant dining space for memorable gatherings and entertaining. Statement lighting and refined finishes set the stage for unforgettable meals.",
    sqft: "280 sq ft",
    features: ["Seating for 10", "Statement Lighting", "Built-in Buffet", "Wine Display"],
  },
  {
    id: "study-1",
    image: "/images/rooms/study-1.jpg",
    title: "Private Study",
    category: "Study",
    description: "Sophisticated home office with built-in library shelving.",
    fullDescription: "Sophisticated home office with built-in library shelving. A productive sanctuary for focused work and creative thinking.",
    sqft: "200 sq ft",
    features: ["Built-in Shelving", "Natural Light", "Ergonomic Design", "Private Entry"],
  },
]

// Projects Data
export const projects: Project[] = [
  {
    id: "aurora-vista",
    title: "AURORA VISTA",
    description: "In today's world, the concept of home transcends mere shelter. At Aurora Vista, each residence is thoughtfully designed to offer breathtaking panoramic views, blending natural light with modern elegance.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
    imageAlt: "Cozy bedroom with mountain forest view through large windows",
    imagePosition: "left",
  },
  {
    id: "houses-to-choose",
    title: "HOUSES TO CHOOSE FROM",
    description: "The vision behind Aurora Vista is to create more than just a house — it's about crafting a sanctuary that harmonizes with its surroundings. Expansive windows frame stunning vistas, while the architectural design seamlessly integrates luxury with nature.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    imageAlt: "Modern minimalist kitchen with large windows overlooking snowy mountains",
    imagePosition: "right",
  },
]

// Helper functions
export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id)
}

export function getRoomsByCategory(category: string): Room[] {
  return rooms.filter((room) => room.category === category)
}

export function getCategories(): string[] {
  return [...new Set(rooms.map((room) => room.category))]
}
