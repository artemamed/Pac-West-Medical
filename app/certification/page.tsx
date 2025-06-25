import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import Image from "next/image";
import React from "react";

const Distributors = () => {
    return (
        <LayoutWrapper className="min-h-screen flex flex-col justify-center items-center py-6 sm:py-12 ">
            <div className="w-full max-w-screen-xl">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-10">
                    <h1 className="text-xl md:text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#004040]">
                        Certifications: A Commitment to Excellence
                    </h1>
                </div>

                {/* Certification Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mb-16 px-4">
                    {[
                        {
                            title: "ISO",
                            image: "/images/trusted/ISO.svg",
                            description:
                                "Our ISO certification demonstrates our commitment to precision and reliability in developing and distributing top-quality surgical instruments.",
                        },
                        {
                            title: "CE Mark Certification",
                            image: "/images/trusted/CE.svg",
                            description:
                                "We proudly display the CE Mark, representing full compliance with the European Union’s key health and environmental standards.",
                        },
                        {
                            title: "FDA Clearance",
                            image: "/images/trusted/FDA.svg",
                            description:
                                "We are pleased to inform our U.S. customers that our products meet the safety and efficacy criteria set by the U.S. Food and Drug Administration (FDA).",
                        },
                        {
                            title: "D-U-N-S Registered",
                            image: "/images/trusted/duns.png",
                            description:
                                "We display the D-U-N-S® Registered seal, showcasing our global credibility and commitment to transparency and trust.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center shadow-lg rounded-2xl overflow-hidden lg:h-[503px] "
                        >
                            {/* Card Image */}
                            <div className="w-full bg-[#F7F7F7] flex items-center justify-center h-[200px] py-8 lg:h-[273px] rounded-2xl">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={120}
                                    height={90}
                                    className="object-contain max-h-20 md:max-h-28 lg:w-[200px]"
                                />
                            </div>
                            {/* Card Content */}
                            <div className="p-4 flex flex-col items-start">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


                {/* ISO Certifications Section */}
                <div className="">
                    <h2 className="text-2xl lg:text-4xl font-bold text-[#2b2b2b] mb-6">
                        Our ISO Certifications
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-3xl text-justify">
                        Our ISO certifications represent our dedication to the highest levels of quality and consistency
                        across all aspects of our operations.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            "ISO/CD 6335-1",
                            "ISO/CD 6335-2",
                            "ISO 7551:1988",
                            "ISO/DIS 7151",
                            "ISO 7153-1:2016",
                            "ISO/CD 7554-1",
                            "ISO/CD 7554-2",
                            "ISO/CD 7554-3",
                            "ISO 7740:1985",
                            "ISO 7741:1986",
                            "ISO 13402:1995",
                            "ISO/DIS 13402",
                        ].map((cert, index) => (
                            <div
                                key={index}
                                className="bg-[#F7F7F7] rounded-2xl p-4 text-center text-[#666666] font-medium"
                            >
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
};

export default Distributors;
