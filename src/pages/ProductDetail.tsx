
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "@/contexts/ProductContext";
import { placeholderImage, mockImages } from "@/lib/mockData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById, products } = useProducts();
  
  const product = id ? getProductById(id) : undefined;
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-3xl font-serif text-vintage-burgundy mb-4">Product Not Found</h1>
          <p className="text-vintage-brown mb-8">The product you are looking for does not exist or has been removed.</p>
          <Button onClick={() => navigate("/shop")} className="bg-vintage-gold hover:bg-vintage-gold/90 text-white">
            Return to Shop
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Get similar products (same category)
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Get image URLs
  const imageUrls = product.images.map(img => mockImages[img] || img);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="vintage-card overflow-hidden rounded-sm">
                <img 
                  src={imageUrls[0] || placeholderImage} 
                  alt={product.name} 
                  className="w-full object-cover h-[400px]"
                />
              </div>
              
              {imageUrls.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {imageUrls.map((imgUrl, index) => (
                    <div key={index} className="vintage-card overflow-hidden rounded-sm">
                      <img 
                        src={imgUrl} 
                        alt={`${product.name} - View ${index + 1}`} 
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-serif text-vintage-burgundy mb-3">{product.name}</h1>
              <p className="text-sm text-muted-foreground mb-6">
                {product.category} {product.era ? `• ${product.era}` : ""}
              </p>
              
              <p className="text-2xl font-medium text-vintage-burgundy mb-6">
                ${product.price.toLocaleString()}
              </p>
              
              <div className="prose prose-sm text-vintage-brown mb-8">
                <p>{product.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {product.condition && (
                  <div className="flex items-start">
                    <div className="font-medium text-vintage-brown min-w-[120px]">Condition:</div>
                    <div className="text-vintage-brown">{product.condition}</div>
                  </div>
                )}
                
                {product.dimensions && (
                  <div className="flex items-start">
                    <div className="font-medium text-vintage-brown min-w-[120px]">Dimensions:</div>
                    <div className="text-vintage-brown">{product.dimensions}</div>
                  </div>
                )}
                
                {product.materials && (
                  <div className="flex items-start">
                    <div className="font-medium text-vintage-brown min-w-[120px]">Materials:</div>
                    <div className="text-vintage-brown">{product.materials}</div>
                  </div>
                )}
                
                <div className="flex items-start">
                  <div className="font-medium text-vintage-brown min-w-[120px]">Seller:</div>
                  <div className="text-vintage-brown">{product.sellerName}</div>
                </div>
              </div>
              
              <Button className="w-full bg-vintage-gold hover:bg-vintage-gold/90 text-white">
                Purchase This Item
              </Button>
              
              <Accordion type="single" collapsible className="mt-8">
                <AccordionItem value="shipping">
                  <AccordionTrigger className="font-serif text-vintage-brown">
                    Shipping Information
                  </AccordionTrigger>
                  <AccordionContent className="text-vintage-brown">
                    <p className="mb-2">
                      We carefully package and ship all items with insurance and tracking.
                    </p>
                    <p className="mb-2">
                      Domestic shipping typically takes 3-5 business days.
                    </p>
                    <p>
                      International shipping available at additional cost.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="returns">
                  <AccordionTrigger className="font-serif text-vintage-brown">
                    Returns & Refunds
                  </AccordionTrigger>
                  <AccordionContent className="text-vintage-brown">
                    <p className="mb-2">
                      We offer a 7-day return policy for most items.
                    </p>
                    <p>
                      Please contact us within 7 days of receiving your item if you wish to make a return.
                      Return shipping costs are the responsibility of the buyer.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="authenticity">
                  <AccordionTrigger className="font-serif text-vintage-brown">
                    Authenticity Guarantee
                  </AccordionTrigger>
                  <AccordionContent className="text-vintage-brown">
                    <p>
                      All items sold through The Vintage Cottage are verified by our expert team.
                      We stand behind the authenticity and condition of every item we sell.
                      If you have any questions about provenance or condition, please contact us.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-serif text-vintage-burgundy mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarProducts.map((product) => (
                  <div key={product.id} className="vintage-card overflow-hidden rounded-sm">
                    <div className="h-[200px] overflow-hidden">
                      <img 
                        src={mockImages[product.images[0]] || product.images[0] || placeholderImage} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-vintage-brown text-lg mb-1 line-clamp-1">{product.name}</h3>
                      <p className="font-medium text-vintage-burgundy">${product.price.toLocaleString()}</p>
                      <Button 
                        variant="link" 
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="p-0 h-auto text-vintage-gold hover:text-vintage-gold/90 mt-2"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
