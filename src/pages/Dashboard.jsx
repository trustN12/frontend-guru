// Dashboard.jsx
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

  useEffect(() => {
    if (user) {
      const enrolledCourseIds = user.publicMetadata?.enrolledCourses || [];
      const updatedCourses = enrolledCourseIds.map((courseId) => {
        // Find the course details from availableCourses using courseId
        const course = availableCourses.find((c) => c.id === courseId);
        return {
          ...course,
          watchedVideos: [], // Initialize if needed
          progress: 0,
          completedLessons: 0,
        };
      });
      setEnrolledCourses(updatedCourses);
    }
  }, [user]);

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
  const markVideoAsWatched = (courseId, videoId) => {
    const updatedCourses = enrolledCourses.map((course) => {
      if (course.id === courseId && course.userId === user.id) {
        // Ensure watchedVideos is initialized
        const watchedVideos = course.watchedVideos || [];

        if (!watchedVideos.includes(videoId)) {
          const newWatchedVideos = [...watchedVideos, videoId];
          const newProgress = Math.round(
            (newWatchedVideos.length / course.totalLessons) * 100
          );
          const newCompletedLessons = newWatchedVideos.length;

          return {
            ...course,
            watchedVideos: newWatchedVideos,
            progress: newProgress,
            completedLessons: newCompletedLessons,
          };
        }
      }
      return course;
    });

    setEnrolledCourses(updatedCourses);
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));
    toast.success("Video marked as watched");
  };

  // Available courses data with videos
  const availableCourses = [
    {
      id: 1,
      title: "JavaScript Intermediate",
      description:
        "Build a strong foundation in JavaScript with a focus on modern ES6+ features.",
      price: 29900, // In paise (₹299)
      discountedPrice: 100,
      duration: "2 weeks",
      topics: [
        "async/await",
        "Promises",
        "Destructuring",
        "Pollyfills",
        "methods",
      ],
      videos: [
        {
          id: 1,
          title: "Promises & async/await",
          duration: "19:50",
          url: "https://youtube.com/embed/syZLtkJjnQk",
        },
        {
          id: 2,
          title: "Spread Operator",
          duration: "08:39",
          url: "https://youtube.com/embed/LgVmKfkgyUU",
        },
        {
          id: 3,
          title: "call,apply & bind methods",
          duration: "09:56",
          url: "https://youtube.com/embed/k1Eo4D9xSDo",
        },
        {
          id: 4,
          title: "Destructuring",
          duration: "10:51",
          url: "https://youtube.com/embed/8OGNCN1pIw8",
        },
        {
          id: 5,
          title: "Pollyfills",
          duration: "11:44",
          url: "https://youtube.com/embed/u5ipjx_q9cs",
        },
      ],
    },
    {
      id: 2,
      title: "React Fundamentals",
      description:
        "Learn React from the ground up, including components, props, state, and JSX.",
      price: 49900, // In paise (₹499)
      discountedPrice: 19900,
      duration: "10 weeks",
      topics: ["Components", "Props & State", "Hooks", "JSX"],
      videos: [
        {
          id: 1,
          title: "React Basics",
          duration: "20:15",
          url: "https://www.youtube.com/embed/w7ejDZ8SWv8",
        },
        {
          id: 2,
          title: "Components and Props",
          duration: "25:10",
          url: "https://www.youtube.com/embed/0sSYmRImgRY",
        },
        {
          id: 3,
          title: "State and Lifecycle",
          duration: "23:05",
          url: "https://www.youtube.com/embed/4ORZ1GmjaMc",
        },
        {
          id: 4,
          title: "Hooks Deep Dive",
          duration: "28:45",
          url: "https://www.youtube.com/embed/TNhaISOUy6Q",
        },
      ],
    },
    {
      id: 3,
      title: "Modern CSS & Tailwind",
      description:
        "Build responsive, beautiful UIs with modern CSS techniques and Tailwind CSS.",
      price: 24900, // In paise (₹2499)
      discountedPrice: 9900,
      duration: "6 weeks",
      topics: ["Flexbox & Grid", "Responsive Design", "Animations", "Tailwind"],
      videos: [
        {
          id: 1,
          title: "CSS Fundamentals",
          duration: "16:40",
          url: "https://www.youtube.com/embed/1Rs2ND1ryYc",
        },
        {
          id: 2,
          title: "Tailwind Basics",
          duration: "19:55",
          url: "https://www.youtube.com/embed/pfaSUYaSgRo",
        },
        {
          id: 3,
          title: "Responsive Design",
          duration: "21:30",
          url: "https://www.youtube.com/embed/srvUrASNj0s",
        },
        {
          id: 4,
          title: "Advanced Animations",
          duration: "24:20",
          url: "https://www.youtube.com/embed/D6EiRSRhsbQ",
        },
      ],
    },

    {
      id: 4,
      title: "Introduction to HTML & CSS",
      description: "Learn the basics of web development with HTML and CSS.",
      price: 19900, // Free course
      discountedPrice: 100,
      duration: "1 week",
      topics: ["HTML", "CSS", "Web Development"],
      videos: [
        {
          id: 1,
          title: "HTML Basics",
          duration: "15:00",
          url: "https://www.youtube.com/embed/example1",
        },
        {
          id: 2,
          title: "CSS Basics",
          duration: "20:00",
          url: "https://www.youtube.com/embed/example2",
        },
      ],
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
                updateCourseProgress={markVideoAsWatched}
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

            {activeTab === "schedule" && (
              <Schedule
                user={user}
                enrolledCourses={enrolledCourses}
                availableCourses={availableCourses}
                setActiveTab={setActiveTab}
                markVideoAsWatched={markVideoAsWatched}
              />
            )}

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
