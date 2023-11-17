import Image from 'next/image'
import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Merienda } from "next/font/google";
import web from "../../public/images/general/web.png"
import backend from "../../public/images/general/backend.png";
import developer from "../../public/images/general/developer.png";
import data from "../../public/images/general/data.png";
import css from "../../public/images/general/css.png";
import creator from "../../public/images/general/creator.png";
import virtual from "../../public/images/general/assistant.png";
import marketing from "../../public/images/general/marketing.png";


/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const merienda = Merienda({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-merienda",
});

const ServiceCard = () => {
//Acá se puede modificar la cantidad de imágenes que se muestran en el carousel según breakpoint
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full h-auto my-14 mx-auto">
      <Carousel
        responsive={responsive}
        infinite={true}
        className="owl-carousel owl-theme skill-slider"
      >
        <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
          <Image src={css} alt="Services Card" className="w-20 h-20" />
          <h3
            className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
          >
            Front-End Developer
          </h3>
        </div>
        <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
          <Image src={backend} alt="Services Card" className="w-20 h-20" />
          <h3
            className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
          >
            Back-End Developer
          </h3>
        </div>
        <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
          <Image src={developer} alt="Services Card" className="w-20 h-20" />
          <h3
            className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
          >
            Full Stack Developer
          </h3>
        </div>
        <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
          <Image src={web} alt="Services Card" className="w-20 h-20" />
          <h3
            className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
          >
            React JS Developer
          </h3>
        </div>
        <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
          <Image src={creator} alt="Services Card" className="w-20 h-20" />
          <h3
            className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
          >
            Web Creator
          </h3>
        </div>
        <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
          <Image src={data} alt="Services Card" className="w-20 h-20" />
          <h3
            className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
          >
            Data Entry
          </h3>
        </div>
        <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
          <Image src={virtual} alt="Services Card" className="w-20 h-20" />
          <h3
            className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
          >
            Virtual Assistant
          </h3>
        </div>
        <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
          <Image src={marketing} alt="Services Card" className="w-20 h-20" />
          <h3
            className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
          >
            Digital Marketing
          </h3>
        </div>
      </Carousel>
    </div>
  );
}

export default ServiceCard