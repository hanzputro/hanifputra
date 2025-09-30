import React, { useRef } from "react";
import Image from "next/image";
import { Andada_Pro } from "next/font/google";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { Tooltip } from "../Tooltip";

const andadaPro = Andada_Pro({
  weight: ["600"],
  subsets: ["latin"],
});

type SocialMediaCollection = {
  title: string;
  url: string;
  image: string;
};

export interface ContactType {
  title: string;
  textShadow: string;
  description: any;
  socialMedia: SocialMediaCollection[];
}

interface ContactProps {
  contact: ContactType;
  setCurrentHash: (value: string) => void;
  currentHash: string;
}

const Contact = ({ contact, setCurrentHash, currentHash }: ContactProps) => {
  const contactRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (_latest) => {
    if (currentHash !== "#contact") {
      setCurrentHash("#contact");
    }
  });

  return (
    <section
      ref={contactRef}
      className="relative w-full px-5 md:px-12 lg:px-24 pt-14 md:pt-24 pb-3 md:pb-0 min-h-screen"
    >
      <div className="flex justify-end items-center mb-12">
        <motion.h2
          className={`${andadaPro.className} text-[80px] md:text-[140px] lg:text-[160px] leading-[0.9] md:leading-[0.8] tracking-[-10px] md:tracking-[-15px] lg:tracking-[-13px] text-[#f5f5f5] md:text-[#e2e2e2] opacity-[0] blur-[1px]`}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 0.62, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          {contact.textShadow}
        </motion.h2>
        <motion.h2
          className={`${andadaPro.className} text-[40px] md:text-[50px] absolute`}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <span className="inline-block text-[#FFEE00]">_</span>
          {contact.title}
        </motion.h2>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-end lg:space-x-4 lg:mt-12">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="lg:p-6 mb-6 lg:mb-0 w-full text-right mt-5 lg:mt-0 lg:w-2/3 order-2"
        >
          <PortableText value={contact.description} />
          <ul className="flex justify-end items-center space-x-5 mt-5 mb-5">
            {contact.socialMedia?.map((item) => {
              return (
                <li key={item.title}>
                  <a href={item.url} target="_blank">
                    <Tooltip text={item.title}>
                      <Image
                        className="relative hover:scale-[1.05] duration-100 cursor-pointer"
                        src={item.image}
                        alt={item.title}
                        width={48}
                        height={48}
                        priority
                      />
                    </Tooltip>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
