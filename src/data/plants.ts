
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
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1637967565444-39c1c5ee65fd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1682440380573-8c75cd8ceef9?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1593482892290-f54227b3bb3c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1620127252536-03bdfcb67c86?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1685210967764-d264d3fa8443?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1578584099737-7c38c4d77fdf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1682480083605-3d5b1541b0c0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1611211333810-628b93956983?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1662960718082-a39f13bd4a4d?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1616690710400-a16d146927c5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1616694554275-a21dc0bda70f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1602491290348-df1186e8baaf?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1632207181126-67f8161accdf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1593482826930-e1218578bd01?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1682480068869-26ddd3d7afd2?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1602746888983-f825b7964119?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1659968686409-6c649211afb0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1659968686597-14c66efd3f56?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1627758027246-a39836983efd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1650207200640-3c2493337d62?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1650207201188-9e8035e24786?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1603201749997-9b869a324700?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1622547748775-7d4f1984483a?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1647484416362-5e6b046d8942?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1632321505781-d1befeed8a8a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1652275344251-1284a9fb08cc?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1596153151533-4c987885c23a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600411133317-fe85b3fc78eb?auto=format&fit=crop&q=80&w=800",
    ],
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
      "https://images.unsplash.com/photo-1614594576637-05fd220eff5d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1611211994948-62a7da1cd157?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&q=80&w=800",
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
