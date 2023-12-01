import React, {useState, useRef } from 'react'
import Head from 'next/head';
import Layout from '@/components/Layout';
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";
import { Economica, Rowdies, Mate_SC} from "next/font/google";
import { Button } from "@material-tailwind/react";

import EarthCanvas from '@/subComponents/Earth';

/* -------------------------- CODE FOR FONTS GOOGLE ------------------------- */

const economica = Economica({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-economica",
});

const rowdies = Rowdies({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-rowdies",
});

const mate = Mate_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mate",
});

const contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
        ...form,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);


        emailjs
        .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
            from_name: form.name,
            to_name: "Yasmin Afsharinejad",
            from_email: form.email,
            to_email: process.env.TO_EMAIL,
            message: form.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
            () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
                name: "",
                email: "",
                message: "",
            });
            },
            (error) => {
            setLoading(false);
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
            }
        );
    };

    const slideIn = (direction, type, delay, duration) => {
        return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: "easeOut",
            },
        },
        };
    };

    return (
        <>
        <Head>
            <title>My Portfolio - Contact Page</title>
            <meta
            name="description"
            content="Right now, you are on the CONTACT PAGE where you can send me a question or request an interview."
            />
        </Head>

        <main className="flex w-full flex-col items-center justify-center">
            <Layout className="pt-16 pb-20 overflow-hidden">
            <div className="xl:my-16 flex xl:flex-row flex-col-reverse gap-10 my-12 ">
                <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex-[0.8] p-10 rounded-2xl formColor"
                >
                <p
                    className={`${economica.variable} font-economica w-auto italic text-black font-extrabold text-4xl text-start tracking-wider cursor-default`}
                >
                    Get in touch
                </p>
                <h3
                    className={`${rowdies.variable} font-rowdies w-auto text-black text-7xl text-start font-medium tracking-wider cursor-default titleShadow`}
                >
                    Contact Me.
                </h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                    <span
                        className={`${mate.variable} font-mate text-black font-extrabold text-xl tracking-wide mb-4`}
                    >
                        Your name
                    </span>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="What's your name?"
                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                    />
                    </label>
                    <label className="flex flex-col">
                    <span
                        className={`${mate.variable} font-mate text-black font-extrabold text-xl tracking-wide mb-4`}
                    >
                        Your email
                    </span>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your email?"
                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                    />
                    </label>
                    <label className="flex flex-col">
                    <span
                        className={`${mate.variable} font-mate text-black font-extrabold text-xl tracking-wide mb-4`}
                    >
                        Your message
                    </span>
                    <textarea
                        rows={7}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What do you want to say?"
                        className="bg-tertiary py-4 px-6 placeholder:text-secondary resize-none text-black rounded-lg outline-none border-none font-medium"
                    />
                    </label>

                    <Button
                    size="lg"
                    variant="filled"
                    ripple={true}
                    type="submit"
                    className={`${mate.variable} font-mate inline-block mx-auto py-3 px-8 rounded-xl outline-none w-[190px] text-white text-xl tracking-wider font-bold`}
                    >
                    {loading ? "Sending..." : "Send"}
                    </Button>
                </form>
                </motion.div>

                <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
                >
                <EarthCanvas />
                </motion.div>
            </div>
            </Layout>
        </main>
        </>
    );
}

export default contact