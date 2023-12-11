import React from 'react'
import Head from "next/head";
import Layout from '@/components/Layout';
import { motion } from "framer-motion";
import { Rowdies } from "next/font/google";
import "animate.css";
import { FirstProjects, SecondProjects, ThirdProjects, FourthProjects } from '@/components/BoxProjects';


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

          <div className="w-full h-auto mx-auto mt-24">
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
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
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
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
            >
              <FourthProjects
                type="Excel"
                title="Online Shop Website"
                summary="A professional Online Shop Website using React Js, Framer-motion, Tailwind CSS, Styled-components and other libraries. It has smooth page transitions, cool background effects, unique design and it is mobile responsive"
                img1={image1A}
                img2={image1B}
                img3={image1C}
                link="/curriculum.pdf"
              />
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects