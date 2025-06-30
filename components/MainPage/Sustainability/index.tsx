import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import sustainability from "@/public/images/Sustainability.png";
import { Button } from "@/components/ui/button";
import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import Link from "next/link";

export default function Sustainability() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const fullText = "Pac West is working as a surgical instruments suppliers in the USA. We design instruments with great German steel and smart designs, thus they are durable and improve performance. Each tool is thoroughly tested by our team so that we can be certain that it fits the high standards required by surgeons. Pac West tools assist health care providers in producing their best work, whether they are performing minor checkups or major surgical procedures.";

    const shortText = fullText.slice(0, 145) + "...";

    return (
        <LayoutWrapper className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
                <motion.div
                    className="xl:w-[50rem] 2xl:w-[60rem] md:w-[30rem] lg:w-[38rem]"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-7 bg-gradient-to-r from-[#008080] to-black bg-clip-text text-transparent">
                        We are trusted for Reliability & Commitment
                    </h2>

                    <div className="relative">
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 w-full text-justify">
                            {isMobile ? (isExpanded ? fullText : shortText) : fullText}
                        </p>

                        {isMobile && !isExpanded && (
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="text-[#008080] text-sm underline mb-5"
                            >
                                Read More
                            </button>
                        )}
                    </div>

                    <Link href="/about">
                        <Button className="bg-[#008080] text-white text-sm sm:text-base lg:text-lg mt-4 lg:mt-8 px-7 py-3 rounded-lg font-semibold hover:bg-black hover:text-[#008080] transition-all duration-200 shadow-md">
                            About Us &rarr;
                        </Button>
                    </Link>

                </motion.div>

                <motion.div
                    className="w-full h-full "
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={sustainability}
                        alt="Surgical Tools"
                        className="w-full h-[15rem] lg:h-[25rem] object-contain xl:ml-[7rem] md:mt-[3rem] lg:mt-0 xl:-mt-[2rem] md:ml-[4rem]"
                        priority
                    />
                </motion.div>
            </div>
        </LayoutWrapper>
    );
}
