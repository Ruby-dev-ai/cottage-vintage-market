
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-vintage-cream/90 backdrop-blur-sm border-t border-vintage-gold/30 py-8 px-4 md:px-8 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif text-vintage-burgundy mb-4">The Vintage Cottage</h3>
            <p className="text-vintage-brown text-sm mb-4">
              Specializing in unique, one-of-a-kind antiques, jewelry, furniture and paintings.
            </p>
            <p className="text-vintage-brown text-sm">
              123 Antique Lane<br />
              Vintageville, VT 12345<br />
              (555) 123-4567
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif text-vintage-burgundy mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop?category=jewelry" className="text-vintage-brown hover:text-vintage-burgundy">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop?category=furniture" className="text-vintage-brown hover:text-vintage-burgundy">
                  Furniture
                </Link>
              </li>
              <li>
                <Link to="/shop?category=paintings" className="text-vintage-brown hover:text-vintage-burgundy">
                  Paintings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=collectibles" className="text-vintage-brown hover:text-vintage-burgundy">
                  Collectibles
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif text-vintage-burgundy mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-vintage-brown hover:text-vintage-burgundy">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-vintage-brown hover:text-vintage-burgundy">
                  Sell With Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-vintage-brown hover:text-vintage-burgundy">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-vintage-brown hover:text-vintage-burgundy">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif text-vintage-burgundy mb-4">Newsletter</h4>
            <p className="text-vintage-brown text-sm mb-3">
              Join our mailing list to receive updates on new arrivals and special offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="text-sm vintage-input px-3 py-2 w-full border"
              />
              <button className="bg-vintage-burgundy text-white px-3 py-2 text-sm hover:bg-vintage-burgundy/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-vintage-gold/20 mt-8 pt-8 text-center text-sm text-vintage-brown">
          <p>© {new Date().getFullYear()} The Vintage Cottage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
