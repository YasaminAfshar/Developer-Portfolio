import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Special_Elite, Space_Mono, Unna } from "next/font/google";
import {useState, useEffect} from "react";
import portfileImg from "../../public/images/svgs/header-img.svg";

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const special = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special",
});

const space = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space",
});

const unna = Unna({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unna",
});

export default function Home() {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() =>{

    })
  })

  return (
    <>
      <Head>
        <title>My Portfolio - Yasmin Afsharinejad</title>
        <meta
          name="description"
          content="I have created this beautiful portfolio so that you can access all the work and projects carried out in what I like most, which is programming"
        />
      </Head>
      <main className="flex text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex w-full">
            <div className="w-1/2 h-full">
              <Image
                src={portfileImg}
                alt="Image that belong to the principal page"
                className="w-[90%] h-auto mx-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center pt-10">
              <motion.p
                className={`${special.variable} font-special w-auto text-dark text-3xl banner py-2 px-4 mb-10 tracking-wider text-center font-bold rounded-md mx-auto overflow-hidden cursor-default`}
                whileHover={{ scale: [null, 1.2, 1.1] }}
                transition={{ duration: 0.2 }}
              >
                Welcome to my portfolio!
              </motion.p>
              <h1
                className={`${special.variable} font-special w-auto text-dark text-6xl text-center font-bold pt-2 my-2 mx-auto cursor-default overflow-hidden`}
              >
                I'm Yasmin Afsharinejad
              </h1>
              <h3
                className={`${space.variable} font-space text-dark text-2xl text-center font-extrabold pt-2 my-2 mx-auto cursor-default overflow-hidden`}
              >
                {`Full Stack Developer`}
                <span className="">
                  {" "}
                  with knowledge of Data Entry and Digital Marketing
                </span>
              </h3>
              <p
                className={`${unna.variable} font-unna text-dark text-center text-2xl font-medium py-2 mx-auto my-3 cursor-default overflow-hidden`}
              >
                I offer a strong guarantee of reliable and high-quality
                services, ensuring that your projects are executed with
                precision, attention to detail, and a commitment to excellence.
                Your success is my priority.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
