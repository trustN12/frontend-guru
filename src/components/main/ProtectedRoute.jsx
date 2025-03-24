
import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { toast } from "sonner";

const ProtectedRoute = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      toast.error("Please sign in to access this page", {
        description: "You need to be signed in to view this content"
      });
      navigate('/sign-in');
    }
  }, [isSignedIn, isLoaded, navigate]);

  // If auth is still loading or user is signed in, render the protected content
  return isLoaded && isSignedIn ? <Outlet /> : null;
};

export default ProtectedRoute;