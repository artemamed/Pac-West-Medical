"use client";
import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

type Stat = {
    title: string;
    description: string;
    value: number;
    data: string;
};

const About: React.FC = () => {
    const heading = "Surgical Instrument suppliers in the USA";
    const subheading =
        "Pac West Surgical is one of the well-known Surgical Instruments Companies in the USA, which distributes surgical equipment both locally and internationally.";

    const stats: Stat[] = useMemo(() => [
        { title: "Years", description: "In Healthcare Innovation", value: 40, data: "Years" },
        { title: "Hospitals", description: "Trusted By 1,000+ Hospitals Worldwide", value: 1000, data: "Hospitals" },
        { title: "Distributors", description: "Global Distributors Healthcare", value: 10, data: "Distributors" },
    ], []);

    const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

    useEffect(() => {
        const intervals = stats.map((stat, index) => {
            const step = Math.ceil(stat.value / 100);
            return setInterval(() => {
                setCounts((prevCounts) => {
                    const newCounts = [...prevCounts];
                    if (newCounts[index] < stat.value) {
                        newCounts[index] = Math.min(newCounts[index] + step, stat.value);
                    }
                    return newCounts;
                });
            }, 30);
        });

        return () => {
            intervals.forEach((interval) => clearInterval(interval));
        };
    }, [stats]);

    return (
        <LayoutWrapper className="min-h-screen flex-1 lg:py-[5rem]">
            <div className="max-w-6xl">
                <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold md:text-left">
                    {heading.split(" ").map((word, index) =>
                        ["Surgical", "Healthcare"].includes(word) ? (
                            <span key={index} className="text-[#008080]">
                                {word}{" "}
                            </span>
                        ) : (
                            <span key={index}>{word} </span>
                        )
                    )}
                </h1>
                <p className="mt-4 text-[#666666] text-sm md:text-base lg:text-lg leading-7  md:text-left md:ml-auto md:w-[20rem] xl:w-[30rem]">
                    {subheading}
                </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 lg:gap-24 justify-center sm:justify-start">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center w-[10rem] ">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#008080]">
                            {counts[index]}+
                        </h2>
                        <div className="text-lg md:text-xl font-semibold">
                            {stat.data}
                        </div>
                        <div className="border-b mt-3 border-[#E0E0E0]"></div>
                        <p className="mt-3 text-sm md:text-base text-[#6D6D6D]">
                            {stat.description}
                        </p>
                    </div>
                ))}
            </div>

            <section className="flex flex-wrap items-center justify-between px-4 md:px-16 py-8 md:py-24">
                <div className="flex flex-col items-center md:w-1/3 text-center">
                    <div className="rounded-full flex items-center justify-center mt-12 xl:-mt-[3rem]">
                        <Image
                            width={300}
                            height={800}
                            src="/images/About/building2.svg"
                            alt="World Map"
                            className="w-[200px] xl:w-[350px] object-contain"
                        />
                    </div>
                    {/* <h2 className="text-2xl md:text-4xl font-semibold mt-4 text-[#004040]">1980</h2> */}
                    {/* <p className="text-[#666666] mt-4 text-sm md:text-base">
                        Company founded with the goal to revolutionize healthcare technology
                    </p> */}
                </div>

                <div className="md:w-3/6 mt-8 md:mt-0 text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        Our mission
                    </h2>
                    <p className="mt-6 text-sm md:text-base text-gray-700 text-justify  ">
                        We bring surgical equipment of the highest quality to healthcare providers in the USA to make surgical care dependable, as they have trusted equipment they can count on. We can help provide doctors and surgeons with tools that are of a global level and thus help in providing better patient outcomes.
                    </p>
                    <p className="mt-4 text-sm md:text-base text-gray-700 text-justify">
                        Our service is based on competent craftsmanship integrated with the contemporary production processes to provide the medical community with required, reliable, and reasonably priced instruments.
                    </p>
                </div>
            </section>

            {/* <section className="flex flex-wrap px-4 md:px-16 py-8  ">
                <div className="flex flex-col items-center md:w-1/3 text-center">
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#004040]">2000</h2>
                    <p className="text-[#666666] mt-4 text-sm md:text-base text-justify">
                        Company founded with the goal to revolutionize healthcare technology
                    </p>
                </div>

                <div className="md:w-2/3 flex justify-center mt-8 md:mt-0 mx-auto">
                    <Image
                        width={600}
                        height={1200}
                        src="/images/About/map.png"
                        alt="World Map"
                        className="w-[200px] md:w-[400px] xl:w-[500px] md:ml-[5rem] xl:ml-[10rem] object-contain"
                    />
                </div>
            </section> */}

            <section className="flex flex-wrap items-center justify-between px-4 md:px-16 py-8">
                <div className="flex flex-col items-center md:w-1/3 text-center mx-auto md:mx-0">
                    <div className="rounded-full flex items-center justify-center mt-12">
                        <Image
                            width={1200}
                            height={1200}
                            src="/images/About/quality1.png"
                            alt="World Map"
                            className="w-[250px] md:w-[500px] object-contain"
                        />
                    </div>
                </div>

                <div className="md:w-3/6 mt-8 md:mt-0 text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        Our vision
                    </h2>
                    <p className="mt-6 text-sm md:text-base text-gray-700 text-justify">
                        We also see a future where the booming healthcare sector in the USA has globally competitive surgical instruments produced locally, that are on a par (or better) than the imported brands. We would like to become a household brand among the surgical tools used in both the government and non-government healthcare facilities; this can be achieved by being vigilant about investments in quality control, innovation, and customer service.
                    </p>
                    <p className="mt-4 text-sm md:text-base text-gray-700 text-justify">
                        Our Quality, Honesty, and  Reliability come at the forefront of our policy of using high-end stainless steel, High Standard Quality Control, Communication, and Prompt Delivery. The point is not that we sell instruments, but that we establish partnerships with people and establish trust in relationships. We are proud to be a surgical instrument supplier in the USA.
                    </p>
                </div>
            </section>
        </LayoutWrapper>
    );
};

export default About;

