
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Please enter your password" }),
});

type FormValues = z.infer<typeof formSchema>;

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    const success = await login(values.email, values.password);
    if (success) {
      navigate("/");
    }
  };

  // Demo credentials
  const fillDemoUser = () => {
    form.setValue("email", "john@example.com");
    form.setValue("password", "password");
  };

  const fillDemoAdmin = () => {
    form.setValue("email", "admin@vintagecottage.com");
    form.setValue("password", "password");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-md mx-auto vintage-container p-8 rounded-md">
            <h1 className="text-3xl font-serif text-vintage-burgundy mb-6 text-center">
              Log In
            </h1>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} className="vintage-input" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} className="vintage-input" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-vintage-gold hover:bg-vintage-gold/90 text-white">
                  Log In
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  <span>Don't have an account? </span>
                  <Button variant="link" className="p-0 h-auto text-vintage-gold hover:text-vintage-gold/90" onClick={() => navigate("/register")}>
                    Register
                  </Button>
                </div>
              </form>
            </Form>
            
            <div className="mt-8 pt-6 border-t border-vintage-cream/50">
              <h3 className="text-sm font-medium text-vintage-brown mb-3 text-center">Demo Accounts</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  onClick={fillDemoUser}
                  size="sm"
                  className="border-vintage-gold/40 text-vintage-brown hover:bg-vintage-gold/10"
                >
                  Demo User
                </Button>
                <Button 
                  variant="outline" 
                  onClick={fillDemoAdmin}
                  size="sm"
                  className="border-vintage-gold/40 text-vintage-brown hover:bg-vintage-gold/10"
                >
                  Demo Admin
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
