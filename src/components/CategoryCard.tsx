
import React from "react";
import { Link } from "react-router-dom";
import { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
  label: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, label, image }) => {
  return (
    <Link to={`/shop?category=${category}`}>
      <div className="vintage-card group overflow-hidden rounded-sm h-[300px] relative">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
          <img 
            src={image} 
            alt={label} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="font-serif text-white text-2xl font-medium bg-black/40 px-6 py-3">
            {label}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
