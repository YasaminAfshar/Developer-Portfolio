import React, { useRef } from 'react'
import { Space_Mono, Roboto, Mate_SC } from "next/font/google";
import "animate.css";
import Image from 'next/image';
import Tilt from "react-vanilla-tilt";
import { motion, useScroll } from 'framer-motion';
import hotmart from "../../public/images/general/logo-hotmart.png"
import Lilcon from '@/subComponents/Lilcon';

const MotionImage = motion(Image)

const Details = ({position, company, companyLink, companyImage, time, address, work}) => {
    const ref = useRef(null);
    return (
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
      >
        <Lilcon reference={ref} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="flex gap-8 items-center"
        >
          <MotionImage
            src={companyImage}
            alt={company}
            className="w-24 mr-8"
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
              <h3 className="font-bold text-[1.7rem]">
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
                className={`${mate.variable} font-mate capitalize font-semibold text-xl`}
              >
                {time} | {address}
              </span>
              <p
                className={`${roboto.variable} font-roboto w-full text-justify text-lg pt-4`}
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
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mt-10 mb-20">
      <h2
        className={`${space.variable} font-space font-extrabold text-black dark:text-light text-5xl text-center p-5 mx-auto mb-20 underline underline-offset-4 animate__animated animate__pulse animate_slower animate__delay-2s animate__infinite overflow-hidden`}
      >
        EXPERIENCE
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[3.4rem] top-1 w-[6px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
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