
export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
};

export type Category = 
  | "jewelry" 
  | "furniture" 
  | "paintings" 
  | "collectibles" 
  | "decor" 
  | "silverware";

export type ProductStatus = 
  | "pending" 
  | "approved" 
  | "rejected" 
  | "sold";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  images: string[];
  sellerId: string;
  sellerName: string;
  status: ProductStatus;
  featured: boolean;
  createdAt: string;
  era?: string;
  dimensions?: string;
  condition?: string;
  materials?: string;
};
