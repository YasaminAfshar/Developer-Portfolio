import React, { useRef, useState } from "react";
import { Space_Mono, Roboto, Mate_SC } from "next/font/google";
import "animate.css";
import Image from "next/image";
import Tilt from "react-vanilla-tilt";
import Lilcon from "@/subComponents/Lilcon";
import { motion, useScroll } from "framer-motion";
import Slider from "react-slick";
/* --------------------------------- ICONOS --------------------------------- */
import coderhouse from "../../public/images/general/coderhouse.png";
import hotmart from "../../public/images/general/logo-hotmart.png";
import claseflix from "../../public/images/general/logo-claseflix.webp";
/* ------------------------ IMAGENES DE CERTIFICADOS ------------------------ */
import frontend from "../../public/images/certificates/certificado-desarrolloweb.png";
import backend from "../../public/images/certificates/certificado-Backend.png";
import react from "../../public/images/certificates/certificado-reactjs.png";
import javascript from "../../public/images/certificates/certificado-javascript.png";
import fullStack from "../../public/images/certificates/certificado-Desarrollo-Full-Stack.png";
import marketing from "../../public/images/certificates/certificado-marketing-digital.jpg";



const MotionImage = motion(Image);


const Details = ({
  type, time, place, info, logo
}) => {
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
          src={logo}
          alt={place}
          className="w-24"
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
        <Tilt style={{ width: "100%", padding: "20px" }}>
          <div className="cursor-default">
            <h3 className="font-bold text-[1.7rem]">
              {type}
            </h3>
            <span
              className={`${mate.variable} font-mate capitalize font-semibold text-xl text-dark`}
            >
              {time} | {place}
            </span>
            <p
              className={`${roboto.variable} font-roboto w-full text-justify text-lg pt-4`}
            >
              {info}
            </p>
          </div>
        </Tilt>
      </motion.div>
    </li>
  );
};

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

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "center start"],
    });

    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "40px",
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

  return (
    <div className=" w-full h-auto flex flex-col justify-center items-center mt-32 mb-36">
      <div className="w-full h-auto flex flex-col justify-center items-center ">
        <h2
          className={`${space.variable} font-space font-extrabold text-black text-5xl text-center p-5 mx-auto mt-10 mb-20 underline underline-offset-4 animate__animated animate__pulse animate_slower animate__delay-2s animate__infinite overflow-hidden`}
        >
          EDUCATION
        </h2>
        <div ref={ref} className="w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[3.4rem] top-1 w-[6px] h-full bg-dark origin-top"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
              logo={coderhouse}
              type="Course of Full-Stack Developer"
              time="July 2022 - September 2023"
              place="Platform Coderhouse"
              info="I took four courses for a year where I learned how to develop with HTML, CSS, JavaScript, React JS and Backend Development. At the end of the four courses, each one was approved with the delivery of a final project, I was also awarded the Full-Stack Developer certificate with frontend and backend knowledge."
            />
            <Details
              logo={hotmart}
              type="Course of Digital Marketing"
              time="February to November 2023"
              place="Platform Hotmart"
              info="I took a Digital Marketing course awarded by the Hotmart platform without providing a certificate where they teach you how the world of Marketing works within the Digital era and how to use the knowledge obtained to sell the products and services offered by the platform. You learn the organic, launch and paid methods through advertising or platforms."
            />
            <Details
              logo={claseflix}
              type="Course of Excel from scratch"
              time="November 2023"
              place="Platform Claseflix"
              info="I took a free course where they taught me how to use Excel as a professional for different types of needs, especially for managing large amounts of data. It consisted of three levels: initial, intermediate and professional. I also complemented this knowledge with other courses given by the Hotmart and YouTube platform."
            />
          </ul>
        </div>
      </div>
      <div className="w-[90%] h-full mt-40 mx-auto relative cursor-grabbing">
        <Slider {...settings}>
          <div>
            <Image
              src={frontend}
              alt="Certificado de Desarrollo Web con HTML5 y CSS3"
              className="w-full h-auto"
            />
          </div>
          <div>
            <Image
              src={javascript}
              alt="Certificado de Javascript"
              className="w-full h-auto "
            />
          </div>
          <div>
            <Image
              src={react}
              alt="Certificado de React JS "
              className="w-full h-auto"
            />
          </div>
          <div>
            <Image
              src={backend}
              alt="Certificado de Desarrollo Backend"
              className="w-full h-auto"
            />
          </div>
          <div>
            <Image
              src={fullStack}
              alt="Certificado de Desarrollo Full Stack"
              className="w-full h-auto"
            />
          </div>
          <div>
            <Image
              src={marketing}
              alt="Certificado de Marketing Digital "
              className="w-full h-auto"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Education;
