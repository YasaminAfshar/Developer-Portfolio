import React from 'react'
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import Layout from '@/components/Layout';
import { motion } from "framer-motion";
import { Rowdies, Economica, Merienda, Roboto } from "next/font/google";
import "animate.css";
import { Carousel } from "@material-tailwind/react";
import { GithubIcon } from '@/subComponents/Icons';


const FirstProjects = ({type,title,summary, img1 , img2, img3 ,link,github}) => {
  return (
    <article className="w-full flex flex-col 2lg:flex-row items-center gap-6 rounded-3xl border border-solid border-dark bg-light boxProject p-12 mb-28 cursor-default">
      <Carousel
        transition={{ duration: 2 }}
        className="rounded-xl w-full 2lg:w-1/2 h-max overflow-hidden"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <Image src={img1} alt={title} className="h-auto w-full object-cover" />
        <Image src={img2} alt={title} className="h-auto w-full object-cover" />
        <Image src={img3} alt={title} className="h-auto w-full object-cover" />
      </Carousel>

      <div className="w-full 2lg:w-1/2 h-full flex flex-col items-start justify-between gap-4 1xl:gap-8 ">
        <span
          className={`${economica.variable} font-economica text-primary font-bold text-2xl 1xl:text-3xl tracking-wider`}
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-3"
        >
          <h2
            className={`${merienda.variable} font-merienda w-full my-2 text-2xl sm:text-3xl 1xl:text-4xl`}
          >
            {title}
          </h2>
        </Link>
        <p
          className={`${roboto.variable} font-roboto text-dark text-md 1xl:text-lg text-justify`}
        >
          {summary}
        </p>
        <div className="flex mt-2 items-center gap-6">
          <Link href={github} target="_blank" className="w-14 hover:scale-50">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-3 px-6 text-md 1xl:text-lg font bold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
}

const SecondProjects = ({
  type,
  title,
  summary,
  img1,
  img2,
  img3,
  link,
  github,
}) => {
  return (
    <article className="w-full flex flex-col 2lg:flex-row-reverse items-center gap-6 rounded-3xl border border-solid border-dark bg-light boxProject p-12 mb-28 cursor-default">
      <Carousel
        transition={{ duration: 2 }}
        className="rounded-xl w-full 2lg:w-1/2 h-max overflow-hidden"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <Image src={img1} alt={title} className="h-auto w-full object-cover" />
        <Image src={img2} alt={title} className="h-auto w-full object-cover" />
        <Image src={img3} alt={title} className="h-auto w-full object-cover" />
      </Carousel>

      <div className="w-full 2lg:w-1/2 h-full flex flex-col items-start justify-between gap-4 1xl:gap-8 ">
        <span
          className={`${economica.variable} font-economica text-primary font-bold text-2xl 1xl:text-3xl tracking-wider`}
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-3"
        >
          <h2
            className={`${merienda.variable} font-merienda w-full my-2 text-2xl sm:text-3xl 1xl:text-4xl`}
          >
            {title}
          </h2>
        </Link>
        <p
          className={`${roboto.variable} font-roboto text-dark text-md 1xl:text-lg text-justify`}
        >
          {summary}
        </p>
        <div className="flex mt-2 items-center gap-6">
          <Link href={github} target="_blank" className="w-14 hover:scale-50">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-3 px-6 text-md 1xl:text-lg font bold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};




/* -------------------------------- IMAGENES -------------------------------- */

import image1A from "../../public/images/projects/image-1-A.jpg"
import image1B from "../../public/images/projects/image-1-B.jpg";
import image1C from "../../public/images/projects/image-1-C.jpg"

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const rowdies = Rowdies({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-rowdies",
});

const economica = Economica({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-economica",
});

const merienda = Merienda({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-merienda",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

const projects = () => {
  return (
    <>
      <Head>
        <title>My Portfolio - My Projects</title>
        <meta
          name="description"
          content="Right now, you are on the PROJECTS PAGE where you will be able to visualize all the projects that I have been doing to date."
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16 pb-20 overflow-hidden">
          <h1
            className={`${rowdies.variable} font-rowdies w-auto mx-auto text-black text-8xl text-center pb-8 font-medium tracking-wider cursor-default overflow-hidden titleShadow animate__animated animate__fadeInDown animate__slower animate__delay-1s`}
          >
            My Projects
          </h1>

          <div className="w-full h-auto mx-auto my-24">
            <div>
              <FirstProjects
                type="Website"
                title="Online Shop Website"
                summary="A professional Online Shop Website using React Js, Framer-motion, Tailwind CSS, Styled-components and other libraries. It has smooth page transitions, cool background effects, unique design and it is mobile responsive"
                img1={image1A}
                img2={image1B}
                img3={image1C}
                link="https://minimal-nextjs-portfolio-website.vercel.app/projects"
                github="https://github.com/YasaminAfshar/ProyectoFinalReactJS-AfsharinejadYasmin"
              />
            </div>
            <div>
              <SecondProjects
                type="Website"
                title="Online Shop Website"
                summary="A professional Online Shop Website using React Js, Framer-motion, Tailwind CSS, Styled-components and other libraries. It has smooth page transitions, cool background effects, unique design and it is mobile responsive"
                img1={image1A}
                img2={image1B}
                img3={image1C}
                link="https://minimal-nextjs-portfolio-website.vercel.app/projects"
                github="https://github.com/YasaminAfshar/ProyectoFinalReactJS-AfsharinejadYasmin"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects