// Types
export interface Room {
  id: string
  image: string
  title: string
  category: string
  description: string
  fullDescription: string
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
  aboutTitle: "A PLACE DESIGNED FOR ELEVATED LIVING",
  aboutDescription: "This newly built residential property near Bole, in the Jackros area, is designed with long-term expat living in mind. The building offers a carefully planned mix of a spacious G+1 duplex and two generously sized two-bedroom apartments, each approximately 150 m², featuring open layouts, high ceilings, and abundant natural light. Thoughtful attention has been given to comfort and practicality, with wide balconies, luxury matte-finish bathrooms, modern kitchens with appliance hookups, and ample built-in storage throughout. Residents benefit from a 110 m² rooftop terrace with shared gym and lounge space, dedicated internet lines, reliable backup power, and a large water reservoir to ensure uninterrupted daily living. Secure parking and CCTV infrastructure readiness further enhance peace of mind, all within a quiet residential setting just 10–15 minutes from Bole.",
  galleryTitle: "EXPLORE OUR LIVING SPACES",
  galleryDescription: "Discover thoughtfully designed interiors where every detail reflects quality craftsmanship and timeless elegance.",
  showcaseTitle: "CRAFTED SPACES, READY TO BEGIN",
  showcaseDescription: "Discover unique living spaces designed to inspire — available now across cities and landscapes. Each project reflects our vision for thoughtful, timeless living.",
  email: "habtegiorgis.brook@gmail.com",
  phone: "+251 96 684 7745",
  whatsapp: "251966847745",
  address: "Jackros area",
}

// Stats Data
export const stats: Stat[] = [
  {
    value: "G+1",
    label: "Duplex",
    description:
      "4 bedrooms · 4 bathrooms · 2 master suites · 2 large bedrooms · maid room",
  },
  {
    value: "2",
    label: "Bedroom Apartments",
    description:
      "Two spacious units with master suite, large bedroom, maid room · 3 bathrooms",
  },
  {
    value: "Lifestyle",
    label: "Comfort",
    description:
      "High ceilings, airy layouts, natural light, wide balconies, luxury finishes, modern kitchens, built-in storage",
  },
  {
    value: "110 m²",
    label: "Rooftop & Utilities",
    description:
      "Rooftop terrace with gym/lounge, backup power, high-speed internet, 20,000L water reservoir, secure parking, CCTV-ready",
  },
]

