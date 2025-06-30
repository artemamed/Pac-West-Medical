"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroSection from "@/public/images/heroSection4.png";
import { useEffect, useState } from "react";
import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";

export default function HeroSection() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const fullText =
        "Pac West is a trusted global manufacturer of precision medical equipment and instruments with years of experience. We design and supply reliable healthcare solutions, including diagnostic tools, surgical instruments, and laboratory devices to hospitals, clinics, and research facilities worldwide. Our commitment to innovation and quality ensures healthcare professionals receive the most advanced, durable medical equipment to enhance patient care. Contact us today for customized medical instrument solutions.";
    const shortText = fullText.slice(0, 145) + "...";


    return (
        <LayoutWrapper>
            <section className="min-h-screen flex relative z-10 overflow-x-clip -mt-[4rem] items-center">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="text-left"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                                className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-extrabold mb-5 leading-tight tracking-tight"
                            >
                                Reliable{" "}
                                <span className="relative text-[#008080] shimmer px-1">
                                    medical instruments and suppliers
                                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#008080] opacity-10 rounded-full blur-sm pointer-events-none" />
                                </span>
                                <br />
                                <span className="text-black/80 text-xl md:text-2xl lg:text-3xl font-medium">
                                    Top Surgical Instruments Suppliers
                                </span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                                className="relative"
                            >
                                <p className="text-base sm:text-lg md:text-xl 2xl:text-xl text-gray-700 leading-7 mb-2 text-justify max-w-2xl">
                                    {isMobile ? (isExpanded ? fullText : shortText) : fullText}
                                </p>
                                {isMobile && !isExpanded && (
                                    <button
                                        onClick={() => setIsExpanded(true)}
                                        className="text-[#008080] text-sm underline hover:opacity-80 transition mb-2"
                                    >
                                        Read More
                                    </button>
                                )}
                            </motion.div>
                        </motion.div>

                        {/* Right: Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.93 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="relative w-full aspect-[4/5] md:aspect-[3/4] max-h-[600px] flex items-center justify-center"
                        >
                            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#00808022] via-white/20 to-transparent rounded-[2.5rem] blur-2xl opacity-90" />
                            <Image
                                src={heroSection}
                                alt="Surgical Tools"
                                fill
                                priority
                                className="object-cover object-center"
                            />
                        </motion.div>
                    </div>
                </div>
                <style jsx>{`
                    .shimmer {
                        position: relative;
                        overflow: hidden;
                    }
                    .shimmer::after {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: -150%;
                        width: 120%;
                        height: 100%;
                        background: linear-gradient(
                            110deg,
                            transparent 55%,
                            #fff8 65%,
                            transparent 75%
                        );
                        animation: shimmer-move 2.4s infinite;
                        pointer-events: none;
                    }
                    @keyframes shimmer-move {
                        0% {
                            left: -150%;
                        }
                        80% {
                            left: 120%;
                        }
                        100% {
                            left: 120%;
                        }
                    }
                `}</style>
            </section>
        </LayoutWrapper>
    );
}
