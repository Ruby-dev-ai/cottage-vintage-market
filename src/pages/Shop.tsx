
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Category } from "@/types";
import { useProducts } from "@/contexts/ProductContext";
import { categories } from "@/lib/mockData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SortOption = "newest" | "price-asc" | "price-desc";

const Shop = () => {
  const { products, getProductsByCategory } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [displayedProducts, setDisplayedProducts] = useState(products);

  // Initialize from URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get("category") as Category | null;
    if (categoryParam && categories.some(c => c.value === categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Update displayed products when filters change
  useEffect(() => {
    let filteredProducts = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filteredProducts = getProductsByCategory(selectedCategory);
    }

    // Sort products
    switch (sortOption) {
      case "newest":
        filteredProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
    }

    setDisplayedProducts(filteredProducts);
  }, [products, selectedCategory, sortOption, getProductsByCategory]);

  // Update URL when category changes
  const handleCategoryChange = (category: Category | "all") => {
    setSelectedCategory(category);
    
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-3xl font-serif text-vintage-burgundy mb-8">
            {selectedCategory === "all" 
              ? "Browse All Treasures" 
              : `Browse ${categories.find(c => c.value === selectedCategory)?.label || ""}`}
          </h1>
          
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => handleCategoryChange("all")}
                className={selectedCategory === "all" 
                  ? "bg-vintage-gold hover:bg-vintage-gold/90 text-white" 
                  : "border-vintage-gold/30 text-vintage-brown hover:bg-vintage-gold/10"}
              >
                All Categories
              </Button>
              
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category.value)}
                  className={selectedCategory === category.value 
                    ? "bg-vintage-gold hover:bg-vintage-gold/90 text-white" 
                    : "border-vintage-gold/30 text-vintage-brown hover:bg-vintage-gold/10"}
                >
                  {category.label}
                </Button>
              ))}
            </div>
            
            <div className="w-full md:w-[200px]">
              <Select 
                value={sortOption} 
                onValueChange={(value) => setSortOption(value as SortOption)}
              >
                <SelectTrigger className="vintage-input w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 vintage-container rounded-md">
              <h3 className="text-xl font-serif text-vintage-burgundy mb-2">No items found</h3>
              <p className="text-vintage-brown">
                No items found in this category. Please check back later.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
