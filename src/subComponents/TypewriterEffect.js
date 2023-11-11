import React from "react";
import Typewriter from "typewriter-effect";
import { Space_Mono } from "next/font/google";

const space = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space",
});

const TypewriterText = () => {
  return (
    <h3
      className={`${space.variable} font-space text-black text-2xl text-center font-extrabold pt-2 my-2 mx-auto cursor-default overflow-hidden `}
    >
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 200,
        }}
        onInit={(typewriter) => {
          typewriter

            .typeString("Full Stack Developer/Data Entry/Digital Marketing")

            .pauseFor(2000)
            .deleteAll()
            .changeDeleteSpeed(2500)
            .start();
        }}
      />
    </h3>
  );
};

export default TypewriterText;
