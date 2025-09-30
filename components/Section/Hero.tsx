import React, { useState, useEffect, useRef } from "react";
import { PortableText } from "@portabletext/react";
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

type Option = {
  label: string;
  value: string;
  color?: string;
};

export type HomeType = {
  _id: string;
  title: string;
  textHero: Option[];
  textShadow: Option[];
  description: any;
  slogan: Option[];
  urlSpline: string;
};

interface HeroProps {
  setCurrentHash: (value: string) => void;
  currentHash: string;
  home: HomeType;
}

function Hero({ setCurrentHash, currentHash, home }: HeroProps) {
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
  const [quote, setQuote] = useState(home.slogan[2]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 1) {
        setSeconds(0);
        setQuote(home.slogan[seconds]);
      } else {
        setSeconds((seconds: number) => seconds + 1);
        setQuote(home.slogan[seconds]);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [quote, seconds, home.slogan]);

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
          {home.textShadow.map((textshadow, index) => (
            <motion.h1
              key={index}
              variants={{
                ...tagVariants,
                slide: {
                  ...tagVariants.slide,
                  transition: {
                    ...tagVariants.slide.transition,
                    delay: index / 2,
                  },
                },
              }}
              animate="slide"
              className={`${andadaPro.className} text-[90px] md:text-[140px] lg:text-[160px] block w-full leading-[1] md:leading-[0.8] tracking-[-10px] md:tracking-[-15px] lg:tracking-[-13px] text-[#f5f5f5] md:text-[#e2e2e2] opacity-0 blur-[1px]`}
            >
              {textshadow.label}
            </motion.h1>
          ))}
        </motion.div>
      </div>

      <div className="relative flex-1">
        <motion.h1
          className={`${andadaPro.className} text-[50px] md:text-[86px] leading-[1.2] md:leading-[1.3] mb-4 md:mb-8 opacity-0`}
          variants={titleVariants}
          animate="slide"
        >
          <span className="block">
            {home.textHero[0].label}
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
                  {quote.label}
                </motion.span>
              )}
            </AnimatePresence>
          </span>
          {home.textHero[1].label}
          <span className="inline-block text-[#FFEE00]">_</span>
        </motion.h1>

        <motion.div
          className={`${inter.className} leading-[1.7] md:leading-[1.8] w-full opacity-0`}
          variants={descriptionVariants}
          animate="slide"
        >
          <PortableText value={home.description} />
        </motion.div>
      </div>

      <motion.div
        className="hidden lg:block relative flex-1 w-[700px] h-[500px] overflow-hidden cursor-pointer"
        variants={frameVariants}
        animate="slide"
      >
        <Spline className="spline flex justify-center" scene={home.urlSpline} />
      </motion.div>
    </section>
  );
}

export default Hero;
