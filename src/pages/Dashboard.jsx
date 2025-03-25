import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { toast } from "sonner"; 
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHome from "../components/dashboard/DashboardHome";
import MyCourses from "../components/dashboard/MyCourses";
import ProgressTracker from "../components/dashboard/ProgressTracker";
import Schedule from "../components/dashboard/Schedule";
import BuyCourses from "../components/dashboard/BuyCourses";

const Dashboard = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Load enrolled courses from localStorage on component mount
  useEffect(() => {
    const savedCourses = localStorage.getItem("enrolledCourses");
    if (savedCourses) {
      try {
        const parsedCourses = JSON.parse(savedCourses);
        setEnrolledCourses(parsedCourses);
      } catch (error) {
        console.error("Error parsing saved courses:", error);
        setEnrolledCourses([]);
      }
    }
  }, []);

  // Function to load Razorpay script safely
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        resolve(window.Razorpay);
      };
      script.onerror = () => {
        toast.error("Failed to load payment gateway. Please try again later.");
        resolve(null);
      };

      // Check if script is already loaded
      if (window.Razorpay) {
        resolve(window.Razorpay);
        return;
      }

      document.body.appendChild(script);
    });
  };

  // Function to update course progress
  const updateCourseProgress = (courseId, progressIncrement) => {
    const updatedCourses = enrolledCourses.map((course) => {
      if (course.id === courseId && course.userId === user.id) {
        const newProgress = Math.min(100, course.progress + progressIncrement);
        const newCompletedLessons = Math.ceil(
          (newProgress / 100) * course.totalLessons
        );

        return {
          ...course,
          progress: newProgress,
          completedLessons: newCompletedLessons,
        };
      }
      return course;
    });

    setEnrolledCourses(updatedCourses);
    // Update localStorage
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));
    toast.success("Progress updated successfully");
  };

  // Available courses data
  const availableCourses = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      description:
        "Build a strong foundation in JavaScript with a focus on modern ES6+ features.",
      price: 299900, // In paise (₹2999)
      duration: "8 weeks",
      topics: ["ES6+", "Promises", "Closures", "Functional JS"],
    },
    {
      id: 2,
      title: "React Fundamentals",
      description:
        "Learn React from the ground up, including components, props, state, and JSX.",
      price: 399900, // In paise (₹3999)
      duration: "10 weeks",
      topics: ["Components", "Props & State", "Hooks", "JSX"],
    },
    {
      id: 3,
      title: "Modern CSS & Tailwind",
      description:
        "Build responsive, beautiful UIs with modern CSS techniques and Tailwind CSS.",
      price: 249900, // In paise (₹2499)
      duration: "6 weeks",
      topics: ["Flexbox & Grid", "Responsive Design", "Animations", "Tailwind"],
    },
  ];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <DashboardSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            user={user}
          />

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            {activeTab === "dashboard" && (
              <DashboardHome user={user} enrolledCourses={enrolledCourses} />
            )}

            {activeTab === "my-courses" && (
              <MyCourses
                user={user}
                enrolledCourses={enrolledCourses}
                updateCourseProgress={updateCourseProgress}
                setActiveTab={setActiveTab}
              />
            )}

            {activeTab === "progress" && (
              <ProgressTracker
                user={user}
                enrolledCourses={enrolledCourses}
                setActiveTab={setActiveTab}
              />
            )}

            {activeTab === "schedule" && <Schedule />}

            {activeTab === "buy-courses" && (
              <BuyCourses
                user={user}
                enrolledCourses={enrolledCourses}
                setEnrolledCourses={setEnrolledCourses}
                isProcessingPayment={isProcessingPayment}
                setIsProcessingPayment={setIsProcessingPayment}
                availableCourses={availableCourses}
                loadRazorpay={loadRazorpay}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
