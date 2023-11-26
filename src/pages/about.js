import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "animate.css";
import { Rowdies, Roboto, Space_Mono, Cinzel } from "next/font/google";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import profileImage from "../../public/images/profile/perfil3.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";


const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 4000})
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if(isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const rowdies = Rowdies({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-rowdies",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

const space = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space",
});

const cinzel= Cinzel({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cinzel",
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
            className={`${rowdies.variable} font-rowdies w-auto mx-auto text-black text-8xl text-center font-medium tracking-wider cursor-default overflow-hidden titleShadow animate__animated animate__fadeInDown animate__slower animate__delay-1s`}
          >
            Passion Fuels Purpose!
          </h1>
          <div className="flex justify-center items-center mt-14">
            <div className="flex flex-col gap-16 w-full">
              <div className="mx-auto w-full h-full flex gap-8 justify-between items-center">
                <div className="w-auto h-auto mx-auto">
                  <h3
                    className={`${space.variable} font-space font-extrabold text-black text-3xl text-center p-5 underline underline-offset-4 mx-auto mb-16 animate__animated animate__pulse animate_slower animate__delay-2s animate__infinite overflow-hidden`}
                  >
                    WHAT ABOUT ME?
                  </h3>
                  <p
                    className={`${roboto.variable} font-roboto text-xl text-black font-medium text-center indent-12 leading-relaxed mt-5 `}
                  >
                    As a <span className="font-bold">FULL STACK DEVELOPER</span>{" "}
                    with experience in{" "}
                    <span className="font-bold">DIGITAL MARKETING</span> and{" "}
                    <span className="font-bold">DATA MANAGEMENT</span>, I
                    constantly seek to improve my skills through practice and
                    constant updating. I believe that design is about more than
                    just making things look pretty- it's about solving problems
                    and creating intuitive, enjoyable experiences for users.
                  </p>
                  <p
                    className={`${roboto.variable} font-roboto text-xl text-black font-medium text-center indent-12 leading-relaxed mt-5 `}
                  >
                    Whether I'm working on a website, mobile app, or other
                    digital product, I bring my commitment to design excellence
                    and user-centered thinking to every project I work on. I
                    look forward to the opportunity to bring my skills and
                    passion to your next project.
                  </p>
                  <p
                    className={`${roboto.variable} font-roboto text-xl text-black font-medium text-center indent-12 leading-relaxed mt-5 `}
                  >
                    My main goal is to provide exceptional customer service,
                    exceeding their expectations in a world where technology
                    predominates. My interest in programming and digital arose
                    from observing its growth and the increasing demand for
                    professionals in this constantly evolving field.
                  </p>
                </div>
                <div className="w-full h-auto flex justify-center">
                  <Image
                    src={profileImage}
                    alt="Profile image of Yasmin Afsharinejad"
                    className="relative w-[80%] mx-auto h-auto rounded-2xl border-2 border-solid border-dark bg-light p-4 profileImage"
                  />
                </div>
              </div>
              <div className="w-full h-auto mx-auto flex flex-col justify-center pb-14">
                <div className="w-3/4 flex justify-evenly mx-auto mt-10 mb-14 py-5 rounded-lg counter">
                  <div className="flex flex-col items-center">
                    <span className="inline-block text-black text-7xl font-bold">
                      <AnimatedNumbers value={2} />+
                    </span>
                    <h2
                      className={`${cinzel.variable} font-cinzel text-3xl font-bold pt-3`}
                    >
                      Satisfied clients
                    </h2>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="inline-block text-black text-7xl font-bold">
                      <AnimatedNumbers value={2} />+
                    </span>
                    <h2
                      className={`${cinzel.variable} font-cinzel text-3xl font-bold pt-3`}
                    >
                      Projects Completed
                    </h2>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="inline-block text-black text-7xl font-bold">
                      <AnimatedNumbers value={1} />+
                    </span>
                    <h2
                      className={`${cinzel.variable} font-cinzel text-3xl font-bold pt-3`}
                    >
                      Years of Experience
                    </h2>
                  </div>
                </div>
                <h2
                  className={`${space.variable} font-space font-extrabold text-black text-5xl text-center p-5 mx-auto my-10 underline underline-offset-4 animate__animated animate__pulse animate_slower animate__delay-2s animate__infinite overflow-hidden`}
                >
                  WHAT SERVICES DO I OFFER?
                </h2>
                <ServiceCard />
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default About;
