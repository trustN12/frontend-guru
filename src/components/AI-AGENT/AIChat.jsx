import React, { useEffect } from "react";

const ElevenLabsConversationalChat = () => {
  useEffect(() => {
    // Load the ElevenLabs widget script dynamically
    const script = document.createElement("script");
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return <elevenlabs-convai agent-id="FJWgGrxkorSJukL9ZlF3"></elevenlabs-convai>;
};

export default ElevenLabsConversationalChat;
