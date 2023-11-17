import Head from 'next/head'
import React from 'react'
import "animate.css";
import { Rowdies, Unna, Space_Mono } from "next/font/google";
import Layout from '@/components/Layout';
import Image from 'next/image';
import profileImage from "../../public/images/profile/perfil1.png";
import ServiceCard from '@/subComponents/ServiceCard';


/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const rowdies = Rowdies({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-rowdies",
});

const unna = Unna({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unna",
});

const space = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space",
});


const About = () => {
  return (
    <>
      <Head>
        <title>My Portfolio - About Page</title>
        <meta
          name="description"
          content="Right now, you are on the ABOUT PAGE where you will find a description of my knowledge and experiences in the field of programming, digital marketing and data entry."
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16 pb-20">
          <h1
            className={`${rowdies.variable} font-rowdies w-auto mx-auto text-black text-8xl text-center font-medium tracking-wider cursor-default overflow-hidden titleShadow animate__animated animate__fadeInUp animate__slower animate__delay-1s`}
          >
            Passion Fuels Purpose!
          </h1>
          <div className="grid w-full grid-cols-8 gap-16 mt-20">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <p
                className={`${unna.variable} font-unna text-2xl text-black font-medium text-justify indent-12 my-10 mx-auto `}
              >
                As a full stack developer with experience in digital marketing
                and data management, I constantly seek to improve my skills
                through practice and constant updating. My main goal is to
                provide exceptional customer service, exceeding their
                expectations in a world where technology predominates. My
                interest in programming and digital arose from observing its
                growth and the increasing demand for professionals in this
                constantly evolving field.
              </p>
              <h3
                className={`${space.variable} font-space font-extrabold text-black text-3xl text-center my-5 underline underline-offset-4 decoration-wavy mx-auto animate__animated animate__pulse animate_slower animate__delay-2s animate__infinite overflow-hidden`}
              >
                What services do I provide?
              </h3>
              <ServiceCard />
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-1 -right-4 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark" />
              <Image
                src={profileImage}
                alt="Image of Yasmin Afsharinejad, creator of this awesome portfolio"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default About