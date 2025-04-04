
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useProducts } from "@/contexts/ProductContext";
import { Product } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, PlusCircle } from "lucide-react";

const AdminDashboard = () => {
  const { user, isAdmin } = useAuth();
  const { products, updateProductStatus } = useProducts();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("pending");

  // Redirect if not admin
  if (!user || !isAdmin) {
    navigate("/");
    return null;
  }

  // Filter products based on active tab
  const filteredProducts = products.filter(p => {
    if (activeTab === "all") return true;
    return p.status === activeTab;
  });

  // Handle approve/reject actions
  const handleApprove = (product: Product) => {
    updateProductStatus(product.id, "approved");
  };

  const handleReject = (product: Product) => {
    updateProductStatus(product.id, "rejected");
  };

  const handleFeature = (product: Product) => {
    // In a real app, this would be a separate function
    // For demo, we'll just show a console log
    console.log(`Featured product: ${product.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif text-vintage-burgundy">
              Admin Dashboard
            </h1>
            
            <Button 
              className="bg-vintage-gold hover:bg-vintage-gold/90 text-white"
              onClick={() => navigate("/sell")}
            >
              <PlusCircle size={16} className="mr-2" />
              Add New Product
            </Button>
          </div>
          
          <Tabs defaultValue="pending" onValueChange={setActiveTab}>
            <TabsList className="mb-6 vintage-container">
              <TabsTrigger value="pending">Pending Approval</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
              <TabsTrigger value="all">All Products</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="vintage-container p-6 rounded-md">
              {filteredProducts.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Seller</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-sm overflow-hidden bg-muted">
                              <img 
                                src={product.images[0] || "/placeholder.svg"} 
                                alt={product.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <span className="truncate max-w-[200px]">{product.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>${product.price.toLocaleString()}</TableCell>
                        <TableCell>{product.sellerName}</TableCell>
                        <TableCell>{product.createdAt}</TableCell>
                        <TableCell>
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
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            {product.status === "pending" && (
                              <>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleApprove(product)}
                                  className="text-green-600 hover:text-green-700 hover:bg-green-50"
                                >
                                  <CheckCircle size={16} />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleReject(product)}
                                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                >
                                  <XCircle size={16} />
                                </Button>
                              </>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => navigate(`/product/${product.id}`)}
                              className="border-vintage-gold/30 text-vintage-brown hover:bg-vintage-gold/10"
                            >
                              View
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-xl font-serif text-vintage-burgundy mb-2">No items found</h3>
                  <p className="text-vintage-brown">
                    {activeTab === "pending" 
                      ? "There are no items pending approval."
                      : activeTab === "approved"
                      ? "There are no approved items."
                      : activeTab === "rejected"
                      ? "There are no rejected items."
                      : "There are no items in the system."}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
