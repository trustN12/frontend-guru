import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "sonner";

const ProtectedRoute = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        toast.error("Please log in or sign up to access all the pages!!", {
          description: "You need to be logged in to view this content",
        });
        navigate("/sign-in");
      }
    }
  }, [isSignedIn, isLoaded, navigate]);

  // If auth is still loading, show a loading indicator
  if (!isLoaded) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div class="terminal-loader">
          <div class="terminal-header">
            <div class="terminal-title">Frontend Guru</div>
            <div class="terminal-controls">
              <div class="control close"></div>
              <div class="control minimize"></div>
              <div class="control maximize"></div>
            </div>
          </div>
          <div class="content">
            <div class="text">Loading...</div>
          </div>
        </div>
      </div>
    ); // You can replace this with a spinner or any loading component
  }

  // If the user is signed in, render the protected content
  return isSignedIn ? <Outlet /> : null;
};

export default ProtectedRoute;
