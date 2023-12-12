import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from '@/components/Layout';
import { motion } from "framer-motion";
import { Rowdies, Kurale, Economica } from "next/font/google";
import "animate.css";
import { FirstProjects, ThirdProjects } from '@/components/BoxProjects';
import Image from "next/image";


/* -------------------------------- IMAGENES -------------------------------- */

import image1A from "../../public/images/projects/image-1-A.jpg"
import image1B from "../../public/images/projects/image-1-B.jpg"
import image1C from "../../public/images/projects/image-1-C.jpg" 

import gifted from "../../public/images/general/gifted.png"

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const rowdies = Rowdies({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-rowdies",
});

const kurale = Kurale({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kurale",
});

const economica = Economica({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-economica",
});

 
const projects = () => {

   const [category, setCategory] = useState("All"); 

   const handleCategoryChange = (newCategory) => {
     setCategory(newCategory);
   };

   useEffect(() => {
     setCategory("Websites");
   }, []);

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
            className={`${rowdies.variable} font-rowdies w-full mx-auto text-black text-8xl text-center pb-8 font-medium tracking-wider cursor-default overflow-hidden titleShadow animate__animated animate__fadeInDown animate__slower animate__delay-1s`}
          >
            My Projects
          </h1>

          <div
            className={`${kurale.variable} font-kurale text-4xl text-black tracking-wider font-bold flex flex-col 2sm:flex-row justify-between 2sm:justify-center items-center gap-8 2sm:gap-16 w-full mx-auto mt-20`}
          >
            <button
              onClick={() => handleCategoryChange("Websites")}
              className="p-4 outlined-none rounded-full bg-gradient-to-r from-pink-300 to-purple-600 hover:text-white hover:from-pink-600 hover:to-purple-300 hover:drop-shadow-2xl"
            >
              Websites
            </button>
            <button
              onClick={() => handleCategoryChange("Backend")}
              className="p-4 outlined-none rounded-full bg-gradient-to-r from-pink-300 to-purple-600 hover:text-white hover:from-pink-600 hover:to-purple-300 hover:drop-shadow-2xl"
            >
              Backend
            </button>
            <button
              onClick={() => handleCategoryChange("Data Entry")}
              className="p-4 outlined-none rounded-full bg-gradient-to-r from-pink-300 to-purple-600 hover:text-white hover:from-pink-600 hover:to-purple-300 hover:drop-shadow-2xl"
            >
              Data Entry
            </button>
          </div>

          <div className="w-full h-auto mx-auto mt-24">
            {category === "Websites" && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.3 }}
                  viewport={{ once: true }}
                >
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
                </motion.div>
              </>
            )}

            {category === "Backend" && (
              <>
                <div className="w-full flex flex-col justify-center items-center gap-10 my-40">
                  <h3
                    className={`${economica.variable} font-economica text-black  text-4xl 1md:text-5xl text-center font-bold tracking-wider`}
                  >
                    Upss... I haven't created a project yet!
                  </h3>
                  <Image
                    src={gifted}
                    alt="Image of code with movement"
                    className="w-full lg:w-2/5 mt-14 "
                  />
                </div>
              </>
            )}

            {category === "Data Entry" && (
              <>
                <div className="w-full flex flex-col lg:flex-row gap-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.3 }}
                    viewport={{ once: true }}
                    className="w-full"
                  >
                    <ThirdProjects
                      type="Excel"
                      title="Lista Empleados"
                      summary="A professional Online Shop Website using React Js, Framer-motion, Tailwind CSS, Styled-components and other libraries. It has smooth page transitions, cool background effects, unique design and it is mobile responsive"
                      img1={image1A}
                      img2={image1B}
                      img3={image1C}
                      link="/curriculum.pdf"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.3 }}
                    viewport={{ once: true }}
                    className="w-full"
                  >
                    <ThirdProjects
                      type="Excel"
                      title="Lista Empleados"
                      summary="A professional Online Shop Website using React Js, Framer-motion, Tailwind CSS, Styled-components and other libraries. It has smooth page transitions, cool background effects, unique design and it is mobile responsive"
                      img1={image1A}
                      img2={image1B}
                      img3={image1C}
                      link="/curriculum.pdf"
                    />
                  </motion.div>
                </div>
              </>
            )}
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects