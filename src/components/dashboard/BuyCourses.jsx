// BuyCourses.jsx
import SectionHeading from "../main/SectionHeading";
import { Book, ShoppingCart, Video } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import { useState } from "react";
import ElevenLabsConversationalChat from "../AI-AGENT/AIChat";
import { setDoc, doc } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";

const BuyCourses = ({
  user,
  enrolledCourses,
  setEnrolledCourses,
  setIsProcessingPayment,
  availableCourses,
  loadRazorpay,
}) => {
  const [processingCourseId, setProcessingCourseId] = useState(null); // Track the currently processing course

  const handlePayment = async (course) => {
    if (!user) {
      toast.error("Please log in to purchase courses");
      return;
    }

    // console.log("User  ID:", user.id);

    setProcessingCourseId(course.id);
    setIsProcessingPayment(true);

    if (
      enrolledCourses.some((c) => c.id === course.id && c.userId === user.id)
    ) {
      toast.error(`You're already enrolled in ${course.title}`);
      setProcessingCourseId(null);
      setIsProcessingPayment(false);
      return;
    }

    try {
      const razorpayInstance = await loadRazorpay();
      if (!razorpayInstance) {
        toast.error("Failed to load payment gateway. Please try again later.");
        setProcessingCourseId(null);
        setIsProcessingPayment(false);
        return;
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_LIVE_KEY,
        amount: course.discountedPrice,
        currency: "INR",
        name: "Frontend Guru Academy",
        description: `Enrollment for ${course.title}`,
        image: "/programmer.png",
        handler: async function (response) {
          console.log("Razorpay Response:", response); // Log the response

          const newCourse = {
            ...course,
            enrolledDate: new Date().toISOString(),
            progress: 0,
            completedLessons: 0,
            totalLessons: Math.floor(Math.random() * 10) + 10,
            paymentId: response.razorpay_payment_id,
            userId: user.id,
            fullName: user.fullName || "",
            emailAddress: user.primaryEmailAddress?.emailAddress || "",
            videosUnlocked: true,
          };

          try {
            const docId = `${user.id}_${course.id}`;
            // console.log("Document ID:", docId);
            // console.log("New Course Data:", newCourse);

            // Save to Firestore
            await setDoc(doc(db, "enrolledCourses", docId), newCourse);

            // Update state
            const updatedCourses = [...enrolledCourses, newCourse];
            setEnrolledCourses(updatedCourses);

            toast.success(
              `Successfully enrolled in ${course.title}. Course videos are now available in your schedule.`
            );
          } catch (error) {
            // console.error("Error saving to Firestore:", error);
            toast.error("Failed to save enrollment. Please try again.");
          } finally {
            // Reset processing state
            setProcessingCourseId(null);
            setIsProcessingPayment(false);
          }
        },
        prefill: {
          name: user.fullName || "",
          email: user.primaryEmailAddress?.emailAddress || "",
        },
        theme: {
          color: "#6366f1",
        },
        modal: {
          ondismiss: function () {
            setProcessingCourseId(null);
            setIsProcessingPayment(false);
            toast.error("Payment cancelled");
          },
        },
      };

      const razorpay = new razorpayInstance(options);
      razorpay.open();
    } catch (error) {
      // console.error("Razorpay error:", error);
      toast.error("Payment failed. Please try again.");
      setProcessingCourseId(null);
      setIsProcessingPayment(false);
    }
  };

  return (
    <div className="space-y-6">
      <ElevenLabsConversationalChat />
      <SectionHeading>Buy Courses</SectionHeading>

      <div className="glass-card rounded-xl p-6 mb-6">
        <div className="bg-amber-50 text-amber-800 p-4 rounded-lg mb-6 border border-amber-200">
          <h3 className="font-medium mb-2 flex items-center">
            <ShoppingCart size={18} className="mr-2" />
            Payment Information
          </h3>
          <p className="text-sm">
            All payments are processed securely via Razorpay. After purchase,
            your course will be instantly available in "My Courses" and course
            videos will be unlocked in "My Schedule".
          </p>
          <p className="mt-2 text-sm">
            If you face any issues with payment, please contact me at{" "}
            <span>
              <a
                href="mailto:academyshreyn12@gmail.com"
                className="font-semibold cursor-pointer hover:underline"
              >
                academyshreyn12@gmail.com
              </a>
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Book size={20} />
              </div>
              <h3 className="text-lg font-medium mb-2">{course.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">
                {course.description}
              </p>
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
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Video size={16} className="mr-1" />
                <span>{course.videos?.length || 0} video lessons</span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground mb-1">
                <span>Duration: {course.duration}</span>
                <span className="text-3xl font-semibold text-primary">
                  ₹{course.discountedPrice / 100}{" "}
                  <span className="line-through text-lg font-medium text-gray-500">
                    ₹{course.price / 100}
                  </span>
                </span>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/20 px-6 py-3">
              <button
                onClick={() => handlePayment(course)}
                disabled={
                  processingCourseId === course.id || // Disable if this course is being processed
                  enrolledCourses.some(
                    (c) => c.id === course.id && c.userId === user?.id
                  )
                }
                className={`w-full flex items-center justify-center gap-2 py-2 rounded-md ${
                  enrolledCourses.some(
                    (c) => c.id === course.id && c.userId === user?.id
                  )
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-primary text-white hover:bg-primary/90"
                } transition-colors`}
              >
                {enrolledCourses.some(
                  (c) => c.id === course.id && c.userId === user?.id
                )
                  ? "Enrolled"
                  : processingCourseId === course.id
                  ? "Processing..."
                  : "Buy Now"}
              </button>


            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BuyCourses;
