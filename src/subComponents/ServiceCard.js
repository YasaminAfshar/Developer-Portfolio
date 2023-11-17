import Image from 'next/image'
import React from 'react'
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  return (
    <div className="w-full h-auto my-14 mx-auto cursor-grab overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
            <Image src={css} alt="Services Card" className="w-20 h-20" />
            <h3
              className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
            >
              Front-End Developer
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
            <Image src={backend} alt="Services Card" className="w-20 h-20" />
            <h3
              className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
            >
              Back-End Developer
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
            <Image src={developer} alt="Services Card" className="w-20 h-20" />
            <h3
              className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
            >
              Full Stack Developer
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
            <Image src={web} alt="Services Card" className="w-20 h-20" />
            <h3
              className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
            >
              React JS Developer
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
            <Image src={creator} alt="Services Card" className="w-20 h-20" />
            <h3
              className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
            >
              Web Creator
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
            <Image src={data} alt="Services Card" className="w-20 h-20" />
            <h3
              className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
            >
              Data Entry
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
            <Image src={virtual} alt="Services Card" className="w-20 h-20" />
            <h3
              className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
            >
              Virtual Assistant
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col items-center justify-evenly serviceCard rounded-xl w-[12rem] h-80 p-5">
            <Image src={marketing} alt="Services Card" className="w-20 h-20" />
            <h3
              className={`${merienda.variable} font-merienda font-extrabold text-2xl text-center tracking-wider`}
            >
              Digital Marketing
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ServiceCard