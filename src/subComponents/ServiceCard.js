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
import { Merienda } from "next/font/google";
import developer from "../../public/images/general/developer.png";
import data from "../../public/images/general/data.png";
import virtual from "../../public/images/general/assistant.png";
import marketing from "../../public/images/general/marketing.png";

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const merienda = Merienda({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-merienda",
});

const ServiceCard = () => {
  
  return (
    <div className="flex justify-center gap-14 mt-10">
      
      <Card className="w-48 h-auto flex justify-center items-center serviceCard">
        <CardHeader floated={false} className="h-auto">
          <Image src={developer} alt="Services Card" className="w-20 h-20" />
        </CardHeader>
        <CardBody className="text-center pt-6">
          <Typography
            variant="h3"
            className={`${merienda.variable} font-merienda text-black font-extrabold text-xl tracking-wider`}
          >
            Full-Stack Developer
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
      
      <Card className="w-48 h-auto flex justify-center items-center serviceCard">
        <CardHeader floated={false} className="h-auto">
          <Image src={virtual} alt="Services Card" className="w-20 h-20" />
        </CardHeader>
        <CardBody className="text-center pt-6">
          <Typography
            variant="h3"
            className={`${merienda.variable} font-merienda text-black font-extrabold text-xl tracking-wider`}
          >
            Virtual Assistant
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

      <Card className="w-48 h-auto flex justify-center items-center serviceCard">
        <CardHeader floated={false} className="h-auto">
          <Image src={data} alt="Services Card" className="w-20 h-20" />
        </CardHeader>
        <CardBody className="text-center pt-6">
          <Typography
            variant="h3"
            className={`${merienda.variable} font-merienda text-black font-extrabold text-xl tracking-wider`}
          >
            Data Entry Work
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

      <Card className="w-48 h-auto flex justify-center items-center serviceCard">
        <CardHeader floated={false} className="h-auto">
          <Image src={marketing} alt="Services Card" className="w-20 h-20" />
        </CardHeader>
        <CardBody className="text-center pt-6">
          <Typography
            variant="h3"
            className={`${merienda.variable} font-merienda text-black font-extrabold text-xl tracking-wider`}
          >
            Digital Marketing
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
    </div>
  );
}

export default ServiceCard
