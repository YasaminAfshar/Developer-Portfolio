import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from '@/components/Layout';
import { motion } from "framer-motion";
import { Rowdies, Kurale, Economica } from "next/font/google";
import "animate.css";
import { FourthProjects } from '@/components/BoxProjects';
import Image from "next/image";
import { useRouter } from "next/router";


/* -------------------------------- IMAGENES -------------------------------- */

import image1A from "../../public/images/projects/image-1-A.webp"
import image1B from "../../public/images/projects/image-1-B.webp"
import image1C from "../../public/images/projects/image-1-C.webp" 

import gifted from "../../public/images/general/gifted.webp"
import TransitionEffect from "@/components/hooks/TransitionEffect";

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

 
const Projects = () => {

  const [category, setCategory] = useState("All"); 
  const router = useRouter(); 

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  useEffect(() => {
    const { category: urlCategory } = router.query;
    if (urlCategory) {
      setCategory(urlCategory);
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <title>My Portfolio - My Projects</title>
        <meta
          name="description"
          content="Right now, you are on the PROJECTS PAGE where you will be able to visualize all the projects that I have been doing to date."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16 pb-20 overflow-hidden">
          <h1
            className={`${rowdies.variable} font-rowdies w-full mx-auto text-black dark:text-light text-5xl 2xsm:text-7xl 2sm:text-8xl text-center pb-8 font-medium tracking-wider cursor-default overflow-hidden titleShadow animate__animated animate__fadeInDown animate__slower animate__delay-1s`}
          >
            My Projects
          </h1>

          <div
            className={`${kurale.variable} font-kurale text-2xl 3sm:text-4xl text-black tracking-wider font-bold flex flex-col 2sm:flex-row justify-between 2sm:justify-center items-center gap-8 2sm:gap-16 w-full mx-auto mt-20`}
          >
            <motion.button
              onClick={() => handleCategoryChange("Websites")}
              className="p-4 outlined-none rounded-full bg-gradient-to-r from-pink-300 to-purple-600 hover:text-white hover:from-pink-600 hover:to-purple-300 hover:drop-shadow-2xl"
              whileTap={{ scale: 0.85 }}
              aria-label="Access to Website Projects "
            >
              Websites
            </motion.button>
            <motion.button
              onClick={() => handleCategoryChange("Backend")}
              className="p-4 outlined-none rounded-full bg-gradient-to-r from-pink-300 to-purple-600 hover:text-white hover:from-pink-600 hover:to-purple-300 hover:drop-shadow-2xl"
              whileTap={{ scale: 0.85 }}
              aria-label="Access to Backend Projects "
            >
              Backend
            </motion.button>
            <motion.button
              onClick={() => handleCategoryChange("Others")}
              className="p-4 outlined-none rounded-full bg-gradient-to-r from-pink-300 to-purple-600 hover:text-white hover:from-pink-600 hover:to-purple-300 hover:drop-shadow-2xl"
              whileTap={{ scale: 0.85 }}
              aria-label="Access to Data Projects "
            >
              Others
            </motion.button>
          </div>

          <div className="w-full h-auto mx-auto mt-24">
            {category === "All" && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.3 }}
                  viewport={{ once: true }}
                >
                  <FourthProjects
                    type="Excel"
                    title="Point of Sale App"
                    summary="We created a professional point of sale application with the possibility of printing the generated invoice, it has been configured in such a way that it works with thermal printing invoice. A form has been generated to register the products and the tickets generated can be accessed and downloaded in pdf format."
                    img1={image1A}
                    img2={image1B}
                    img3={image1C}
                    googleSheet="https://minimal-nextjs-portfolio-website.vercel.app/projects"
                    link="/excelProjects/"
                  />
                </motion.div>
              </>
            )}

            {category === "Websites" && (
              <>
                <div className="w-full flex flex-col justify-center items-center gap-10 my-40">
                  <h3
                    className={`${economica.variable} font-economica text-black dark:text-light text-4xl 1md:text-5xl text-center font-bold tracking-wider`}
                  >
                    Upss... I have not created a project yet!
                  </h3>
                  <Image
                    src={gifted}
                    alt="Image of code with movement"
                    className="w-full lg:w-2/5 mt-14 "
                  />
                </div>
              </>
            )}

            {category === "Backend" && (
              <>
                <div className="w-full flex flex-col justify-center items-center gap-10 my-40">
                  <h3
                    className={`${economica.variable} font-economica text-black dark:text-light text-4xl 1md:text-5xl text-center font-bold tracking-wider`}
                  >
                    Upss... I have not created a project yet!
                  </h3>
                  <Image
                    src={gifted}
                    alt="Image of code with movement"
                    className="w-full lg:w-2/5 mt-14 "
                  />
                </div>
              </>
            )}

            {category === "Others" && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.3 }}
                  viewport={{ once: true }}
                >
                  <FourthProjects
                    type="Excel"
                    title="Point of Sale App"
                    summary="We have created a professional application that allows you to generate tickets using data saved in a database; using Excel VBA. It was created for a clothing store that sells privately, so that the businesswoman can have exclusive control of the sales she makes. A form has been generated to register the products and the tickets generated can be accessed and downloaded in pdf format."
                    img1={image1A}
                    img2={image1B}
                    img3={image1C}
                    googleSheet="https://drive.google.com/file/d/1A1Ei8IDX3zvaQOyl1OuI4d09qFQ261rB/view?usp=drive_link"
                    link="/excelProjects/pv_vba.zip"
                  />
                </motion.div>
              </>
            )}
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects



/* -------------------- HOW TO ADD THE MODELS OF: FIRSTPROJECTS, SECONDPROJECTS AND THIRDPROJECTS -------------------- */

/*
<motion.div
  initial={{ opacity: 0, scale: 0 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.3 }}
  viewport={{ once: true }}
>
    <FirstProjects
      type="Website"
      title="Online Shop Website"
      summary="A professional Online Shop Website using React Js, Framer-motion, Tailwind CSS, Styled-components andlibraries. It has smooth page transitions, cool background effects, unique design and it is mobile responsive"
      img1={image1A}
      img2={image1B}
      img3={image1C}
      link="https://minimal-nextjs-portfolio-website.vercel.app/projects"
      github="https://github.com/YasaminAfshar/ProyectoFinalReactJS-AfsharinejadYasmin"
    />
</motion.div>
*/

/*
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
          summary="A professional Online Shop Website using React Js, Framer-motion, Tailwind CSS, Styled-components and libraries. It has smooth page transitions, cool background effects, unique design and it is mobile responsive"
          img1={image1A}
          img2={image1B}
          img3={image1C}
          googleSheet="https://minimal-nextjs-portfolio-website.vercel.app/projects"
          link="/excelProjects/"
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
          summary="A professional Online Shop Website using React Js, Framer-motion, Tailwind CSS, Styled-components and libraries. It has smooth page transitions, cool background effects, unique design and it is mobile responsive"
          img1={image1A}
          img2={image1B}
          img3={image1C}
          googleSheet="https://minimal-nextjs-portfolio-website.vercel.app/projects"
          link="/excelProjects/"
        />
    </motion.div>
</div>
*/