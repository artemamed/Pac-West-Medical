"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductSlider from "./ProductSlider";
import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";

const categories = [
  "General Instruments",
  "Orthopedic Instruments",
  "Dental Instruments",
  "ENT Instruments",
  "Cardiovascular",
  "Gynaecology Tools",
];

// Animation configs: NO y, only opacity (no scroll jump)
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const MedicalEquipment: React.FC = () => {
  return (
    <LayoutWrapper>
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="mb-10 sm:mb-14"
      >
        <motion.h2
          variants={fadeIn}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-7 leading-tight text-[#111] tracking-tight"
        >
          <span className="bg-gradient-to-r from-[#008080] to-black bg-clip-text text-transparent">
            Locate the Optimal Surgery Instruments
          </span>
          <br className="hidden sm:block" />
          <span className="font-normal text-black/80">
            {" "}to Give You the Best
          </span>
        </motion.h2>

        <motion.p
          variants={fadeIn}
          className="text-[#444] text-base sm:text-lg max-w-2xl text-justify mb-2"
        >
          We hold a wide variety of surgical instruments with dedication to quality, which includes surgical forceps, scalpels, needle holders, and retractors, among many others.
        </motion.p>

        {/* Button Grid */}
        <motion.div variants={fadeIn} className="mt-7 sm:mt-10">
          <motion.div
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6"
          >
            {categories.map((category) => {
              const slug = encodeURIComponent(category.toLowerCase().replace(/\s+/g, "-"));

              return (
                <motion.div
                  key={category}
                  variants={fadeIn}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <Link href={`/category/${slug}`} passHref>
                    <button
                      className="w-full py-2 px-3 sm:px-4 bg-white border border-[#008080] text-[#008080] hover:bg-[#008080] hover:text-white font-semibold rounded-lg shadow-sm transition-all duration-200"
                    >
                      {category}
                    </button>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeIn} className="mt-7 sm:mt-10">
            <Link
              href="/category"
              className="inline-flex items-center text-[#008080] hover:text-black font-semibold tracking-wide group transition-all duration-200 text-base"
            >
              Discover All
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Slider: only fade in, no scroll movement */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <ProductSlider />
      </motion.div>
    </LayoutWrapper>
  );
};

export default MedicalEquipment;