// Rooms Data
export const rooms: Room[] = [
  {
    id: "bathroom-1",
    image: "/images/rooms/18.png",
    title: "Master Bathroom",
    category: "Bathroom",
    description: "Luxury matte-finish bathroom designed for everyday comfort.",
    fullDescription:
      "Luxury matte-finish bathroom designed for everyday comfort, featuring high-quality finishes and a clean, modern layout suitable for long-term living.",
    features: ["Freestanding Soaking Tub", "Heated Marble Floors", "Rain Shower", "Double Vanity", "LED Mirrors"],
  },
  {
    id: "bathroom-2",
    image: "/images/rooms/8.png",
    title: "En-Suite Bath",
    category: "Bathroom",
    description: "Modern bathroom with premium fixtures and practical layout.",
    fullDescription:
      "Modern bathroom with premium fixtures, designed for functionality, durability, and comfort in a long-term residential setting.",
    features: ["Walk-in Shower", "Smart Mirrors", "Underfloor Heating", "Premium Fixtures"],
  },
  {
    id: "bedroom-1",
    image: "/images/rooms/10.png",
    title: "Master Suite",
    category: "Bedroom",
    description: "Spacious master suite with abundant natural light and built-in storage.",
    fullDescription:
      "Spacious master suite featuring high ceilings, abundant natural light, and built-in closets, designed for privacy and comfort.",
    features: ["City Views", "Walk-in Closet", "Smart Home Controls", "Blackout Blinds", "En-Suite Bathroom"],
  },
  {
    id: "bedroom-2",
    image: "/images/rooms/3.png",
    title: "Mountain View Room",
    category: "Bedroom",
    description: "Large bedroom with airy layout and wide balcony access.",
    fullDescription:
      "Large bedroom with an airy layout, wide balcony access, and natural light, offering a calm and comfortable living environment.",
    features: ["Panoramic Views", "Private Balcony", "Custom Closets", "Reading Nook"],
  },
  {
    id: "bedroom-3",
    image: "/images/rooms/23.png",
    title: "Guest Bedroom",
    category: "Bedroom",
    description: "Comfortable guest bedroom ideal for family or long-term stays.",
    fullDescription:
      "Comfortable guest bedroom designed with practical space planning, natural light, and quality finishes for everyday use.",
    features: ["Queen Bed", "Private Bath", "Work Desk", "Ample Storage"],
  },
  {
    id: "balcony-1",
    image: "/images/rooms/13.png",
    title: "Sky Terrace",
    category: "Balcony",
    description: "Wide balcony offering outdoor relaxation and fresh air.",
    fullDescription:
      "Wide balcony designed for outdoor relaxation, providing fresh air, natural light, and a quiet residential atmosphere.",
    features: ["Lounge Seating", "Built-in Planters", "Glass Railings", "Weather Protection"],
  },
  {
    id: "balcony-2",
    image: "/images/rooms/22.png",
    title: "Ocean Terrace",
    category: "Balcony",
    description: "Spacious balcony suitable for seating and everyday use.",
    fullDescription:
      "Spacious balcony suitable for seating and light outdoor activities, enhancing the indoor-outdoor living experience.",
    features: ["Outdoor Dining", "BBQ Area", "String Lighting", "Ocean Views"],
  },
  {
    id: "kitchen-1",
    image: "/images/rooms/30.png",
    title: "Gourmet Kitchen",
    category: "Kitchen",
    description: "Modern kitchen with appliance hookups and efficient layout.",
    fullDescription:
      "Modern kitchen designed with appliance hookups, quality finishes, and a practical layout for daily cooking and long-term use.",
    features: ["Marble Counters", "Sub-Zero Fridge", "Wine Storage", "Breakfast Bar"],
  },
  {
    id: "kitchen-2",
    image: "/images/rooms/5.png",
    title: "Modern Kitchen",
    category: "Kitchen",
    description: "Contemporary kitchen with durable finishes and ample storage.",
    fullDescription:
      "Contemporary kitchen featuring durable finishes, ample storage, and a functional design suited for modern living.",
    features: ["Professional Range", "Custom Cabinetry", "Butler's Pantry", "Smart Appliances"],
  },
  {
    id: "kitchen-3",
    image: "/images/rooms/6.png",
    title: "Scandinavian Kitchen",
    category: "Kitchen",
    description: "Clean, minimalist kitchen focused on practicality and comfort.",
    fullDescription:
      "Minimalist kitchen emphasizing practicality, natural light, and efficient use of space for everyday living.",
    features: ["Hidden Storage", "Integrated Appliances", "Natural Materials", "Open Shelving"],
  },
  {
    id: "living-1",
    image: "/images/rooms/1.png",
    title: "Grand Living Room",
    category: "Living Room",
    description: "Bright living space with high ceilings and natural light.",
    fullDescription:
      "Bright living area featuring high ceilings, airy layouts, and abundant natural light, ideal for relaxation and family time.",
    features: ["Gas Fireplace", "Built-in Media", "City Views", "Custom Millwork"],
  },
  {
    id: "living-2",
    image: "/images/rooms/12.png",
    title: "Garden Living",
    category: "Living Room",
    description: "Open living area designed for comfort and daily use.",
    fullDescription:
      "Open living area with a comfortable layout, natural light, and quality finishes suitable for long-term residence.",
    features: ["Garden Access", "Sliding Glass Walls", "Wood Floors", "Natural Light"],
  },
  {
    id: "living-3",
    image: "/images/rooms/2.png",
    title: "Penthouse Lounge",
    category: "Living Room",
    description: "Spacious living area with refined modern finishes.",
    fullDescription:
      "Spacious living area finished with high-quality materials, offering a calm and elegant environment for everyday living.",
    features: ["Double Height Ceiling", "Designer Chandelier", "Marble Accents", "Premium Finishes"],
  },
  {
    id: "dining-1",
    image: "/images/rooms/14.png",
    title: "Formal Dining",
    category: "Dining Room",
    description: "Functional dining area designed for everyday family use.",
    fullDescription:
      "Functional dining space with a practical layout, designed for comfortable daily meals and gatherings.",
    features: ["Seating for 10", "Statement Lighting", "Built-in Buffet", "Wine Display"],
  },
  {
    id: "study-1",
    image: "/images/rooms/14.png",
    title: "Private Study",
    category: "Study",
    description: "Quiet study space suitable for work or personal use.",
    fullDescription:
      "Quiet study area designed to support focused work, reading, or personal activities in a peaceful home environment.",
    features: ["Built-in Shelving", "Natural Light", "Ergonomic Design", "Private Entry"],
  },
]

// Projects Data
export const projects: Project[] = [
  {
    id: "aurora-vista",
    title: "LIFESTYLE & COMFORT",
    description:
      "Newly built, secure residences near the Jackros area designed for comfortable long-term expat living, located just 10–15 minutes from Bole.",
    image: "/images/rooms/13.png",
    imageAlt: "Modern residential building in a quiet neighborhood",
    imagePosition: "left",
  },
  {
    id: "houses-to-choose",
    title: "ROOFTOP, SECURITY & UTILITIES",
    description:
      "G+1 duplexes and spacious 2-bedroom apartments featuring high ceilings, natural light, modern kitchens, luxury bathrooms, rooftop terrace, reliable utilities, and move-in-ready quality construction.",
    image: "/images/rooms/42.png",
    imageAlt: "Interior view showing modern finishes and natural light",
    imagePosition: "right",
  },
]




export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id)
}

export function getRoomsByCategory(category: string): Room[] {
  return rooms.filter((room) => room.category === category)
}

export function getCategories(): string[] {
  return [...new Set(rooms.map((room) => room.category))]
}
