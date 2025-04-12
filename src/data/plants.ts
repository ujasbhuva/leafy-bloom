export type Plant = {
  id: string;
  name: string;
  scientificName: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: string;
  tags: string[];
  description: string;
  careLevel: "beginner" | "intermediate" | "expert";
  light: "low" | "medium" | "bright";
  water: "low" | "medium" | "high";
  petFriendly: boolean;
  airPurifying: boolean;
  size: "small" | "medium" | "large";
  availability: "in-stock" | "low-stock" | "out-of-stock";
  featured: boolean;
  newArrival: boolean;
  roomSuggestion: string[];
  careTips: string[];
};

export const plants: Plant[] = [
  {
    id: "1",
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    price: 39.99,
    images: [
      "https://plus.unsplash.com/premium_photo-1678722935747-84963cfcac71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://plus.unsplash.com/premium_photo-1678722935747-84963cfcac71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://plus.unsplash.com/premium_photo-1678722935747-84963cfcac71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
    ],
    category: "Foliage",
    tags: ["trendy", "large-leaf", "tropical"],
    description:
      "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its uniquely fenestrated leaves and easy-going nature. With its stunning tropical foliage, this plant makes a dramatic statement in any space.",
    careLevel: "beginner",
    light: "medium",
    water: "medium",
    petFriendly: false,
    airPurifying: true,
    size: "large",
    availability: "in-stock",
    featured: true,
    newArrival: false,
    roomSuggestion: ["living room", "office", "bedroom"],
    careTips: [
      "Allow soil to dry between waterings",
      "Wipe leaves with damp cloth to remove dust",
      "Provide support for climbing as it grows",
    ],
  },
  {
    id: "2",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1504489258181-449e0254c0e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1504489258181-449e0254c0e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1504489258181-449e0254c0e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
    ],
    category: "Succulents",
    tags: ["air-purifying", "low-maintenance", "drought-tolerant"],
    description:
      "The Snake Plant is virtually indestructible and perfect for beginners or those with a busy lifestyle. Its striking vertical leaves with yellow borders add architectural interest to any room.",
    careLevel: "beginner",
    light: "low",
    water: "low",
    petFriendly: false,
    airPurifying: true,
    size: "medium",
    availability: "in-stock",
    featured: true,
    newArrival: false,
    roomSuggestion: ["bedroom", "bathroom", "office"],
    careTips: [
      "Water only when soil is completely dry",
      "Can tolerate low light conditions",
      "Perfect for bedrooms as it releases oxygen at night",
    ],
  },
  {
    id: "3",
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1563443255504-a492226757f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1563443255504-a492226757f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1563443255504-a492226757f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
    ],
    category: "Foliage",
    tags: ["trendy", "large-leaf", "statement"],
    description:
      "The Fiddle Leaf Fig is loved for its large, violin-shaped leaves that create an instant focal point in any space. While a bit more demanding in care, its dramatic presence makes it worth the extra attention.",
    careLevel: "expert",
    light: "bright",
    water: "medium",
    petFriendly: false,
    airPurifying: false,
    size: "large",
    availability: "in-stock",
    featured: false,
    newArrival: false,
    roomSuggestion: ["living room", "dining room", "entryway"],
    careTips: [
      "Requires consistent bright, indirect light",
      "Allow top inch of soil to dry before watering",
      "Sensitive to drafts and temperature changes",
    ],
  },
  {
    id: "4",
    name: "Pothos",
    scientificName: "Epipremnum aureum",
    price: 19.99,
    salePrice: 15.99,
    images: [
      "https://images.unsplash.com/photo-1519241923167-9c69efe2d7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1519241923167-9c69efe2d7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1519241923167-9c69efe2d7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
    ],
    category: "Trailing",
    tags: ["easy-care", "air-purifying", "hanging"],
    description:
      "Pothos is one of the easiest houseplants to grow and perfect for beginners. Its trailing vines with heart-shaped leaves look stunning in hanging baskets or trained to climb along walls.",
    careLevel: "beginner",
    light: "low",
    water: "low",
    petFriendly: false,
    airPurifying: true,
    size: "medium",
    availability: "in-stock",
    featured: false,
    newArrival: false,
    roomSuggestion: ["bedroom", "living room", "kitchen", "bathroom"],
    careTips: [
      "Adaptable to most light conditions",
      "Allow soil to dry between waterings",
      "Easy to propagate in water",
    ],
  },
  {
    id: "5",
    name: "Peace Lily",
    scientificName: "Spathiphyllum wallisii",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1697938955710-f44cb901c444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzJ8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1697938955710-f44cb901c444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzJ8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1697938955710-f44cb901c444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzJ8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
    ],
    category: "Flowering",
    tags: ["air-purifying", "low-light", "flowering"],
    description:
      "The Peace Lily is loved for its glossy, dark green leaves and elegant white flowers. Beyond its beauty, it's also excellent at purifying indoor air, making it both decorative and functional.",
    careLevel: "beginner",
    light: "low",
    water: "medium",
    petFriendly: false,
    airPurifying: true,
    size: "medium",
    availability: "in-stock",
    featured: true,
    newArrival: false,
    roomSuggestion: ["living room", "bedroom", "bathroom"],
    careTips: [
      "Drooping leaves indicate when it needs water",
      "Tolerates low light but blooms better in medium light",
      "Keep away from cold drafts",
    ],
  },
  {
    id: "6",
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1587403122859-34d83e74841d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1587403122859-34d83e74841d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1587403122859-34d83e74841d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
    ],
    category: "Foliage",
    tags: ["drought-tolerant", "low-maintenance", "modern"],
    description:
      "The ZZ Plant is the definition of easy-care with its shiny, dark green leaves and ability to thrive in almost any condition. Its slow growth and tolerance of neglect make it perfect for busy people.",
    careLevel: "beginner",
    light: "low",
    water: "low",
    petFriendly: false,
    airPurifying: true,
    size: "medium",
    availability: "in-stock",
    featured: false,
    newArrival: true,
    roomSuggestion: ["office", "living room", "bedroom"],
    careTips: [
      "Extremely drought tolerant",
      "Can survive in low light conditions",
      "Allow soil to dry completely between waterings",
    ],
  },
  {
    id: "7",
    name: "Calathea Orbifolia",
    scientificName: "Calathea orbifolia",
    price: 45.99,
    images: [
      "https://images.unsplash.com/photo-1509648033237-ae6ef40c2838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1509648033237-ae6ef40c2838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1509648033237-ae6ef40c2838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
    ],
    category: "Calathea",
    tags: ["prayer plant", "patterned leaves", "humidity lover"],
    description:
      "The Calathea Orbifolia features stunning large, round leaves with silvery green stripes. This plant is known for its dramatic leaf movements, closing at night and opening during the day.",
    careLevel: "intermediate",
    light: "medium",
    water: "high",
    petFriendly: true,
    airPurifying: false,
    size: "medium",
    availability: "low-stock",
    featured: false,
    newArrival: true,
    roomSuggestion: ["bathroom", "kitchen", "bedroom"],
    careTips: [
      "Prefers high humidity",
      "Keep soil moist but not soggy",
      "Use filtered water to avoid leaf browning",
    ],
  },
  {
    id: "8",
    name: "String of Pearls",
    scientificName: "Senecio rowleyanus",
    price: 21.99,
    images: [
      "https://images.unsplash.com/photo-1585445490582-9872899757b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjh8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1585445490582-9872899757b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjh8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1585445490582-9872899757b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjh8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
    ],
    category: "Succulents",
    tags: ["hanging", "unique", "drought-tolerant"],
    description:
      "String of Pearls features unusual bead-like leaves that cascade gracefully from hanging planters. This succulent is a conversation starter with its distinctive appearance and minimal care needs.",
    careLevel: "intermediate",
    light: "bright",
    water: "low",
    petFriendly: false,
    airPurifying: false,
    size: "small",
    availability: "in-stock",
    featured: false,
    newArrival: false,
    roomSuggestion: ["living room", "office", "sunroom"],
    careTips: [
      "Allow soil to dry completely between waterings",
      "Provide bright, indirect light",
      "Protect from cold drafts and temperatures below 50°F",
    ],
  },
  {
    id: "9",
    name: "Bird's Nest Fern",
    scientificName: "Asplenium nidus",
    price: 27.99,
    images: [
      "https://plus.unsplash.com/premium_photo-1663090223813-3856b86261be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjl8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://plus.unsplash.com/premium_photo-1663090223813-3856b86261be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjl8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://plus.unsplash.com/premium_photo-1663090223813-3856b86261be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjl8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
    ],
    category: "Ferns",
    tags: ["humidity lover", "pet friendly", "bathroom plant"],
    description:
      "The Bird's Nest Fern has unique, rippled fronds emerging from a central rosette. Unlike other ferns, it's relatively easy to care for and adds a lush, tropical feel to any space.",
    careLevel: "intermediate",
    light: "medium",
    water: "medium",
    petFriendly: true,
    airPurifying: false,
    size: "medium",
    availability: "in-stock",
    featured: false,
    newArrival: false,
    roomSuggestion: ["bathroom", "kitchen", "living room"],
    careTips: [
      "Keep soil consistently moist",
      "Enjoys humidity but can adapt to average home conditions",
      "Avoid getting water in the center crown",
    ],
  },
  {
    id: "10",
    name: "Rubber Plant",
    scientificName: "Ficus elastica",
    price: 32.99,
    images: [
      "https://images.unsplash.com/photo-1508502726440-477c94bc369e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1508502726440-477c94bc369e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1508502726440-477c94bc369e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
    ],
    category: "Foliage",
    tags: ["large-leaf", "statement", "air-purifying"],
    description:
      "The Rubber Plant features large, glossy leaves with a rich burgundy to dark green color. This striking plant makes a bold statement while being surprisingly low-maintenance.",
    careLevel: "intermediate",
    light: "medium",
    water: "medium",
    petFriendly: false,
    airPurifying: true,
    size: "large",
    availability: "in-stock",
    featured: true,
    newArrival: false,
    roomSuggestion: ["living room", "office", "entryway"],
    careTips: [
      "Allow top inch of soil to dry between waterings",
      "Wipe leaves to keep them dust-free and glossy",
      "Can be pruned to maintain desired size and shape",
    ],
  },
  {
    id: "11",
    name: "Alocasia Polly",
    scientificName: "Alocasia 'Polly'",
    price: 36.99,
    images: [
      "https://images.unsplash.com/photo-1678855982737-02a978e8970a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzF8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1678855982737-02a978e8970a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzF8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://images.unsplash.com/photo-1678855982737-02a978e8970a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzF8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768"],
    category: "Foliage",
    tags: ["dramatic", "architectural", "tropical"],
    description:
      "The Alocasia Polly, also known as African Mask Plant, features dramatically arrowhead-shaped leaves with bold, white veining and scalloped edges that create an exotic, jungle-like feel.",
    careLevel: "intermediate",
    light: "medium",
    water: "medium",
    petFriendly: false,
    airPurifying: false,
    size: "medium",
    availability: "low-stock",
    featured: false,
    newArrival: true,
    roomSuggestion: ["living room", "home office", "dining room"],
    careTips: [
      "Keep soil lightly moist at all times",
      "Prefers consistent humidity",
      "Sensitive to cold drafts and temperatures below 60°F",
    ],
  },
  {
    id: "12",
    name: "Chinese Money Plant",
    scientificName: "Pilea peperomioides",
    price: 23.99,
    images: [
      "https://plus.unsplash.com/premium_photo-1664475087579-21099320bea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://plus.unsplash.com/premium_photo-1664475087579-21099320bea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
      "https://plus.unsplash.com/premium_photo-1664475087579-21099320bea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fGZsb3dlciUyMHBvdHxlbnwwfHx8fDE3NDQzOTUyNzF8MA&ixlib=rb-4.0.3&q=80&w=768",
    ],
    category: "Foliage",
    tags: ["trendy", "pet friendly", "easy care"],
    description:
      "The Chinese Money Plant is adored for its quirky round leaves on thin stems. Its compact size and ease of propagation make it popular for modern interior styles and plant sharing.",
    careLevel: "beginner",
    light: "medium",
    water: "low",
    petFriendly: true,
    airPurifying: false,
    size: "small",
    availability: "in-stock",
    featured: false,
    newArrival: false,
    roomSuggestion: ["desk", "shelf", "bedside table"],
    careTips: [
      "Rotate regularly for even growth",
      "Allow soil to dry between waterings",
      "Easily propagated through 'pups' that grow from the base",
    ],
  },
];



export const plantCategories = [...new Set(plants.map(plant => plant.category))];

export const filterOptions = {
  careLevel: ["beginner", "intermediate", "expert"],
  light: ["low", "medium", "bright"],
  water: ["low", "medium", "high"],
  size: ["small", "medium", "large"],
  features: ["petFriendly", "airPurifying", "featured", "newArrival"],
};
