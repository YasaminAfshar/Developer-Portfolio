import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Progress
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import Tilt from "react-vanilla-tilt";
import { Merienda, Space_Mono } from "next/font/google";
import developer from "../../public/images/general/developer.png";
import data from "../../public/images/general/data.png";
import virtual from "../../public/images/general/assistant.png";
import marketing from "../../public/images/general/marketing.png";
import creator from "../../public/images/general/creator.png"

const MotionCardHeader = motion(CardHeader)

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

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


const ServiceCard = () => {
  
  return (
    <div className="mt-20">
      <h2
        className={`${space.variable} font-space font-extrabold text-black text-4xl xsm:text-5xl text-center p-5 mx-auto underline underline-offset-4 animate__animated animate__pulse animate_slower animate__delay-2s animate__infinite overflow-hidden`}
      >
        What I Offer
      </h2>
      <div className="flex justify-center flex-wrap gap-6 my-20">
        <Tilt className="tilt">
          <Card className="w-58 h-auto flex justify-center items-center shadow-inner serviceCard">
            <MotionCardHeader
              floated={false}
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
                src={developer}
                alt="Services Card"
                className="w-20 h-20"
              />
            </MotionCardHeader>
            <CardBody className="text-center pt-6">
              <Typography
                variant="h3"
                className={`${merienda.variable} font-merienda text-black font-extrabold text-2xl tracking-wider`}
              >
                Full-Stack <br />
                Developer
              </Typography>
            </CardBody>
            <CardFooter className="w-full pt-0">
              <Typography
                color="blue-gray"
                variant="h6"
                className="text-center text-black pb-4 text-lg"
              >
                70% Experience
              </Typography>
              <Progress
                value={70}
                size="lg"
                color="deep-purple"
                className="w-full border"
              />
            </CardFooter>
          </Card>
        </Tilt>

        <Tilt className="tilt">
          <Card className="w-58 h-auto flex justify-center items-center shadow-inner serviceCard">
            <MotionCardHeader
              floated={false}
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
              <Image src={creator} alt="Services Card" className="w-20 h-20" />
            </MotionCardHeader>
            <CardBody className="text-center pt-6">
              <Typography
                variant="h3"
                className={`${merienda.variable} font-merienda text-black font-extrabold text-2xl tracking-wider`}
              >
                Web
                <br />
                Creator
              </Typography>
            </CardBody>
            <CardFooter className="w-full pt-0">
              <Typography
                color="blue-gray"
                variant="h6"
                className="text-center text-black pb-4 text-lg"
              >
                75% Experience
              </Typography>
              <Progress
                value={75}
                size="lg"
                color="deep-purple"
                className="w-full border"
              />
            </CardFooter>
          </Card>
        </Tilt>

        <Tilt className="tilt">
          <Card className="w-58 h-auto flex justify-center items-center shadow-inner serviceCard">
            <MotionCardHeader
              floated={false}
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
              <Image src={virtual} alt="Services Card" className="w-20 h-20" />
            </MotionCardHeader>
            <CardBody className="text-center pt-6">
              <Typography
                variant="h3"
                className={`${merienda.variable} font-merienda text-black font-extrabold text-2xl tracking-wider`}
              >
                Virtual <br />
                Assistant
              </Typography>
            </CardBody>
            <CardFooter className="w-full pt-0">
              <Typography
                color="blue-gray"
                variant="h6"
                className="text-center text-black pb-4 text-lg"
              >
                90% Experience
              </Typography>
              <Progress
                value={90}
                size="lg"
                color="deep-purple"
                className="w-full border"
              />
            </CardFooter>
          </Card>
        </Tilt>

        <Tilt className="tilt">
          <Card className="w-58 h-auto flex justify-center items-center shadow-inner serviceCard">
            <MotionCardHeader
              floated={false}
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
              <Image src={data} alt="Services Card" className="w-20 h-20" />
            </MotionCardHeader>
            <CardBody className="text-center pt-6">
              <Typography
                variant="h3"
                className={`${merienda.variable} font-merienda text-black font-extrabold text-2xl tracking-wider`}
              >
                Data Entry <br />
                Work
              </Typography>
            </CardBody>
            <CardFooter className="w-full pt-0">
              <Typography
                color="blue-gray"
                variant="h6"
                className="text-center text-black pb-4 text-lg"
              >
                90% Experience
              </Typography>
              <Progress
                value={90}
                size="lg"
                color="deep-purple"
                className="w-full border"
              />
            </CardFooter>
          </Card>
        </Tilt>

        <Tilt className="tilt">
          <Card className="w-58 h-auto flex justify-center items-center shadow-inner serviceCard">
            <MotionCardHeader
              floated={false}
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
                src={marketing}
                alt="Services Card"
                className="w-20 h-20"
              />
            </MotionCardHeader>
            <CardBody className="text-center pt-6">
              <Typography
                variant="h3"
                className={`${merienda.variable} font-merienda text-black font-extrabold text-2xl tracking-wider`}
              >
                Digital <br />
                Marketing
              </Typography>
            </CardBody>
            <CardFooter className="w-full pt-0">
              <Typography
                color="blue-gray"
                variant="h6"
                className="text-center text-black pb-4 text-lg"
              >
                85% Experience
              </Typography>
              <Progress
                value={85}
                size="lg"
                color="deep-purple"
                className="w-full border"
              />
            </CardFooter>
          </Card>
        </Tilt>
      </div>
    </div>
  );
}

export default ServiceCard
