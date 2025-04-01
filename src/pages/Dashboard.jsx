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
import { db } from "@/utils/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const Dashboard = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // // Load enrolled courses from localStorage on component mount
  // useEffect(() => {
  //   const savedCourses = localStorage.getItem("enrolledCourses");
  //   if (savedCourses) {
  //     try {
  //       const parsedCourses = JSON.parse(savedCourses);
  //       // Ensure each course has watchedVideos initialized
  //       const updatedCourses = parsedCourses.map(course => ({
  //         ...course,
  //         watchedVideos: course.watchedVideos || [] // Initialize if undefined
  //       }));
  //       setEnrolledCourses(updatedCourses);
  //     } catch (error) {
  //       console.error("Error parsing saved courses:", error);
  //       setEnrolledCourses([]);
  //     }
  //   }
  // }, []);

  // Load enrolled courses from Firestore on component mount
 
 
  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      if (!user) return; // Ensure user is logged in

      try {
        const enrolledCoursesRef = collection(db, "enrolledCourses");
        const q = query(enrolledCoursesRef, where("userId", "==", user.id));
        const querySnapshot = await getDocs(q);
        const courses = [];
        querySnapshot.forEach((doc) => {
          courses.push(doc.data());
        });
        setEnrolledCourses(courses);
      } catch (error) {
        // console.error("Error fetching enrolled courses:", error);
        toast.error("Failed to load enrolled courses. Please try again.");
      }
    };

    fetchEnrolledCourses();
  }, [user]); // Run effect when user changes

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
  const markVideoAsWatched = async (courseId, videoId) => {
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

    // Update Firestore with the new course data
    await setDoc(
      doc(db, "enrolledCourses", `${user.id}_${courseId}`),
      updatedCourses.find((c) => c.id === courseId)
    );

    setEnrolledCourses(updatedCourses);
    toast.success("Video marked as watched");
  };

  // Available courses data with videos
  const availableCourses = [
    {
      id: 1,
      title: "JavaScript Freebie",
      description:
        "Build a strong foundation in JavaScript with a focus on modern ES6+ features.",
      price: 19900,
      discountedPrice: 1000,
      duration: "2 days",
      topics: [
        "async/await",
        "Promises",
        "Destructuring",
        "Pollyfills",
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
        {
          id: 6,
          title: "Top 4 Javascript Solution",
          duration: "07:32",
          url: "https://youtube.com/embed/lvp8iTHeUQ4",
        },
        {
          id: 7,
          title: "Top 2 Array Questions",
          duration: "03:25",
          url: "https://youtube.com/embed/w588WT1rdtk",
        },
        {
          id: 8,
          title: "Third largest element",
          duration: "01:26",
          url: "https://youtube.com/embed/6fLL9nA82jY",
        },
      ],
    },
    {
      id: 2,
      title: "React Freebie",
      description:
        "Learn React from the ground up, including components, props, state, and JSX.",
      price: 39900,
      discountedPrice: 1000,
      duration: "2 days",
      topics: ["Components", "Props & State", "Mini Projects", "JSX"],
      videos: [
        {
          id: 1,
          title: "React Most Asked Questions (Part-1)",
          duration: "24:12",
          url: "https://youtube.com/embed/3D9e8NNMKuo",
        },
        {
          id: 2,
          title: "React Most Asked Questions (Part-2)",
          duration: "28:50",
          url: "https://youtube.com/embed/JHsvB9vcH-Y",
        },
        { 
          id: 3,
          title: "QR Code Generator",
          duration: "12:40",
          url: "https://youtube.com/embed/PbcB5w4xMYY",
        },
        {
          id: 4,
          title: "Bubble Sort Visualizer",
          duration: "11:10",
          url: "https://youtube.com/embed/gLsi1QVXIOI",
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
