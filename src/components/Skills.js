import React from 'react'
import "animate.css";
import { Space_Mono, Saira_Condensed} from "next/font/google";
import Technologies from "@/subComponents/Technologies";
import BallCanvas from '@/subComponents/Ball';

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const space = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space",
});


const saira = Saira_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-saira",
});

const Skills = () => {
  return (
    <>
      <div className='w-full h-auto mt-20 mb-20 pb-32'>
        <h2
          className={`${space.variable} font-space font-extrabold text-black text-5xl text-center p-5 mx-auto mb-20 underline underline-offset-4 animate__animated animate__pulse animate_slower animate__delay-2s animate__infinite overflow-hidden`}
        >
          SKILLS
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-16 h-auto w-full">
          {Technologies.map((technology) => (
            <div
              className="w-[9rem] h-[9rem] text-center"
              key={technology.name}
            >
              <BallCanvas icon={technology.icon} />
              <p
                className={`${saira.variable} font-saira text-black font-extrabold text-lg`}
              >
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills