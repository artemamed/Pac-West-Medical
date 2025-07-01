// app/category/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
import React, { useCallback } from "react";
import { getCategories } from "@/lib/api";
import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import stethoscopeImage from "@/public/images/productCategory1.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PrecisionDriven = () => {
  const router = useRouter();

  interface SubCategory {
    name: string;
    slug: string;
  }

  interface Category {
    name: string;
    slug: string;
    subCategories: SubCategory[];
  }

  const { data: categories = [], isLoading, isError, error } = useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const navigateToSpecificCategories = (category: { name: string; slug: string }) => {
    router.push(`/category/${category.slug}`);
  };

  const handleCategoryClick = useCallback(
    (subcategorySlug: string) => {
      router.push(`/sub-category/${subcategorySlug}`);
    },
    [router]
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8 w-full mx-auto lg:-mt-[10rem]">
        {/* Left Section - Text Content */}
        <div className="text-center md:text-left col-span-3 flex items-center justify-center lg:ml-[5rem] xl:ml-[10rem] px-4 sm:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center leading-10 font-semibold text-[#004040] mb-6 mt-16 sm:mt-20">
            Precision-Driven Instruments for Every Procedure
          </h1>
        </div>

        {/* Right Section - Image */}
        <motion.div
          className="relative z-50 w-[200px] h-[250px] sm:w-[300px] sm:h-[400px] lg:w-[370px] lg:h-[605px] xl:w-[470px] xl:h-[705px] mt-6 md:mt-0 col-span-1 justify-self-center md:justify-self-end lg:mt-[2rem] lg:-mb-[2rem] xl:mt-[8.5rem] -mb-[8.5rem] xl:-mb-[8.5rem] mix-blend-multiply"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={stethoscopeImage}
            alt="Stethoscope"
            fill
            className="hidden md:block object-contain  rotate-[0.142rad]"
            priority />
          <Image
            src={stethoscopeImage}
            alt="Stethoscope"
            fill
            className="block md:hidden object-contain -mt-[7rem] ml-[8.5rem]  "
            priority />
        </motion.div>
      </div>
      <LayoutWrapper className="min-h-screen flex flex-col">
        {/* Surgical Catalog */}
        <div className="p-4 sm:p-6 md:p-8 mb-12 sm:mb-16 md:mb-20 font-poppins">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6 md:mb-8 leading-tight ">
            Explore Our Complete Range of Surgical Tools
          </h2>
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div
                className="w-12 h-12 border-4 border-teal-500 border-solid rounded-full animate-spin border-t-transparent shadow-md"
                role="status"
                aria-label="Loading"
              ></div>
            </div>
          ) : isError ? (
            <div className="text-red-500">{error.message}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-14">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`
                  relative overflow-hidden flex flex-col justify-between
                  rounded-3xl shadow-xl border border-[#e0eeee] bg-white/80
                  glass-card
                  transition-all duration-300
                  hover:shadow-2xl hover:scale-[1.025] hover:border-[#008080] group
                  min-h-[250px]
                `}
                >
                  {/* Accent Bar */}
                  <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#008080] to-transparent opacity-70"></div>
                  {/* Card Main Content */}
                  <div className="px-6 pt-6 pb-4 flex-1 flex flex-col">
                    {/* Title & Arrow */}
                    <div className="flex items-center justify-between mb-3">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-[#008080]  cursor-pointer transition-all"
                        tabIndex={0}
                        title={category.name}
                        onClick={() => navigateToSpecificCategories(category)}
                      >
                        {category.name}
                      </h3>
                      <Link href={`/category/${category.slug}`} passHref>
                        <CircleArrowRight className="w-6 h-6 text-[#008080]" />
                      </Link>
                    </div>
                    {/* Subcategories as Pills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {category.subCategories.map((subCategory, idx) => (
                        <span
                          key={idx}
                          onClick={() => handleCategoryClick(subCategory.slug)}
                          className={`
    inline-flex items-center px-3 py-1
    rounded-full text-sm font-medium
    bg-[#cfe7e7]/60 text-[#008080] border border-[#00808022] 
    cursor-pointer transition-all hover:bg-[#008080] hover:text-white
    focus:outline-none
  `}
                          title={subCategory.name}
                          tabIndex={0}
                        >
                          {subCategory.name}
                        </span>

                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </LayoutWrapper>

    </div>
  );
};

export default PrecisionDriven;
