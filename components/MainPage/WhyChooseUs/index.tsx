import { CircleDollarSign, Leaf, Microscope } from "lucide-react";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#004040] p-4 md:p-8 lg:p-12 xl:p-16 text-white transition-all duration-300 mt-[6rem]">
      <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-6 md:mb-10 animate-fade-in text-center">
        Why Choose Pac West?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 ">
        {[
          {
            icon: (
              <CircleDollarSign className="w-8 md:w-10 xl:w-12 md:h-8 lg:h-10 -mb-2" />
            ),
            title: "20 years of Reliable Experience",
            description:
              "Having 20 years of experience in mastering medical instruments, we provide tools that are used by surgeons every day.",
          },
          {
            icon: (
              <Microscope className="w-8 md:w-10 xl:w-12 lg:h-10 md:h-8 -mb-2" />
            ),
            title: "Cost-Smart Solutions",
            description:
              "We design durable equipment that performs without straining your for budget.",
          },
          {
            icon: <Leaf className="w-8 md:w-10 xl:w-12 lg:h-10 md:h-8 -mb-2" />,
            title: "Your Guaranteed Satisfaction",
            description:
              "Our medical professionals and team work together to solve your specific challenges.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-teal-800 rounded-xl 
                     p-6 md:p-8 xl:p-10
                     shadow-lg border border-gray-400 hover:border-teal-400
                     transform hover:-translate-y-2 transition-all duration-300
                     hover:bg-teal-700 group cursor-pointer
                     min-h-[250px] lg:min-h-[300px]"
          >
            <div className="text-3xl md:text-4xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg md:text-xl xl:text-2xl font-semibold mb-1 group-hover:text-teal-300 ">
              {item.title}
            </h3>
            <p className="text-gray-200 leading-relaxed text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
