import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const TrustedUser = () => {
  const testimonials = [
    {
      stars: 5,
      text: "We’ve been working with Pac West for several years. We’ve built full open shoulder and laminectomy trays using cost-effective, high-quality tools, and our surgeons.",
      name: "Johnson Smith",
      role: "Medical Superintendent at Evercare",
      image: "/images/trusted/test1.webp",
    },
    {
      stars: 5,
      text: "I trust Pac West tools for life-saving heart procedures. The clamps never slip and the needle holders rotate perfectly. This is how surgical instruments should perform.",
      name: "Clark Anderson",
      role: "Director OPD at AHD",
      image: "/images/trusted/test2.webp",
    },
    {
      stars: 5,
      text: "Pac West is a best medical equipment suppliers for several years. Their tools are safe and highly effective. They have helped significantly in improving effective the of our services.",
      name: "Lopez Williams",
      role: "Head of Procurement",
      image: "/images/trusted/test3.jpeg",
    },
    {
      stars: 5,
      text: "As a senior doctor, I always receive positive feedback from my staff regarding the quality of their hospital equipment. They are raising the standard of healthcare to a great extent.",
      name: "Mitchell Wright",
      role: "Director OPD at AHD",
      image: "/images/trusted/test4.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };

    updateWidth(); // Set initial value
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <LayoutWrapper>
      <div className="py-12 md:py-20">
        <div className="flex flex-col space-y-8">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-4 bg-gradient-to-r from-[#008080] to-black bg-clip-text text-transparent drop-shadow">
            We are trusted by
          </h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {testimonials
              .slice(currentIndex, currentIndex + (isWideScreen ? 2 : 1))
              .map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-full max-w-md p-6 md:p-8 bg-white/80 backdrop-blur-md border border-[#00808022] rounded-2xl shadow-xl mx-2 flex flex-col justify-between
                  hover:shadow-[0_8px_32px_0_#00808022] transition-shadow duration-300"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  layout
                >
                  <div className="flex mb-4 md:p-4 ">
                    {Array.from({ length: testimonial.stars }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 md:-mt-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.374 2.453a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.539 1.118l-3.374-2.453a1 1 0 00-1.176 0l-3.374 2.453c-.783.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.605 9.383c-.783-.57-.381-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.956z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 text-sm md:text-base text-gray-700">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold text-sm md:text-base text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#008080]/10 hover:bg-[#008080]/20 transition"
              aria-label="Previous testimonial"
            >
              <MoveLeft className="w-6 h-6 text-[#008080]" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#008080]/10 hover:bg-[#008080]/20 transition"
              aria-label="Next testimonial"
            >
              <MoveRight className="w-6 h-6 text-[#008080]" />
            </button>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default TrustedUser;
