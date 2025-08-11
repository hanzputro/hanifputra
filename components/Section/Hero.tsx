import React, { useState, useEffect, useMemo, useRef } from "react";
import { client } from "@/sanity/lib/client";
import Spline from "@splinetool/react-spline";
import { Andada_Pro, Inter } from "next/font/google";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import "./style.css";

const andadaPro = Andada_Pro({
  weight: ["600"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

type HomeType = {
  _id: string;
  title: string;
  textHero: string[];
  textShadow: string[];
  description: string;
  slogan: string[];
  urlSpline: string;
};

interface HeroProps {
  setCurrentHash: (value: string) => void;
  currentHash: string;
}

function Hero({ setCurrentHash, currentHash }: HeroProps) {
  const [home, setHome] = useState<HomeType>();
  const [loading, setLoading] = useState(true);

  const fetchHome = async () => {
    const query = `*[_type == "home"]{
        _id,
        title,
        textHero,
        textShadow,
        description,
        slogan,
        urlSpline
      }`;
    try {
      const data = await client.fetch(query);
      setHome(data);
    } catch (error) {
      console.error("Failed to fetch:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHome();
  }, []);

  console.log("home:", home);

  const homeRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: homeRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (_latest) => {
    if (currentHash !== "") {
      setCurrentHash("");
    }
  });

  const [seconds, setSeconds] = useState(0);
  const wordArrays = useMemo(
    () => [
      {
        name: "Design",
        color:
          "linear-gradient(60deg, rgba(255,68,111,1) 0%, rgba(255,13,13,1) 100%)",
      },
      {
        name: "Codes",
        color:
          "linear-gradient(60deg, rgba(0,155,119,1) 0%, rgba(0,103,2,1) 100%)",
      },
      {
        name: "Ideas",
        color:
          "linear-gradient(60deg, rgba(68,204,255,1) 0%, rgba(0,32,250,1) 100%)",
      },
    ],
    []
  );
  const [quote, setQuote] = useState(wordArrays[2]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 1) {
        setSeconds(0);
        setQuote(wordArrays[seconds]);
      } else {
        setSeconds((seconds: number) => seconds + 1);
        setQuote(wordArrays[seconds]);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [quote, seconds, wordArrays]);

  const tagVariants = {
    slide: {
      rotateX: [90, 0],
      opacity: [0, 1],
      transition: {
        duration: 1,
        times: [0, 1],
        ease: "easeInOut",
      },
    },
  };

  const tagContainerVariants = {
    slide: {
      opacity: [1, 0.62],
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 1.9,
      },
    },
  };

  const titleVariants = {
    slide: {
      x: [15, 0],
      opacity: [0, 1],
      transition: {
        duration: 1,
        times: [0, 1],
        ease: "easeInOut",
        delay: 2.7,
      },
    },
  };

  const descriptionVariants = {
    slide: {
      x: [-15, 0],
      opacity: [0, 1],
      transition: {
        duration: 1,
        times: [0, 1],
        ease: "easeInOut",
        delay: 2.7,
      },
    },
  };

  const frameVariants = {
    slide: {
      y: [-15, 0],
      opacity: [0, 1],
      transition: {
        duration: 1,
        times: [0, 1],
        ease: "easeInOut",
        delay: 2.7,
      },
    },
  };

  return (
    <section
      ref={homeRef}
      className="relative flex justify-items-stretch justify-center items-center w-full h-screen px-5 md:px-12 lg:px-24 pb-14 md:py-24 landscape:py-[180px] landscape:md:py-24"
    >
      <div className="absolute flex justify-start items-center inset-y-0 left-0 my-auto w-full h-full mt-[-100px] landscape:mt-[10px] landscape:md:mt-[0px] md:px-0 lg:px-8 md:pt-[20px] portrait:rotate-90 portrait:md:rotate-0">
        <motion.div
          variants={tagContainerVariants}
          animate="slide"
          className="relative flex items-center justify-center content-center flex-wrap w-full h-full"
        >
          <motion.h1
            variants={tagVariants}
            animate="slide"
            className={`${andadaPro.className} text-[90px] md:text-[140px] lg:text-[160px] block w-full leading-[1] md:leading-[0.8] tracking-[-10px] md:tracking-[-15px] lg:tracking-[-13px] text-[#f5f5f5] md:text-[#e2e2e2] opacity-0 blur-[1px]`}
          >
            WEBSITE
          </motion.h1>
          <motion.h1
            variants={{
              ...tagVariants,
              slide: {
                ...tagVariants.slide,
                transition: {
                  ...tagVariants.slide.transition,
                  delay: 0.5,
                },
              },
            }}
            animate="slide"
            className={`${andadaPro.className} text-[90px] md:text-[140px] lg:text-[160px] block w-full leading-[1] md:leading-[0.8] tracking-[-10px] md:tracking-[-15px] lg:tracking-[-13px] text-[#f5f5f5] md:text-[#e2e2e2] opacity-0 blur-[1px]`}
          >
            APPLICATION
          </motion.h1>
          <motion.h1
            variants={{
              ...tagVariants,
              slide: {
                ...tagVariants.slide,
                transition: {
                  ...tagVariants.slide.transition,
                  delay: 1,
                },
              },
            }}
            animate="slide"
            className={`${andadaPro.className} text-[90px] md:text-[140px] lg:text-[160px] block w-full leading-[1] md:leading-[0.8] tracking-[-10px] md:tracking-[-15px] lg:tracking-[-13px] text-[#f5f5f5] md:text-[#e2e2e2] opacity-0 blur-[1px]`}
          >
            DEVELOPER
          </motion.h1>
        </motion.div>
      </div>

      <div className="relative flex-1">
        <motion.h1
          className={`${andadaPro.className} text-[50px] md:text-[86px] leading-[1.2] md:leading-[1.3] mb-4 md:mb-8 opacity-0`}
          variants={titleVariants}
          animate="slide"
        >
          <span className="block">
            Bring
            <AnimatePresence>
              {quote && (
                <motion.span
                  key={seconds}
                  className="absolute inline-block text-white px-3 ml-3"
                  initial={{ y: 10, opacity: 0, background: quote.color }}
                  animate={{ y: 0, opacity: 1, background: quote.color }}
                  exit={{ y: 10, opacity: 0, background: quote.color }}
                  transition={{ type: "sring" }}
                >
                  {quote.name}
                </motion.span>
              )}
            </AnimatePresence>
          </span>
          To Life<span className="inline-block text-[#FFEE00]">_</span>
        </motion.h1>

        <motion.p
          className={`${inter.className} leading-[1.7] md:leading-[1.8] w-full md:w-[80%] lg:w-full opacity-0`}
          variants={descriptionVariants}
          animate="slide"
        >
          Hi!, call me Hanif a Web App Developer. Interactive thinker, Love
          smooth transitions, and code solver. Crafting design, code, and
          interactive visualization is my passion ;)
        </motion.p>
      </div>

      <motion.div
        className="hidden lg:block relative flex-1 w-[700px] h-[500px] overflow-hidden cursor-pointer"
        variants={frameVariants}
        animate="slide"
      >
        <Spline
          className="spline flex justify-center"
          scene="https://prod.spline.design/6hifPTiDpKTAz3FH/scene.splinecode"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
