import { SignUp as ClerkSignUp } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-b from-white to-amber-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl font-bold text-amber-800">Sign Up</h1>
          <p className="text-amber-700 text-sm">Join Frontend Guru Academy today</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <ClerkSignUp
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
            appearance={{
              elements: {
                formButtonPrimary:
                  "w-auto ml-4 mr-4 bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all",
                card: "shadow-none p-4",
                headerTitle: "text-xl font-semibold text-amber-800 hidden",
                headerSubtitle: "hidden",
                formFieldLabel: "text-sm ml-5 mr-4 font-medium text-amber-800 mb-1 block",
                formFieldInput:
                  "w-auto px-4 py-3 ml-4 mr-4 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm bg-white",
                footerActionLink: "text-amber-600 hover:text-amber-700 font-medium",
                dividerLine: "bg-amber-200 h-px",
                dividerText: "text-amber-600 bg-white px-2",
                socialButtonsBlockButton: "border-amber-300 hover:bg-amber-50 transition-all rounded-lg",
                socialButtonsBlockButtonText: "text-amber-800 font-medium",
                alert: "text-amber-800 bg-amber-100 border border-amber-300 rounded-lg p-3",
                formFieldInputShowPasswordButton: "absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-600 focus:text-amber-600 w-7 h-5",
              },
              variables: {
                colorPrimary: "rgb(245, 158, 11)",
                colorText: "rgb(120, 53, 15)",
                colorBackground: "white",
                borderRadius: "0.75rem",
              },
              layout: {
                unsafe_disableDevelopmentModeWarnings: true,
              },
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUp;
