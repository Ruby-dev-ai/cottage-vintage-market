
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/adc49ce0-c19f-4447-9e62-d3327234d872.png" 
              alt="About The Vintage Cottage" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                About The Vintage Cottage
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                A curated marketplace for timeless treasures with character and history
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto vintage-container p-8 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif text-vintage-burgundy mb-6">Our Story</h2>
                <p className="text-vintage-brown mb-4">
                  Founded in 2010, The Vintage Cottage began as a small family-owned shop dedicated to preserving 
                  and sharing the beauty of antiques and vintage items. What started as a passion project quickly 
                  grew into a beloved destination for collectors and design enthusiasts alike.
                </p>
                <p className="text-vintage-brown mb-4">
                  Our founder, Elizabeth Harrington, has been a lifelong collector with a keen eye for finding 
                  exceptional pieces with rich histories. Her expertise and dedication to authenticity form the 
                  cornerstone of our business philosophy.
                </p>
                <p className="text-vintage-brown">
                  Today, The Vintage Cottage has expanded into a trusted online marketplace, connecting sellers of 
                  fine antiques with discerning buyers from around the world.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/adc49ce0-c19f-4447-9e62-d3327234d872.png" 
                  alt="The Vintage Cottage Store" 
                  className="rounded-md shadow-lg max-h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 px-4 bg-vintage-cream/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif text-vintage-burgundy mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="vintage-card p-6 rounded-md">
                <h3 className="text-xl font-serif text-vintage-burgundy mb-4">Authenticity</h3>
                <p className="text-vintage-brown">
                  Every item in our collection is carefully verified for authenticity and provenance. 
                  We pride ourselves on transparent, accurate descriptions and fair pricing.
                </p>
              </div>
              <div className="vintage-card p-6 rounded-md">
                <h3 className="text-xl font-serif text-vintage-burgundy mb-4">Preservation</h3>
                <p className="text-vintage-brown">
                  We believe in preserving the stories and craftsmanship of the past. Our team takes 
                  great care in handling each piece, ensuring its legacy continues for generations.
                </p>
              </div>
              <div className="vintage-card p-6 rounded-md">
                <h3 className="text-xl font-serif text-vintage-burgundy mb-4">Community</h3>
                <p className="text-vintage-brown">
                  We foster a community of collectors, sellers, and enthusiasts who share a passion 
                  for history and craftsmanship. Together, we celebrate the beauty of the past.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Us CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-serif text-vintage-burgundy mb-6">Become Part of Our Story</h2>
            <p className="text-vintage-brown mb-8 max-w-2xl mx-auto">
              Whether you're looking to find that perfect piece or share your collection with others, 
              The Vintage Cottage welcomes you to our community of antique lovers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/shop">
                <Button className="bg-vintage-gold hover:bg-vintage-gold/90 text-white">
                  Browse Collection
                </Button>
              </Link>
              <Link to="/sell">
                <Button variant="outline" className="border-vintage-burgundy bg-vintage-burgundy text-white hover:bg-vintage-burgundy/90">
                  Sell With Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
