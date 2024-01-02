import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Progress,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import Tilt from "react-vanilla-tilt";
import { Merienda, Space_Mono } from "next/font/google";

import developer from "../../public/images/general/developer.webp";
import data from "../../public/images/general/data.webp";
import virtual from "../../public/images/general/assistant.webp";
import marketing from "../../public/images/general/marketing.webp";
import creator from "../../public/images/general/creator.webp";

const MotionCardHeader = motion(CardHeader);

const merienda = Merienda({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-merienda",
});

const space = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space",
});

const serviceData = [
  {
    image: developer,
    title: "Full-Stack Developer",
    experience: 70,
  },
  {
    image: creator,
    title: "Website Creator",
    experience: 75,
  },
  {
    image: virtual,
    title: "Virtual Assistant",
    experience: 90,
  },
  {
    image: data,
    title: "Data Entry Work",
    experience: 90,
  },
  {
    image: marketing,
    title: "Digital Marketing",
    experience: 85,
  },
];

const ServiceCard = () => {
  return (
    <div className="mt-20">
      <h2
        className={`${space.variable} font-space font-extrabold text-black dark:text-light text-3xl x2sm:text-5xl text-center p-5 mx-auto underline underline-offset-4 animate__animated animate__pulse animate_slower animate__delay-2s animate__infinite overflow-hidden`}
      >
        What I Offer
      </h2>
      <div className="flex justify-center flex-wrap gap-6 my-20">
        {serviceData.map((service, index) => (
          <Tilt key={index} className="tilt">
            <Card className="w-58 h-auto flex justify-center items-center shadow-inner serviceCard">
              <MotionCardHeader
                className="h-auto my-5"
                animate={{
                  scale: [1, 1.5, 1.5, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <Image
                  src={service.image}
                  alt="Services Card"
                  className="w-20 h-20"
                />
              </MotionCardHeader>
              <CardBody className="text-center pt-6">
                <Typography
                  variant="h3"
                  className={`${merienda.variable} font-merienda text-black font-extrabold text-2xl tracking-wider`}
                >
                  {service.title}
                </Typography>
              </CardBody>
              <CardFooter className="w-full pt-0">
                <Typography
                  color="blue-gray"
                  variant="h6"
                  className="text-center text-black pb-4 text-lg"
                >
                  {`${service.experience}% Experience`}
                </Typography>
                <Progress
                  value={service.experience}
                  size="lg"
                  color="deep-purple"
                  className="w-full border"
                />
              </CardFooter>
            </Card>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
