import React, { useRef } from "react";
import Image from "next/image";
import { Andada_Pro, Inter } from "next/font/google";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Tooltip } from "../Tooltip";

const andadaPro = Andada_Pro({
  weight: ["600"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
});

type SkillCollection = {
  title: string;
  category: string;
  image: string;
};

export type SkillType = {
  _id: string;
  title: string;
  textShadow: string;
  design: SkillCollection[];
  code: SkillCollection[];
};

interface SkillProps {
  skill: SkillType;
  setCurrentHash: (value: string) => void;
  currentHash: string;
}

const Skill = ({ skill, setCurrentHash, currentHash }: SkillProps) => {
  const skillRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: skillRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (_latest) => {
    if (currentHash !== "#skill") {
      setCurrentHash("#skill");
    }
  });

  const titleVariants = {
    initial: { x: 70, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const titleShadowVariants = {
    initial: { x: -150, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 0.62,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const skillVariants = {
    initial: { y: 30, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delayChildren: 0.8,
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={skillRef}
      className="relative w-full px-5 md:px-12 lg:px-24 pt-14 md:pt-24 pb-3 md:pb-0 min-h-screen"
    >
      <div className="flex items-center justify-end mb-12">
        <motion.h2
          className={`${andadaPro.className} text-[80px] md:text-[140px] lg:text-[160px] leading-[0.9] md:leading-[0.8] tracking-[-8px] md:tracking-[-15px] lg:tracking-[-13px] text-[#f5f5f5] md:text-[#e2e2e2] opacity-[0] blur-[1px]`}
          variants={titleShadowVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {skill.textShadow}
        </motion.h2>
        <motion.h2
          className={`${andadaPro.className} text-[40px] md:text-[50px] absolute`}
          variants={titleVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#FFEE00]">_</span>
          {skill.title}
        </motion.h2>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap text-right md:mt-12 md:space-x-4">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <motion.h5
            className={`${inter.className} text-[18px] md:text-[20px] font-semibold`}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <span className="inline-block text-[#FFEE00]">•</span> DESIGN
          </motion.h5>
          <motion.div
            className="flex justify-end md:pt-3"
            variants={skillVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {skill.design.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={{
                  ...skillVariants,
                  whileInView: {
                    ...skillVariants.whileInView,
                    transition: {
                      ...skillVariants.whileInView.transition,
                    },
                  },
                }}
              >
                <Tooltip text={skill.title}>
                  <Image
                    className="!relative !w-[64px] md:!w-[84px] aspect-square"
                    src={skill.image}
                    alt={skill.title}
                    fill={true}
                  />
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.h5
            className={`${inter.className} text-[18px] md:text-[20px] font-semibold`}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <span className="inline-block text-[#FFEE00]">•</span> CODE
          </motion.h5>
          <motion.div
            className="flex justify-end flex-wrap md:pt-3"
            variants={{
              ...skillVariants,
              whileInView: {
                ...skillVariants.whileInView,
                transition: {
                  ...skillVariants.whileInView.transition,
                  delay: 1,
                },
              },
            }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {skill.code.map((skill, idx) => (
              <motion.div key={idx} variants={skillVariants}>
                <Tooltip text={skill.title}>
                  <Image
                    className="!relative !w-[64px] md:!w-[84px] aspect-square"
                    src={skill.image}
                    alt={skill.title}
                    fill={true}
                  />
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
