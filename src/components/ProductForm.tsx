
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Product, Category } from "@/types";
import { useProducts } from "@/contexts/ProductContext";
import { useAuth } from "@/contexts/AuthContext";
import { categories } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  category: z.string().refine((val): val is Category => 
    categories.map(c => c.value).includes(val as Category),
    { message: "Please select a valid category" }
  ),
  images: z.array(z.string()).min(1, { message: "At least one image is required" }),
  era: z.string().optional(),
  dimensions: z.string().optional(),
  condition: z.string().optional(),
  materials: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ProductForm: React.FC = () => {
  const { addProduct } = useProducts();
  const { user } = useAuth();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      category: undefined,
      images: ["/placeholder.svg"],
      era: "",
      dimensions: "",
      condition: "",
      materials: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    if (!user) return;

    // Add the product
    addProduct({
      ...values,
      sellerId: user.id,
      sellerName: user.name,
      featured: false,
    });

    // Redirect
    navigate("/my-account");
  };

  // For a real implementation, we would have an image upload component
  // For this demo, we'll just use placeholder images

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Name</FormLabel>
              <FormControl>
                <Input placeholder="Vintage Diamond Ring" {...field} className="vintage-input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Provide detailed information about your item..." 
                  {...field} 
                  rows={5}
                  className="vintage-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price ($)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    min="0" 
                    step="0.01" 
                    placeholder="0.00" 
                    {...field}
                    onChange={e => field.onChange(parseFloat(e.target.value))}
                    className="vintage-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select 
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="vintage-input">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="era"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Era/Period (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Victorian, Art Deco, etc." {...field} className="vintage-input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="condition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Condition (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Excellent, Good, Fair, etc." {...field} className="vintage-input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="dimensions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dimensions (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="H x W x D" {...field} className="vintage-input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="materials"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Materials (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Wood, Silver, etc." {...field} className="vintage-input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* In a real implementation, we would have a file upload component here */}
        <div className="border border-dashed border-vintage-cream/70 p-6 rounded-sm text-center">
          <p className="text-vintage-brown mb-2">Image Upload Placeholder</p>
          <p className="text-sm text-muted-foreground">
            In a real implementation, this would be a file upload component.
          </p>
        </div>

        <Button type="submit" className="w-full bg-vintage-gold hover:bg-vintage-gold/90 text-white">
          Submit Item for Approval
        </Button>
      </form>
    </Form>
  );
};

export default ProductForm;
