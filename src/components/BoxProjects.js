import Link from "next/link";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import { GithubIcon } from "@/subComponents/Icons";
import { Economica, Merienda, Roboto } from "next/font/google";
import {motion} from "framer-motion"

const MotionLink = motion(Link);

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

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


/* ------------ MODELOS PARA LOS PROYECTOS DE FRONTEND Y BACKEND ------------ */

export const FirstProjects = ({
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
    <article className="w-full flex flex-col 2lg:flex-row items-center gap-6 rounded-3xl border border-solid border-dark bg-light boxProject p-12 mb-28 cursor-default relative">
        <div className="absolute top-1 -right-5 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark"/>
        <Carousel
            transition={{ duration: 2 }}
            className="rounded-xl w-full 2lg:w-1/2 h-max overflow-hidden"
            navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                <span
                    key={i}
                    className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-12 bg-white" : "w-6 bg-white/50"
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
            <MotionLink
                href={github}
                target="_blank"
                className="w-14 mx-8"
                floated={false}
                animate={{
                scale: [1, 1.35, 1],
                rotate: [0, 360, 0],
                }}
                transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0.2, 0.5, 0.8],
                repeat: Infinity,
                repeatDelay: 3,
                }}
            >
                <GithubIcon />
            </MotionLink>
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

export const SecondProjects = ({
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
    <article className="w-full flex flex-col 2lg:flex-row-reverse items-center gap-6 rounded-3xl border border-solid border-dark bg-light boxProject p-12 mb-28 cursor-default relative">
      <div className="absolute top-1 -right-5 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark" />
      <Carousel
        transition={{ duration: 2 }}
        className="rounded-xl w-full 2lg:w-1/2 h-max overflow-hidden"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-12 bg-white" : "w-6 bg-white/50"
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
          <MotionLink
            href={github}
            target="_blank"
            className="w-14 mx-8"
            floated={false}
            animate={{
              scale: [1, 1.35, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0.2, 0.5, 0.8],
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <GithubIcon />
          </MotionLink>
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

/* ------------- MODELO PARA LOS PROJECTOS DE DATA ENTRY (EXCEL) ------------ */

export const ThirdProjects = ({
  type,
  title,
  summary,
  img1,
  img2,
  img3,
  link,
}) => {
  return (
    <article className="w-[90%] flex flex-col items-center gap-6 rounded-3xl border border-solid border-dark bg-light boxProject p-12 mb-28 mx-auto cursor-default relative">
      <div className="absolute top-1 -right-5 -z-10 w-[101%] h-[102%] rounded-[2.5rem] bg-dark" />
      <Carousel
        transition={{ duration: 2 }}
        className="rounded-xl w-full h-max overflow-hidden"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-12 bg-white" : "w-6 bg-white/50"
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

      <div className="w-full h-auto flex flex-col items-start gap-4 1xl:gap-8 ">
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
          <Link
            href={link}
            target="_blank"
            download={true}
            className="rounded-lg bg-dark text-light p-3 px-6 text-md 1xl:text-lg font bold"
          >
            Download Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export const FourthProjects = ({ type, title, summary, img1, img2, img3, link }) => {
  return (
    <article className="w-full flex flex-col 2lg:flex-row items-center gap-6 rounded-3xl border border-solid border-dark bg-light boxProject p-12 mb-28 cursor-default relative">
      <div className="absolute top-1 -right-5 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark" />
      <Carousel
        transition={{ duration: 2 }}
        className="rounded-xl w-full 2lg:w-1/2 h-max overflow-hidden"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-12 bg-white" : "w-6 bg-white/50"
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
          <Link
            href={link}
            target="_blank"
            download={true}
            className="rounded-lg bg-dark text-light p-3 px-6 text-md 1xl:text-lg font bold"
          >
            Download Project
          </Link>
        </div>
      </div>
    </article>
  );
};
