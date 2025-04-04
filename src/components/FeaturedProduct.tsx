
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { placeholderImage, mockImages } from "@/lib/mockData";

interface FeaturedProductProps {
  product: Product;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  // Get the first image or use placeholder
  const imageUrl = product.images.length > 0 
    ? (mockImages[product.images[0]] || product.images[0]) 
    : placeholderImage;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center vintage-container p-6 rounded-md animate-fade-in">
      <div className="overflow-hidden rounded-sm">
        <img 
          src={imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-serif text-2xl text-vintage-burgundy mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{product.category}</p>
        <p className="text-vintage-brown mb-4 line-clamp-3">{product.description}</p>
        <div className="mb-6">
          <p className="font-medium text-xl text-vintage-burgundy">${product.price.toLocaleString()}</p>
        </div>
        <Link to={`/product/${product.id}`}>
          <Button className="bg-vintage-gold hover:bg-vintage-gold/90 text-white">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
