
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useProducts } from "@/contexts/ProductContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  PlusCircle, 
  User as UserIcon, 
  Settings, 
  Package, 
  ClipboardList 
} from "lucide-react";

const MyAccount = () => {
  const { user } = useAuth();
  const { getUserProducts } = useProducts();
  const navigate = useNavigate();

  // Redirect if not logged in
  if (!user) {
    navigate("/login");
    return null;
  }

  // Get user's products
  const userProducts = getUserProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif text-vintage-burgundy">
              My Account
            </h1>
            
            <Button 
              className="bg-vintage-gold hover:bg-vintage-gold/90 text-white"
              onClick={() => navigate("/sell")}
            >
              <PlusCircle size={16} className="mr-2" />
              Sell an Item
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="vintage-container p-6 rounded-md space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-vintage-cream mx-auto mb-4 flex items-center justify-center">
                    <UserIcon size={40} className="text-vintage-burgundy" />
                  </div>
                  <h2 className="text-xl font-serif text-vintage-burgundy">{user.name}</h2>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                
                <hr className="border-vintage-cream/50" />
                
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-vintage-brown hover:bg-vintage-gold/10 hover:text-vintage-burgundy">
                    <UserIcon size={18} className="mr-2" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-vintage-brown hover:bg-vintage-gold/10 hover:text-vintage-burgundy">
                    <ClipboardList size={18} className="mr-2" />
                    My Listings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-vintage-brown hover:bg-vintage-gold/10 hover:text-vintage-burgundy">
                    <Package size={18} className="mr-2" />
                    Purchases
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-vintage-brown hover:bg-vintage-gold/10 hover:text-vintage-burgundy">
                    <Settings size={18} className="mr-2" />
                    Settings
                  </Button>
                </nav>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <Tabs defaultValue="listings" className="vintage-container rounded-md">
                <TabsList className="w-full rounded-t-md rounded-b-none">
                  <TabsTrigger value="listings" className="flex-1">My Listings</TabsTrigger>
                  <TabsTrigger value="purchases" className="flex-1">My Purchases</TabsTrigger>
                  <TabsTrigger value="settings" className="flex-1">Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="listings" className="p-6">
                  <h3 className="text-xl font-serif text-vintage-burgundy mb-6">My Listings</h3>
                  
                  {userProducts.length > 0 ? (
                    <div className="space-y-4">
                      {userProducts.map((product) => (
                        <div key={product.id} className="flex items-center justify-between border-b border-vintage-cream/50 pb-4">
                          <div className="flex items-center space-x-4">
                            <div className="h-16 w-16 rounded-sm overflow-hidden bg-muted">
                              <img 
                                src={product.images[0] || "/placeholder.svg"} 
                                alt={product.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-vintage-brown">{product.name}</h4>
                              <div className="flex items-center space-x-2 mt-1">
                                <p className="text-sm text-muted-foreground">{product.category}</p>
                                <Badge
                                  className={
                                    product.status === "approved" 
                                      ? "bg-green-100 text-green-800 hover:bg-green-100" 
                                      : product.status === "pending"
                                      ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                      : "bg-red-100 text-red-800 hover:bg-red-100"
                                  }
                                >
                                  {product.status}
                                </Badge>
                              </div>
                              <p className="text-sm font-medium text-vintage-burgundy mt-1">
                                ${product.price.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/product/${product.id}`)}
                            className="border-vintage-gold/30 text-vintage-brown hover:bg-vintage-gold/10"
                          >
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <h3 className="text-lg font-serif text-vintage-burgundy mb-2">No Listings Yet</h3>
                      <p className="text-vintage-brown mb-6">
                        You haven't listed any items for sale yet.
                      </p>
                      <Button 
                        onClick={() => navigate("/sell")}
                        className="bg-vintage-gold hover:bg-vintage-gold/90 text-white"
                      >
                        List Your First Item
                      </Button>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="purchases" className="p-6">
                  <h3 className="text-xl font-serif text-vintage-burgundy mb-6">My Purchases</h3>
                  
                  <div className="text-center py-8">
                    <h3 className="text-lg font-serif text-vintage-burgundy mb-2">No Purchases Yet</h3>
                    <p className="text-vintage-brown mb-6">
                      You haven't made any purchases yet.
                    </p>
                    <Button 
                      onClick={() => navigate("/shop")}
                      className="bg-vintage-gold hover:bg-vintage-gold/90 text-white"
                    >
                      Browse the Shop
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="settings" className="p-6">
                  <h3 className="text-xl font-serif text-vintage-burgundy mb-6">Account Settings</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-serif text-vintage-brown mb-3">Personal Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-muted-foreground mb-1">Full Name</label>
                          <input 
                            type="text" 
                            value={user.name} 
                            className="vintage-input w-full px-3 py-2 border" 
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-muted-foreground mb-1">Email</label>
                          <input 
                            type="email" 
                            value={user.email} 
                            className="vintage-input w-full px-3 py-2 border" 
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-serif text-vintage-brown mb-3">Password</h4>
                      <Button variant="outline" className="border-vintage-gold/30 text-vintage-brown hover:bg-vintage-gold/10">
                        Change Password
                      </Button>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-serif text-vintage-brown mb-3">Notification Preferences</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" id="email-notifications" className="mr-2" checked />
                          <label htmlFor="email-notifications" className="text-vintage-brown">Email notifications</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="marketing-emails" className="mr-2" checked />
                          <label htmlFor="marketing-emails" className="text-vintage-brown">Marketing emails</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="bg-vintage-gold hover:bg-vintage-gold/90 text-white">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyAccount;
