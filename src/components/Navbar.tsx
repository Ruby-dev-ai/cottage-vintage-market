
import React from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  Search, 
  ShoppingCart, 
  User, 
  LogOut, 
  PlusCircle,
  LayoutDashboard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();

  return (
    <nav className="bg-vintage-cream/90 backdrop-blur-sm border-b border-vintage-gold/30 sticky top-0 z-50 py-3 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-serif font-semibold text-vintage-burgundy">
              The Vintage Cottage
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-vintage-brown hover:text-vintage-burgundy transition-colors">
            Home
          </Link>
          <Link to="/shop" className="text-vintage-brown hover:text-vintage-burgundy transition-colors">
            Shop
          </Link>
          <Link to="/about" className="text-vintage-brown hover:text-vintage-burgundy transition-colors">
            About
          </Link>
          <Link to="/sell" className="text-vintage-brown hover:text-vintage-burgundy transition-colors">
            Sell With Us
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/search" className="text-vintage-brown hover:text-vintage-burgundy">
            <Search size={20} />
          </Link>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User size={20} className="text-vintage-brown" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white border border-vintage-cream/70">
                <DropdownMenuItem className="font-medium text-vintage-brown">{user.name}</DropdownMenuItem>
                
                <Link to="/my-account">
                  <DropdownMenuItem>
                    <User size={16} className="mr-2" />
                    My Account
                  </DropdownMenuItem>
                </Link>
                
                <Link to="/sell">
                  <DropdownMenuItem>
                    <PlusCircle size={16} className="mr-2" />
                    Sell an Item
                  </DropdownMenuItem>
                </Link>
                
                {isAdmin && (
                  <Link to="/admin">
                    <DropdownMenuItem>
                      <LayoutDashboard size={16} className="mr-2" />
                      Admin Dashboard
                    </DropdownMenuItem>
                  </Link>
                )}
                
                <DropdownMenuItem onClick={logout}>
                  <LogOut size={16} className="mr-2" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-vintage-brown">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
