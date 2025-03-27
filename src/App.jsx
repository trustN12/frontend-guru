import { Toaster } from "@/components/ui/sonner"; // Use one Toaster
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Layout from "./components/main/Layout";
import ProtectedRoute from "./components/main/ProtectedRoute";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import Index from "./pages/Index";
import BlogPost1 from "./pages/blog-pages/Blog-Post1";
import BlogPost2 from "./pages/blog-pages/Blog-Post2";
import BlogPost3 from "./pages/blog-pages/Blog-Post3";



const PUBLISHABLE_KEY = "pk_test_ZXF1YWwtdW5pY29ybi0xLmNsZXJrLmFjY291bnRzLmRldiQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ClerkProvider 
      appearance={{
        layout: { unsafe_disableDevelopmentModeWarnings: true }
      }}    
      publishableKey={PUBLISHABLE_KEY}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      signInFallbackRedirectUrl="/"
      signUpFallbackRedirectUrl="/"
      afterSignOutUrl="/"
      
    >
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
    
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />  {/* Default Home Page */}
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/mastering-react-hooks" element={<BlogPost1 />} />
              <Route path="/blog/system-design-frontend" element={<BlogPost2 />} />
              <Route path="/blog/modern-css-techniques" element={<BlogPost3 />} />
              
              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>

              
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ClerkProvider>
  </QueryClientProvider>
);

export default App;
