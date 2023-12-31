import React, { useRef} from "react";
import { Space_Mono, Roboto, Mate_SC } from "next/font/google";
import "animate.css";
import Image from "next/image";
import Tilt from "react-vanilla-tilt";
import Lilcon from "@/subComponents/Lilcon";
import { motion, useScroll } from "framer-motion";
import Slider from "react-slick";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import styled from "styled-components";

/* --------------------------------- ICONOS --------------------------------- */
import coderhouse from "../../public/images/general/coderhouse.png";
import hotmart from "../../public/images/general/logo-hotmart.png";

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
      className="my-8 first:mt-0 last:mb-0 w-full 1md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="flex gap-10 ml-28 items-center"
      >
        <MotionImage
          src={logo}
          alt={place}
          className="w-20  mr-4 hidden 2lg:inline-block"
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
                  {type}
                </h3>
                <span
                  className={`${mate.variable} font-mate capitalize font-semibold text-lg 2md:text-xl`}
                >
                  {time} | {place}
                </span>
              </div>
              <MotionImage
                src={logo}
                alt={place}
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
              className={`${roboto.variable} font-roboto w-full text-justify  text-base 2md:text-lg  pt-0 2lg:pt-4`}
            >
              {info}
            </p>
          </div>
        </Tilt>
      </motion.div>
    </li>
  );
};

const Buttons = styled.div`
  button {
    width: 3.4rem;
    height: 4rem;
    background-color: #efeeee;
    border-radius: 50%;
    cursor: pointer;
    color: #5d036f;
    position: absolute;
    top: 45%;
  }

  .next {
    right: -5rem;
    font-size: 3.5rem;
  }

  .back {
    left: -5rem;
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 780px) {
    button {
      width: 2.8rem;
      height: 3.2rem;
    }

    .next {
      right: -3rem;
      font-size: 2.6rem;
    }

    .back {
      left: -3rem;
      font-size: 2.6rem;
    }
  }
`; 

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
      dots: false,
      arrows: false,
      infinite: true,
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
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            centerMode: false,
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            centerMode: false,
          },
        },
      ],
    };

    const arrowRef = useRef(null);

  return (
    <div className=" w-full h-auto flex flex-col justify-center items-center mt-32 mb-36">
      <div className="w-full h-auto flex flex-col justify-center items-center ">
        <h2
          className={`${space.variable} font-space font-extrabold text-black dark:text-light text-5xl text-center p-5 mx-auto mt-10 mb-20 underline underline-offset-4 animate__animated animate__pulse animate_slower animate__delay-2s animate__infinite overflow-hidden`}
        >
          EDUCATION
        </h2>
        <div
          ref={ref}
          className="w-full 2md:w-[90%] 1xl:w-[75%] mx-auto relative"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[2.2rem] 1md:left-[3.4rem] top-1 w-[4px] 1md:w-[6px] h-full bg-dark origin-top dark:bg-light"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-0 3sm:ml-4">
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
              logo={hotmart}
              type="Course of Excel from scratch"
              time="November 2023"
              place="Platform Hotmart"
              info="I took a free course where they taught me how to use Excel as a professional for different types of needs, especially for managing large amounts of data. It consisted of three levels: initial, intermediate and professional. I also complemented this knowledge with other courses given by the Hotmart and YouTube platform."
            />
          </ul>
        </div>
      </div>
      <div className="w-[90%] h-full mt-40 mx-auto relative cursor-grabbing">
        <Slider ref={arrowRef} {...settings}>
          <div>
            <MotionImage
              src={frontend}
              alt="Certificado de Desarrollo Web con HTML5 y CSS3"
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div>
            <MotionImage
              src={javascript}
              alt="Certificado de Javascript"
              className="w-full h-auto  object-cover"
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div>
            <MotionImage
              src={react}
              alt="Certificado de React JS "
              className="w-full h-auto  object-cover"
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div>
            <MotionImage
              src={backend}
              alt="Certificado de Desarrollo Backend"
              className="w-full h-auto  object-cover"
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div>
            <MotionImage
              src={fullStack}
              alt="Certificado de Desarrollo Full Stack"
              className="w-full h-auto  object-cover"
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div>
            <MotionImage
              src={marketing}
              alt="Certificado de Marketing Digital "
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()} className="back">
            <MdKeyboardDoubleArrowLeft />
          </button>
          <button onClick={() => arrowRef.current.slickNext()} className="next">
            <MdKeyboardDoubleArrowRight />
          </button>
        </Buttons>
      </div>
    </div>
  );
};

export default Education;
