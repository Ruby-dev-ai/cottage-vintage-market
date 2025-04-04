
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { placeholderImage, mockImages } from "@/lib/mockData";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Get the first image or use placeholder
  const imageUrl = product.images.length > 0 
    ? (mockImages[product.images[0]] || product.images[0]) 
    : placeholderImage;

  return (
    <Link to={`/product/${product.id}`}>
      <div className="vintage-card overflow-hidden rounded-sm">
        <div className="h-[250px] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="font-serif text-vintage-brown text-lg mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
          <p className="font-medium text-vintage-burgundy">${product.price.toLocaleString()}</p>
          
          {product.featured && (
            <div className="mt-2">
              <span className="inline-block text-xs px-2 py-1 bg-vintage-gold/20 text-vintage-brown rounded-sm">
                Featured
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
