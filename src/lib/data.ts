export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  inStock: boolean;
  featured: boolean;
}

export interface Order {
  id: string;
  customerName: string;
  email: string;
  region: "Africa" | "Europe" | "North America" | "Asia";
  country: string;
  items: { productId: string; productName: string; quantity: number; price: number }[];
  total: number;
  currency: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
  updatedAt: string;
}

// Sample products for the lip care line
export const products: Product[] = [
  {
    id: "1",
    name: "Rose Petal Lip Balm",
    description: "Nourishing lip balm infused with rose petals and vitamin E for soft, supple lips.",
    price: 12.99,
    currency: "USD",
    image: "/products/lip-balm-rose.jpg",
    category: "Lip Balm",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Berry Burst Lip Gloss",
    description: "High-shine lip gloss with a hint of berry tint. Long-lasting and moisturizing.",
    price: 18.99,
    currency: "USD",
    image: "/products/lip-gloss-berry.jpg",
    category: "Lip Gloss",
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Honey & Shea Lip Treatment",
    description: "Intensive overnight lip treatment with raw honey and shea butter for deep hydration.",
    price: 24.99,
    currency: "USD",
    image: "/products/lip-treatment-honey.jpg",
    category: "Lip Treatment",
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Vanilla Dream Lip Scrub",
    description: "Gentle exfoliating lip scrub with vanilla and sugar crystals for smooth, kiss-ready lips.",
    price: 14.99,
    currency: "USD",
    image: "/products/lip-scrub-vanilla.jpg",
    category: "Lip Scrub",
    inStock: true,
    featured: false,
  },
  {
    id: "5",
    name: "Matte Velvet Lipstick - Nude Pink",
    description: "Long-wearing matte lipstick in a universally flattering nude pink shade.",
    price: 22.99,
    currency: "USD",
    image: "/products/lipstick-nude.jpg",
    category: "Lipstick",
    inStock: true,
    featured: true,
  },
  {
    id: "6",
    name: "SPF 30 Lip Protector",
    description: "Daily lip protection with SPF 30, perfect for outdoor activities.",
    price: 9.99,
    currency: "USD",
    image: "/products/lip-spf.jpg",
    category: "Lip Care",
    inStock: true,
    featured: false,
  },
  {
    id: "7",
    name: "Cocoa Butter Lip Mask",
    description: "Overnight lip mask enriched with cocoa butter for intense repair while you sleep.",
    price: 19.99,
    currency: "USD",
    image: "/products/lip-mask-cocoa.jpg",
    category: "Lip Treatment",
    inStock: true,
    featured: false,
  },
  {
    id: "8",
    name: "Cherry Tinted Lip Oil",
    description: "Lightweight lip oil with a subtle cherry tint for natural, glossy lips.",
    price: 16.99,
    currency: "USD",
    image: "/products/lip-oil-cherry.jpg",
    category: "Lip Oil",
    inStock: true,
    featured: false,
  },
];

// Sample orders for the admin dashboard
export const sampleOrders: Order[] = [
  {
    id: "ORD-001",
    customerName: "Adaeze Okonkwo",
    email: "adaeze@example.com",
    region: "Africa",
    country: "Nigeria",
    items: [
      { productId: "1", productName: "Rose Petal Lip Balm", quantity: 2, price: 12.99 },
      { productId: "3", productName: "Honey & Shea Lip Treatment", quantity: 1, price: 24.99 },
    ],
    total: 50.97,
    currency: "USD",
    status: "delivered",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-20T14:00:00Z",
  },
  {
    id: "ORD-002",
    customerName: "Emma Thompson",
    email: "emma@example.com",
    region: "Europe",
    country: "United Kingdom",
    items: [
      { productId: "2", productName: "Berry Burst Lip Gloss", quantity: 3, price: 18.99 },
    ],
    total: 56.97,
    currency: "USD",
    status: "shipped",
    createdAt: "2024-01-18T09:15:00Z",
    updatedAt: "2024-01-19T16:30:00Z",
  },
  {
    id: "ORD-003",
    customerName: "Jennifer Williams",
    email: "jennifer@example.com",
    region: "North America",
    country: "United States",
    items: [
      { productId: "5", productName: "Matte Velvet Lipstick - Nude Pink", quantity: 1, price: 22.99 },
      { productId: "4", productName: "Vanilla Dream Lip Scrub", quantity: 1, price: 14.99 },
    ],
    total: 37.98,
    currency: "USD",
    status: "processing",
    createdAt: "2024-01-20T14:45:00Z",
    updatedAt: "2024-01-20T14:45:00Z",
  },
  {
    id: "ORD-004",
    customerName: "Yuki Tanaka",
    email: "yuki@example.com",
    region: "Asia",
    country: "Japan",
    items: [
      { productId: "7", productName: "Cocoa Butter Lip Mask", quantity: 2, price: 19.99 },
      { productId: "8", productName: "Cherry Tinted Lip Oil", quantity: 2, price: 16.99 },
    ],
    total: 73.96,
    currency: "USD",
    status: "pending",
    createdAt: "2024-01-21T02:00:00Z",
    updatedAt: "2024-01-21T02:00:00Z",
  },
  {
    id: "ORD-005",
    customerName: "Sophie Müller",
    email: "sophie@example.com",
    region: "Europe",
    country: "Germany",
    items: [
      { productId: "6", productName: "SPF 30 Lip Protector", quantity: 4, price: 9.99 },
    ],
    total: 39.96,
    currency: "USD",
    status: "delivered",
    createdAt: "2024-01-10T11:20:00Z",
    updatedAt: "2024-01-15T09:00:00Z",
  },
];

// Get featured products
export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

// Get all products
export function getAllProducts(): Product[] {
  return products;
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

// Get all categories
export function getAllCategories(): string[] {
  return [...new Set(products.map((product) => product.category))];
}

// Get all orders
export function getAllOrders(): Order[] {
  return sampleOrders;
}

// Get orders by status
export function getOrdersByStatus(status: Order["status"]): Order[] {
  return sampleOrders.filter((order) => order.status === status);
}

// Get orders by region
export function getOrdersByRegion(region: Order["region"]): Order[] {
  return sampleOrders.filter((order) => order.region === region);
}
