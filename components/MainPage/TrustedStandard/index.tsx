"use client";

import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const trusted = [
  {
    title: "CE Certified",
    imageUrl: "/images/trusted/CE.svg",
  },
  {
    title: "FDA Approved",
    imageUrl: "/images/trusted/FDA.svg",
  },
  {
    title: "ISO Standard",
    imageUrl: "/images/trusted/ISO.svg",
  },
];

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2 + i * 0.12, duration: 0.5, type: "spring", stiffness: 200 },
  }),
};

const TrustedStandard = () => {
  return (
    <LayoutWrapper className="md:pt-[5rem] md:pb-[7rem]">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-10 text-black tracking-tight"
      >
        <span className="bg-gradient-to-r from-[#008080] to-black bg-clip-text text-transparent">
          Trusted by Global Health Standards
        </span>
      </motion.h2>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-6xl items-center">
          {trusted.map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/80 border border-[#00808022] rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200 group"
              whileHover={{
                scale: 1.06,
                boxShadow: "0 4px 24px 0 #00808033",
              }}
            >
              <Image
                width={120}
                height={120}
                src={product.imageUrl}
                alt={product.title}
                className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] object-contain mb-2"
              />
              <span className="text-xs md:text-sm text-black/70 mt-1 text-center">{product.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default TrustedStandard;
