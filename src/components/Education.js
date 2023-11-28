import React from "react";
import { Space_Mono } from "next/font/google";
import "animate.css";

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const space = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space",
});

const Education = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mt-20 mb-10">
      <h2
        className={`${space.variable} font-space font-extrabold text-black text-5xl text-center p-5 mx-auto mt-10 mb-20 underline underline-offset-4 animate__animated animate__pulse animate_slower animate__delay-2s animate__infinite overflow-hidden`}
      >
        EDUCATION
      </h2>
      hola
    </div>
  );
};

export default Education;
