
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { Book, CheckCircle, Clock, FileText, User, ShoppingCart } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import SectionHeading from '../components/main/SectionHeading';
import { toast } from '@/hooks/use-toast';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { sendPurchaseNotification } from '../utils/emailjs';

const Dashboard = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  
  // Load enrolled courses from localStorage on component mount
  useEffect(() => {
    const savedCourses = localStorage.getItem('enrolledCourses');
    if (savedCourses) {
      try {
        const parsedCourses = JSON.parse(savedCourses);
        // Only load courses that belong to the current user
        if (user) {
          const userCourses = parsedCourses.filter(course => course.userId === user.id);
          setEnrolledCourses(userCourses);
        }
      } catch (error) {
        console.error("Error parsing saved courses:", error);
      }
    }
  }, [user]);

  // Save enrolled courses to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  // Initialize Razorpay on component mount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Available courses data
  const availableCourses = [
    {
      id: 1,
      title: "JavaScript Zero to Hero",
      description: "Master JavaScript from the ground up! Learn ES6+, async programming, and advanced concepts with real-world projects.",
      price: 39900, // In paise 
      duration: "4 weeks",
      topics: ["ES6+", "Promises & Async", "Closures", "Functional Programming"],
    },
    {
      id: 2,
      title: "React Fundamentals",
      description: "Go from beginner to pro in React! Master components, state management, hooks, and advanced optimizations.",
      price: 39900, // In paise 
      duration: "4 weeks",
      topics: ["Components", "Props & State", "Hooks", "Performance Optimization"],
    },
    {
      id: 3,
      title: "Modern CSS & Tailwind",
      description: "Build responsive, beautiful UIs with modern Tailwind CSS.",
      price: 29900, // In paise 
      duration: "2 weeks",
      topics: ["Flexbox & Grid", "Responsive Design", "Animations", "Tailwind"],
    },
    {
      id: 4,
      title: "AI + React: Build Smart Apps",
      description: "Supercharge your React apps with AI! Learn to integrate free AI APIs, machine learning models, and AI-powered features.",
      price: 99900, // In paise 
      duration: "8 weeks",
      topics: ["Hugging Face AI", "ML Basics", "AI-Powered UI/UX", "Speech & Vision APIs", "Clerk Authentication"],
    },
    {
      id: 5,
      title: "React Mastery: The Ultimate Guide",
      description: "Become a React expert! Learn advanced concepts, performance tuning, server components, and next-gen React patterns.",
      price: 59900, // In paise 
      duration: "8 weeks",
      topics: ["React Design Patterns","Clerk Authentication", "Server Components", "State Management (Redux, Zustand)", " Optimizations & Best Practices"],
    }
  ];

  // Function to handle Razorpay payment
  const handlePayment = (course) => {
    if (!user) {
      toast.error("Please sign in to purchase courses");
      return;
    }
    
    setIsProcessingPayment(false);
    
    // Check if course is already enrolled by this user
    if (enrolledCourses.some(c => c.id === course.id && c.userId === user.id)) {
      toast.error(`You're already enrolled in ${course.title}`);
      setIsProcessingPayment(false);
      return;
    }

    const options = {
      key: "rzp_test_7FEQanUQWAA66x", // Replace with your actual Razorpay key
      amount: course.price,
      currency: "INR",
      name: "Frontend Guru Academy",
      description: `Enrollment for ${course.title}`,
      image: "/lovable-uploads/2577d6ef-9fda-427a-a24a-249f078bf108.png",
      handler: function(response) {
        // Payment successful
        // Add course to enrolled courses with initial progress
        const newCourse = {
          ...course,
          enrolledDate: new Date().toISOString(),
          progress: 0,
          completedLessons: 0,
          totalLessons: Math.floor(Math.random() * 10) + 10, // Random number of lessons between 10-20
          paymentId: response.razorpay_payment_id,
          userId: user.id,
        };
        
        setEnrolledCourses(prev => [...prev, newCourse]);
        
        // Send email notification
        sendPurchaseNotification(
          {...course, paymentId: response.razorpay_payment_id}, 
          user
        );
        
        toast.success(`Successfully enrolled in ${course.title}`);
        setIsProcessingPayment(false);
        
        // Automatically switch to My Courses tab
        setActiveTab('my-courses');
      },
      prefill: {
        name: user?.fullName || "",
        email: user?.primaryEmailAddress?.emailAddress || "",
      },
      theme: {
        color: "#6366f1",
      },
      modal: {
        ondismiss: function() {
          setIsProcessingPayment(false);
          toast.error("Payment cancelled");
        }
      }
    };
    
    try {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Razorpay error:", error);
      toast.error("Payment failed. Please try again.");
      setIsProcessingPayment(false);
    }
  };

  // Function to update course progress
  const updateCourseProgress = (courseId, progressIncrement) => {
    setEnrolledCourses(courses => 
      courses.map(course => {
        if (course.id === courseId && course.userId === user.id) {
          const newProgress = Math.min(100, course.progress + progressIncrement);
          const newCompletedLessons = Math.ceil((newProgress / 100) * course.totalLessons);
          
          return {
            ...course,
            progress: newProgress,
            completedLessons: newCompletedLessons
          };
        }
        return course;
      })
    );
    
    toast.success("Progress updated successfully");
  };
  
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-64 shrink-0"
          >
            <div className="glass-card rounded-xl p-6 sticky top-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-sm">{user?.fullName || 'User'}</h3>
                  <p className="text-xs text-muted-foreground">{user?.primaryEmailAddress?.emailAddress || ''}</p>
                </div>
              </div>
              
              <nav>
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveTab('dashboard')}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                        activeTab === 'dashboard'
                          ? 'bg-primary text-white'
                          : 'text-muted-foreground hover:bg-primary/5'
                      }`}
                    >
                      <FileText size={16} />
                      <span>Dashboard</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('my-courses')}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                        activeTab === 'my-courses'
                          ? 'bg-primary text-white'
                          : 'text-muted-foreground hover:bg-primary/5'
                      }`}
                    >
                      <Book size={16} />
                      <span>My Courses</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('progress')}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                        activeTab === 'progress'
                          ? 'bg-primary text-white'
                          : 'text-muted-foreground hover:bg-primary/5'
                      }`}
                    >
                      <CheckCircle size={16} />
                      <span>Progress</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('schedule')}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                        activeTab === 'schedule'
                          ? 'bg-primary text-white'
                          : 'text-muted-foreground hover:bg-primary/5'
                      }`}
                    >
                      <Clock size={16} />
                      <span>Schedule</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('buy-courses')}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                        activeTab === 'buy-courses'
                          ? 'bg-primary text-white'
                          : 'text-muted-foreground hover:bg-primary/5'
                      }`}
                    >
                      <ShoppingCart size={16} />
                      <span>Buy Courses</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <SectionHeading>Welcome, {user?.firstName || 'User'}</SectionHeading>
                
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-medium mb-4">Getting Started</h3>
                  <p className="text-muted-foreground mb-6">
                    Welcome to your Frontend Guru Academy dashboard. Here you can track your progress, access your enrolled courses, and manage your learning journey.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Course Recommendations</h4>
                      <p className="text-sm text-muted-foreground">Based on your profile, we recommend starting with our React Fundamentals course.</p>
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Schedule a Call</h4>
                      <p className="text-sm text-muted-foreground">Book a 1:1 session with Nabarun to discuss your learning goals and get personalized guidance.</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-medium mb-1">Enrolled Courses</h3>
                    <p className="text-3xl font-bold">
                      {enrolledCourses.filter(course => course.userId === user?.id).length}
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-medium mb-1">Completed Lessons</h3>
                    <p className="text-3xl font-bold">
                      {enrolledCourses
                        .filter(course => course.userId === user?.id)
                        .reduce((total, course) => total + course.completedLessons, 0)}
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-medium mb-1">Total Hours</h3>
                    <p className="text-3xl font-bold">
                      {enrolledCourses
                        .filter(course => course.userId === user?.id)
                        .reduce((total, course) => total + course.completedLessons, 0) * 2}
                    </p>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-medium mb-4">Recent Announcements</h3>
                  <div className="space-y-4">
                    <div className="border-b border-border pb-4">
                      <p className="font-medium">New React Course Coming Soon</p>
                      <p className="text-sm text-muted-foreground">A new advanced React patterns course will be available next month.</p>
                      <p className="text-xs text-muted-foreground mt-1">June 15, 2023</p>
                    </div>
                    <div>
                      <p className="font-medium">Welcome to the Academy!</p>
                      <p className="text-sm text-muted-foreground">Thank you for joining Frontend Guru Academy. Browse available courses to get started.</p>
                      <p className="text-xs text-muted-foreground mt-1">June 10, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'my-courses' && (
              <div className="space-y-6">
                <SectionHeading>My Courses</SectionHeading>
                
                {enrolledCourses.filter(course => course.userId === user?.id).length > 0 ? (
                  <div className="space-y-6">
                    {enrolledCourses
                      .filter(course => course.userId === user?.id)
                      .map((course) => (
                        <Card key={course.id} className="overflow-hidden">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                              <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                                <Book size={20} />
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                  <h3 className="text-lg font-medium">{course.title}</h3>
                                  <div className="text-sm text-muted-foreground">
                                    Enrolled: {new Date(course.enrolledDate).toLocaleDateString()}
                                  </div>
                                </div>
                                <div className="mt-2 mb-4">
                                  <div className="flex justify-between mb-1 text-sm">
                                    <span>Progress: {course.progress}%</span>
                                    <span>{course.completedLessons} of {course.totalLessons} lessons</span>
                                  </div>
                                  <Progress value={course.progress} className="h-2" />
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {course.topics.map((topic, index) => (
                                    <span 
                                      key={index}
                                      className="inline-block text-xs font-medium bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full border border-amber-100"
                                    >
                                      {topic}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between bg-muted/20 px-6 py-3">
                            <span className="text-sm text-muted-foreground">Duration: {course.duration}</span>
                            <button 
                              onClick={() => updateCourseProgress(course.id, 10)}
                              className="px-3 py-1 text-xs bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                            >
                              Mark Progress
                            </button>
                          </CardFooter>
                        </Card>
                      ))
                    }
                  </div>
                ) : (
                  <div className="glass-card rounded-xl p-6">
                    <div className="text-center py-12">
                      <Book size={48} className="mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Courses Yet</h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        You haven't enrolled in any courses yet. Browse our catalog to find courses that match your learning goals.
                      </p>
                      <button 
                        onClick={() => setActiveTab('buy-courses')}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        Browse Courses
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'progress' && (
              <div className="space-y-6">
                <SectionHeading>My Progress</SectionHeading>
                
                {enrolledCourses.filter(course => course.userId === user?.id).length > 0 ? (
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-6">Course Progress</h3>
                    <div className="space-y-6">
                      {enrolledCourses
                        .filter(course => course.userId === user?.id)
                        .map((course) => (
                          <div key={course.id} className="space-y-2">
                            <div className="flex justify-between">
                              <h4 className="font-medium">{course.title}</h4>
                              <span className="text-sm text-muted-foreground">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                            <div className="text-sm text-muted-foreground flex justify-between">
                              <span>{course.completedLessons} of {course.totalLessons} lessons completed</span>
                              <span>Est. time remaining: {(course.totalLessons - course.completedLessons) * 2} hours</span>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-lg font-medium mb-4">Overall Progress</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Total Completion</h4>
                          <span className="text-sm text-muted-foreground">
                            {Math.round(
                              enrolledCourses
                                .filter(course => course.userId === user?.id)
                                .reduce((sum, course) => sum + course.progress, 0) / 
                                enrolledCourses.filter(course => course.userId === user?.id).length
                            )}%
                          </span>
                        </div>
                        <Progress 
                          value={Math.round(
                            enrolledCourses
                              .filter(course => course.userId === user?.id)
                              .reduce((sum, course) => sum + course.progress, 0) / 
                              enrolledCourses.filter(course => course.userId === user?.id).length
                          )} 
                          className="h-2" 
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="glass-card rounded-xl p-6">
                    <div className="text-center py-12">
                      <CheckCircle size={48} className="mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Progress Yet</h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Once you enroll in courses and complete lessons, your progress will be tracked here.
                      </p>
                      <button 
                        onClick={() => setActiveTab('buy-courses')}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'schedule' && (
              <div className="space-y-6">
                <SectionHeading>My Schedule</SectionHeading>
                
                <div className="glass-card rounded-xl p-6">
                  <div className="text-center py-12">
                    <Clock size={48} className="mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No Scheduled Sessions</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      You don't have any scheduled sessions. Contact Nabarun to set up personalized training sessions.
                    </p>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      Contact Nabarun
                    </a>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'buy-courses' && (
              <div className="space-y-6">
                <SectionHeading>Buy Courses</SectionHeading>
                
                <div className="glass-card rounded-xl p-6 mb-6">
                  <div className="bg-amber-50 text-amber-800 p-4 rounded-lg mb-6 border border-amber-200">
                    <h3 className="font-medium mb-2 flex items-center">
                      <ShoppingCart size={18} className="mr-2" />
                      Payment Information
                    </h3>
                    <p className="text-sm">
                      All payments are processed securely via Razorpay. After purchase, your course will be instantly available in "My Courses".
                    </p>
                    <p className="mt-2 text-sm">
                      If you face any issues with payment, please contact us at support@frontendguru.academy
                    </p>
                  </div>
                </div>
                
                <div className="max-w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                          <Book size={20} />
                        </div>
                        <h3 className="text-lg font-medium mb-2">{course.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{course.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {course.topics.map((topic, index) => (
                            <span 
                              key={index}
                              className="inline-block text-xs font-medium bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full border border-amber-100"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center text-sm text-muted-foreground mb-1">
                          <span>Duration: {course.duration}</span>
                          <span className="text-lg font-semibold text-primary">₹{course.price/100}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/20 px-6 py-3">
                        <button 
                          onClick={() => handlePayment(course)}
                          disabled={isProcessingPayment || enrolledCourses.some(c => c.id === course.id && c.userId === user?.id)}
                          className={`w-full flex items-center justify-center gap-2 py-2 rounded-md ${
                            enrolledCourses.some(c => c.id === course.id && c.userId === user?.id)
                              ? 'bg-green-500 text-white cursor-default'
                              : 'bg-primary text-white hover:bg-primary/90'
                          } transition-colors`}
                        >
                          {enrolledCourses.some(c => c.id === course.id && c.userId === user?.id) 
                            ? 'Enrolled' 
                            : isProcessingPayment 
                              ? 'Processing...' 
                              : 'Buy Now'}
                        </button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;