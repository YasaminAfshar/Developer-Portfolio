import React from 'react'
import "animate.css";
import { Space_Mono} from "next/font/google";

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const space = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space",
});

const Skills = () => {
  return (
    <>
      <h2
        className={`${space.variable} font-space font-extrabold text-black text-5xl text-center p-5 mx-auto my-10 underline underline-offset-4 animate__animated animate__pulse animate_slower animate__delay-2s animate__infinite overflow-hidden`}
      >
        SKILLS
      </h2>
    </>
  );
}

export default Skills