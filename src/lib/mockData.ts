
import { Product, User, Category } from "@/types";

export const categories: { value: Category; label: string }[] = [
  { value: "jewelry", label: "Jewelry" },
  { value: "furniture", label: "Furniture" },
  { value: "paintings", label: "Paintings" },
  { value: "collectibles", label: "Collectibles" },
  { value: "decor", label: "Home Decor" },
  { value: "silverware", label: "Silverware" }
];

export const mockUsers: User[] = [
  {
    id: "user1",
    name: "John Smith",
    email: "john@example.com",
    role: "user"
  },
  {
    id: "admin1",
    name: "Vintage Admin",
    email: "admin@vintagecottage.com",
    role: "admin"
  }
];

export const mockProducts: Product[] = [
  {
    id: "prod1",
    name: "Antique Victorian Brooch",
    description: "Exquisite Victorian-era brooch featuring handcrafted filigree work with pearl accents. This stunning piece dates back to approximately 1880 and retains all its original components.",
    price: 450,
    category: "jewelry",
    images: ["/products/brooch1.jpg", "/products/brooch2.jpg"],
    sellerId: "admin1",
    sellerName: "Vintage Cottage",
    status: "approved",
    featured: true,
    createdAt: "2025-03-15",
    era: "Victorian",
    condition: "Excellent",
    materials: "Gold, Pearls"
  },
  {
    id: "prod2",
    name: "Mahogany Secretary Desk",
    description: "Stunning 19th century mahogany secretary desk with original brass hardware. Features multiple drawers and a fold-down writing surface. Excellent condition with minor patina consistent with age.",
    price: 2250,
    category: "furniture",
    images: ["/products/desk1.jpg", "/products/desk2.jpg"],
    sellerId: "admin1",
    sellerName: "Vintage Cottage",
    status: "approved",
    featured: true,
    createdAt: "2025-03-10",
    era: "19th Century",
    dimensions: "48\"W x 22\"D x 45\"H",
    condition: "Very Good",
    materials: "Mahogany, Brass"
  },
  {
    id: "prod3",
    name: "Impressionist Garden Scene",
    description: "Beautiful early 20th century oil painting depicting a vibrant garden scene in the impressionist style. Signed by the artist in the lower right corner. Housed in original gilt frame.",
    price: 1200,
    category: "paintings",
    images: ["/products/painting1.jpg"],
    sellerId: "user1",
    sellerName: "John Smith",
    status: "approved",
    featured: false,
    createdAt: "2025-03-20",
    era: "Early 20th Century",
    dimensions: "24\"W x 30\"H",
    condition: "Good",
    materials: "Oil on Canvas"
  },
  {
    id: "prod4",
    name: "Art Deco Table Lamp",
    description: "Striking Art Deco table lamp with original glass shade. Features a geometric metal base with patina consistent with age.",
    price: 675,
    category: "decor",
    images: ["/products/lamp1.jpg"],
    sellerId: "admin1",
    sellerName: "Vintage Cottage",
    status: "approved",
    featured: true,
    createdAt: "2025-03-12",
    era: "Art Deco",
    condition: "Good",
    materials: "Brass, Glass"
  },
  {
    id: "prod5",
    name: "Sterling Silver Tea Set",
    description: "Complete sterling silver tea service including teapot, creamer, sugar bowl, and serving tray. Hallmarked and dated to 1923.",
    price: 1850,
    category: "silverware",
    images: ["/products/teaset1.jpg"],
    sellerId: "user1",
    sellerName: "John Smith",
    status: "pending",
    featured: false,
    createdAt: "2025-04-01",
    era: "1920s",
    condition: "Excellent",
    materials: "Sterling Silver"
  },
  {
    id: "prod6",
    name: "Vintage Pocket Watch Collection",
    description: "Collection of three vintage pocket watches from the early 20th century. All are working and have been serviced recently.",
    price: 950,
    category: "collectibles",
    images: ["/products/watches1.jpg"],
    sellerId: "admin1",
    sellerName: "Vintage Cottage",
    status: "approved",
    featured: false,
    createdAt: "2025-03-25",
    era: "Early 20th Century",
    condition: "Working",
    materials: "Various Metals"
  }
];

export const placeholderImage = "/placeholder.svg";

export const mockImages = {
  "/products/brooch1.jpg": "/placeholder.svg",
  "/products/brooch2.jpg": "/placeholder.svg",
  "/products/desk1.jpg": "/placeholder.svg",
  "/products/desk2.jpg": "/placeholder.svg",
  "/products/painting1.jpg": "/placeholder.svg",
  "/products/lamp1.jpg": "/placeholder.svg",
  "/products/teaset1.jpg": "/placeholder.svg",
  "/products/watches1.jpg": "/placeholder.svg"
};
