
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductForm from "@/components/ProductForm";
import { Button } from "@/components/ui/button";

const Sell = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-3xl font-serif text-vintage-burgundy mb-8 text-center">
            Sell With The Vintage Cottage
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div className="vintage-container p-8 rounded-md">
              <h2 className="text-2xl font-serif text-vintage-burgundy mb-6">
                Why Sell With Us
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif text-vintage-brown mb-2">Expert Valuation</h3>
                  <p className="text-vintage-brown">
                    Our team of experts will help you determine the fair market value of your antiques and collectibles,
                    ensuring you receive the best possible price.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif text-vintage-brown mb-2">Global Reach</h3>
                  <p className="text-vintage-brown">
                    With customers from around the world, your items will be seen by a diverse audience of collectors and enthusiasts.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif text-vintage-brown mb-2">Simple Process</h3>
                  <p className="text-vintage-brown">
                    Our selling process is straightforward and transparent. Submit your item details, we'll review and list it,
                    and handle the payment and shipping logistics.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif text-vintage-brown mb-2">Trusted Partner</h3>
                  <p className="text-vintage-brown">
                    With decades of experience in the antiques business, The Vintage Cottage is a trusted name among collectors and sellers alike.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Selling with The Vintage Cottage" 
                className="rounded-md shadow-lg max-h-[500px]"
              />
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif text-vintage-burgundy mb-6 text-center">
              Submit Your Item
            </h2>
            
            {user ? (
              <ProductForm />
            ) : (
              <div className="vintage-container p-8 rounded-md text-center">
                <h3 className="text-xl font-serif text-vintage-burgundy mb-4">
                  Please Log In to Submit Items
                </h3>
                <p className="text-vintage-brown mb-6">
                  You must have an account and be logged in to submit items for sale.
                </p>
                <Button 
                  onClick={() => navigate("/login")}
                  className="bg-vintage-gold hover:bg-vintage-gold/90 text-white"
                >
                  Log In
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sell;
