import React, { useRef } from 'react'
import { Space_Mono, Roboto, Mate_SC } from "next/font/google";
import "animate.css";
import Image from 'next/image';
import Tilt from "react-vanilla-tilt";
import { motion } from 'framer-motion';
import hotmart from "../../public/images/general/logo-hotmart.png"
import Lilcon from '@/subComponents/Lilcon';

const MotionImage = motion(Image)

const Details = ({position, company, companyLink, companyImage, time, address, work}) => {
    const ref = useRef(null);
    return (
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-full 1md:w-[80%] mx-auto flex flex-col items-center justify-between"
      >
        <Lilcon reference={ref}/>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="flex gap-10 ml-0 sm:ml-28 items-center"
        >
          <MotionImage
            src={companyImage}
            alt={company}
            className="w-20 mr-4 hidden 2lg:inline-block"
            floated={false}
            animate={{
              scale: [1, 1.35, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0.2, 0.5, 0.8],
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
          <Tilt
            style={{
              width: "100%",
              padding: "20px",
              background: "white",
              borderRadius: "5%",
            }}
          >
            <div className="cursor-default text-dark">
              <div className="w-full flex flex-col 2lg:flex-row items-center justify-center 2lg:justify-start">
                <div className="text-center 2lg:text-start">
                  <h3 className="font-bold text-[1.2rem] 1md:text-[1.4rem] 2md:text-[1.7rem]">
                    {position}&nbsp;
                    <a
                      href={companyLink}
                      target="_blank"
                      className="text-primary dark:text-primaryDark"
                    >
                      @{company}
                    </a>
                  </h3>
                  <span
                    className={`${mate.variable} font-mate capitalize font-semibold text-lg 2md:text-xl`}
                  >
                    {time} | {address}
                  </span>
                </div>
                <MotionImage
                  src={companyImage}
                  alt={company}
                  className="w-16 my-6 inline-block 2lg:hidden"
                  floated={false}
                  animate={{
                    scale: [1, 1.35, 1],
                    rotate: [0, 360, 0],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0.2, 0.5, 0.8],
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </div>
              <p
                className={`${roboto.variable} font-roboto w-full text-justify text-base 2md:text-lg pt-0 2lg:pt-4`}
              >
                {work}
              </p>
            </div>
          </Tilt>
        </motion.div>
      </li>
    );
}

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const space = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

const mate = Mate_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mate",
});

const Experience = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mt-10 mb-20">
      <h2
        className={`${space.variable} font-space font-extrabold text-black dark:text-light text-4xl xsm:text-5xl text-center p-5 mx-auto mb-20 underline underline-offset-4 animate__animated animate__pulse animate_slower animate__delay-2s animate__infinite overflow-hidden`}
      >
        EXPERIENCE
      </h2>
      <div className="w-full 2md:w-[90%] 1xl:w-[75%] mx-auto relative">
        <div
          className="hidden sm:inline-block absolute left-[1rem] sm:left-[2.2rem] 1md:left-[3.4rem] top-1 w-[4px] 1md:w-[6px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-0 3sm:ml-4">
          <Details
            companyImage={hotmart}
            company="Hotmart"
            position="Affiliate in Hotmart"
            time="January 2023-Present"
            companyLink="https://hotmart.com/en"
            address="Platform Online"
            work="As an affiliate, my job is to create a sales technique to be able to sell the courses offered on the platform, using the organic method, launch or payment through advertising. Each sale that is achieved and carried out successfully allows me to earn a commission equal to 80% of the value of the course."
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience