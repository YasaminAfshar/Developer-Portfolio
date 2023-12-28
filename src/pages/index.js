import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import "animate.css";
import Layout from "@/components/Layout";
import HireMe from "@/subComponents/HireMe";
import TypewriterText from "@/subComponents/TypewriterEffect";
import { LinkArrow } from "@/subComponents/Icons";
import { Special_Elite, Unna, Inconsolata } from "next/font/google";
import portfileImg from "../../public/images/svgs/header-img.svg";
import Cube from "@/subComponents/Cube";


/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const special = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special",
});

const inconsolata = Inconsolata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inconsolata",
}); 

const unna = Unna({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unna",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio - Yasmin Afsharinejad</title>
        <meta
          name="description"
          content="I have created this beautiful portfolio so that you can access all the work and projects carried out in what I like most, which is programming"
        />
      </Head>
      <main className="flex items-center text-black w-full min-h-full dark:text-light">
        <Layout className="pt-0 pb-20">
          <div className="flex flex-col 1lg:flex-row justify-center 1lg:justify-between items-center w-full">
            <div className="1lg:w-1/2 h-auto overflow-hidden animate__animated animate__pulse animate__infinite	animate__slow">
              <Image
                src={portfileImg}
                alt="Image that belong to the principal page"
                className="w-[90%] h-full mx-auto"
              />
            </div>
            <div className="w-full 1lg:w-1/2 h-auto flex flex-col items-center pt-10">
              <motion.p
                className={`${special.variable} font-special w-auto text-xl 2xsm:text-3xl banner py-2 px-4 mb-10 tracking-wider text-center font-bold rounded-md mx-auto overflow-hidden cursor-default`}
                whileHover={{ scale: [null, 1.2, 1.1] }}
                transition={{ duration: 0.2 }}
              >
                Welcome to my portfolio!
              </motion.p>
              <h1
                className={`${special.variable} font-special w-auto text-2xl 2xsm:text-3xl 3sm:text-6xl 1lg:text-4xl 4lg:text-5xl 3xl:text-6xl text-center font-bold pt-2 my-2 px-2 mx-auto cursor-default overflow-hidden titleShadow`}
              >
                I'm Yasmin Afsharinejad
              </h1>
              <TypewriterText />
              <p
                className={`${unna.variable} font-unna text-center text-xl sm:text-2xl font-medium py-2 mx-auto my-8 cursor-default overflow-hidden `}
              >
                I offer a strong guarantee of reliable and high-quality
                services, ensuring that your projects are executed with
                precision, attention to detail, and a commitment to excellence.
                Your success is my priority.
              </p>
              <div className="flex self-center 1lg:self-start items-center mt-4">
                <Link
                  href="/curriculum.pdf"
                  target={"_blank"}
                  className={`${inconsolata.variable} font-inconsolata flex items-center bg-dark text-white tracking-wider py-3 px-6 rounded-lg text-xl xsm:text-2xl text-center font-semibold hover:bg-light hover:text-black border-4 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-black hover:dark:text-light hover:dark:border-light`}
                  download={true}
                >
                  Download Resume{" "}
                  <LinkArrow style={{ width: "2rem", marginLeft: "10px" }} />
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

      </main>
    </>
  );
}
