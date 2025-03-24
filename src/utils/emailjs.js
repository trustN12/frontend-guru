import emailjs from '@emailjs/browser';

// Initialize EmailJS with user ID
export const initEmailJs = () => {
  emailjs.init("72yf9lHWZdhA6bsR4"); // Replace with your actual EmailJS public key
};

export const sendContactForm = async (formData) => {
  try {
    // Ensure EmailJS is initialized
    emailjs.init("72yf9lHWZdhA6bsR4");

    const result = await emailjs.send(
      "service_2p9tq8a", // EmailJS service ID
      "template_r3v3ijd", // EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      "72yf9lHWZdhA6bsR4" // EmailJS Public Key (User ID)
    );

    console.log("Email sent successfully:", result);
    return { success: true, result };
  } catch (error) {
    console.error("EmailJS error:", error);
    return { success: false, error };
  }
};


export const sendPurchaseNotification = async (courseData, userData) => {
  try {
    const result = await emailjs.send(
      "service_2p9tq8a", // EmailJS service ID
      "template_r3v3ijd", // EmailJS template ID
      {
        name: userData.fullName || "User",
        email: userData.primaryEmailAddress?.emailAddress || "No email provided",
        phone: "N/A",
        message: `New course purchase: ${courseData.title} for ₹${courseData.price/100}. Payment ID: ${courseData.paymentId || 'Pending'}. UPI ID for payment: 9679188394@ybl`,
      }
    );
    
    return { success: true, result };
  } catch (error) {
    console.error("EmailJS error:", error);
    return { success: false, error };
  }
};
