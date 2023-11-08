import React, { useState, useEffect } from "react";
import { Space_Mono } from "next/font/google";

const space = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space",
});

const TypewriterText = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const fullText = "Full Stack Developer/Data Entry/Digital Marketing";

    let currentText = "";
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
        setTimeout(typeText, 150);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          currentIndex = 0; 
          currentText = "";
          setIsTyping(true); 
          typeText();
        }, 1500); 
      }
    };

    typeText();
  }, []);

  return (
    <h3
      className={`${space.variable} font-space text-dark text-2xl text-center font-extrabold pt-2 my-2 mx-auto cursor-default overflow-hidden `}
    >
      {text}
      <span className="span">&#160;</span>
    </h3>
  );
};

export default TypewriterText;
