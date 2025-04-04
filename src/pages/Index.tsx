import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/contexts/ProductContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FeaturedProduct from "@/components/FeaturedProduct";
import CategoryCard from "@/components/CategoryCard";
import { placeholderImage } from "@/lib/mockData";

const Index = () => {
  const { featuredProducts, products } = useProducts();
  
  // Get up to 3 featured products
  const highlightedProducts = featuredProducts.slice(0, 3);
  
  // Get up to 8 products for the new arrivals section
  const newArrivals = [...products]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/b3c7fd9c-cdde-4770-9d63-2f9c470abf3c.png" 
              alt="The Vintage Cottage" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                Discover Timeless Treasures
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Unique antiques, vintage jewelry, fine art, and collectibles with stories to tell
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/shop">
                  <Button size="lg" className="bg-vintage-gold hover:bg-vintage-gold/90 text-white">
                    Browse Collection
                  </Button>
                </Link>
                <Link to="/sell">
                  <Button size="lg" variant="outline" className="border-vintage-burgundy bg-vintage-burgundy text-white hover:bg-vintage-burgundy/90">
                    Sell With Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif text-vintage-burgundy mb-10 text-center">
              Browse By Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CategoryCard 
                category="jewelry" 
                label="Jewelry" 
                image="/lovable-uploads/adc49ce0-c19f-4447-9e62-d3327234d872.png" 
              />
              <CategoryCard 
                category="furniture" 
                label="Furniture" 
                image="/lovable-uploads/adc49ce0-c19f-4447-9e62-d3327234d872.png" 
              />
              <CategoryCard 
                category="paintings" 
                label="Paintings" 
                image="/lovable-uploads/adc49ce0-c19f-4447-9e62-d3327234d872.png" 
              />
            </div>
            <div className="text-center mt-10">
              <Link to="/shop">
                <Button variant="outline" className="border-vintage-gold text-vintage-brown hover:bg-vintage-gold/10">
                  View All Categories
                  <ChevronRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Products Section */}
        {highlightedProducts.length > 0 && (
          <section className="py-16 px-4 bg-vintage-cream/30">
            <div className="container mx-auto">
              <h2 className="text-3xl font-serif text-vintage-burgundy mb-10 text-center">
                Featured Treasures
              </h2>
              <div className="space-y-8">
                {highlightedProducts.map((product) => (
                  <FeaturedProduct key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* New Arrivals */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif text-vintage-burgundy mb-10 text-center">
              New Arrivals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/shop">
                <Button variant="outline" className="border-vintage-gold text-vintage-brown hover:bg-vintage-gold/10">
                  View All Products
                  <ChevronRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Selling Section */}
        <section className="py-16 px-4 bg-wood-texture bg-cover bg-center">
          <div className="container mx-auto bg-white/90 p-8 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-serif text-vintage-burgundy mb-4">
                  Have Treasures to Sell?
                </h2>
                <p className="text-vintage-brown mb-6">
                  The Vintage Cottage provides a trusted marketplace for selling your antiques and collectibles. 
                  Our experts review each item to ensure authenticity and quality for our discerning customers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="text-vintage-gold mr-2">✓</div>
                    <span className="text-vintage-brown">Expert valuation assistance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-vintage-gold mr-2">✓</div>
                    <span className="text-vintage-brown">Professional photography services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-vintage-gold mr-2">✓</div>
                    <span className="text-vintage-brown">Worldwide customer base</span>
                  </li>
                </ul>
                <Link to="/sell">
                  <Button className="bg-vintage-gold hover:bg-vintage-gold/90 text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="hidden md:block">
                <img 
                  src="/lovable-uploads/adc49ce0-c19f-4447-9e62-d3327234d872.png" 
                  alt="Selling with The Vintage Cottage" 
                  className="rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
