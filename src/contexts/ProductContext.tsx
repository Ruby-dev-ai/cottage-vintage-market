
import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, Category, ProductStatus } from "@/types";
import { mockProducts } from "@/lib/mockData";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "./AuthContext";

interface ProductContextType {
  products: Product[];
  featuredProducts: Product[];
  getProductById: (id: string) => Product | undefined;
  getProductsByCategory: (category: Category) => Product[];
  addProduct: (product: Omit<Product, "id" | "status" | "createdAt">) => void;
  updateProductStatus: (id: string, status: ProductStatus) => void;
  getUserProducts: () => Product[];
}

const ProductContext = createContext<ProductContextType>({
  products: [],
  featuredProducts: [],
  getProductById: () => undefined,
  getProductsByCategory: () => [],
  addProduct: () => {},
  updateProductStatus: () => {},
  getUserProducts: () => [],
});

export const useProducts = () => useContext(ProductContext);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { toast } = useToast();
  const { user, isAdmin } = useAuth();

  useEffect(() => {
    // In a real app, this would fetch from an API
    setProducts(mockProducts);
  }, []);

  const featuredProducts = products.filter(
    p => p.featured && p.status === "approved"
  );

  const getProductById = (id: string) => {
    return products.find(p => p.id === id);
  };

  const getProductsByCategory = (category: Category) => {
    return products.filter(
      p => p.category === category && p.status === "approved"
    );
  };

  const getUserProducts = () => {
    if (!user) return [];
    return products.filter(p => p.sellerId === user.id);
  };

  const addProduct = (productData: Omit<Product, "id" | "status" | "createdAt">) => {
    if (!user) return;

    const newProduct: Product = {
      ...productData,
      id: `prod${products.length + 1}`,
      status: isAdmin ? "approved" : "pending",
      createdAt: new Date().toISOString().split("T")[0],
    };

    setProducts([...products, newProduct]);
    
    toast({
      title: "Product Submitted",
      description: isAdmin 
        ? "Product has been added to the marketplace" 
        : "Your product has been submitted for review",
    });
  };

  const updateProductStatus = (id: string, status: ProductStatus) => {
    if (!isAdmin) return;

    setProducts(
      products.map(p => 
        p.id === id ? { ...p, status } : p
      )
    );

    toast({
      title: "Product Updated",
      description: `Product has been ${status}`,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: products.filter(p => p.status === "approved"),
        featuredProducts,
        getProductById,
        getProductsByCategory,
        addProduct,
        updateProductStatus,
        getUserProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
