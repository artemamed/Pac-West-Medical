"use client";
import { motion, AnimatePresence } from "framer-motion";
import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import React from "react";

interface Podcast {
  title: string;
  description: string;
  youtubeId: string;
  date: string;
  host: string;
  guests?: string[];
  duration?: string;
}

const podcasts: Podcast[] = [
  {
    title: "AI & The Future of Surgical Precision",
    description:
      "Saad Khan interviews Dr. Sarah Nelson about how AI, robotics, and data science are making every instrument—and every surgery—safer, faster, and more precise. From the US to Europe, discover where medtech is headed.",
    youtubeId: "v1I7aAxy0iQ",
    date: "2025-06-29",
    host: "Saad Khan",
    guests: ["Dr. Sarah Nelson"],
    duration: "42 min",
  },
  {
    title: "How Quality Instruments Save Lives",
    description: "Dr. Samir reveals why surgical tool quality is make-or-break in the OR.",
    youtubeId: "qGQ3rV4z5Ng",
    date: "2025-05-17",
    host: "Saad Khan",
    duration: "38 min",
  },
  {
    title: "The Global Future of Healthcare Procurement",
    description: "Panel with US and EU buyers: Trends, mistakes, and the future.",
    youtubeId: "E7wJTI-1dvQ",
    date: "2025-04-04",
    host: "Saad Khan",
    duration: "51 min",
  },
  {
    title: "Innovations in Medical Device Supply",
    description: "Saad Khan breaks down the tech and logistics trends reshaping the industry.",
    youtubeId: "gC-0LJxE1UQ",
    date: "2025-03-15",
    host: "Saad Khan",
    duration: "29 min",
  },
  {
    title: "How Quality Instruments Save Lives",
    description: "Dr. Samir reveals why surgical tool quality is make-or-break in the OR.",
    youtubeId: "qGQf3rV4z5Ng",
    date: "2025-05-17",
    host: "Saad Khan",
    duration: "38 min",
  },
  {
    title: "The Global Future of Healthcare Procurement",
    description: "Panel with US and EU buyers: Trends, mistakes, and the future.",
    youtubeId: "E7wJfTdI-1dvQ",
    date: "2025-04-04",
    host: "Saad Khan",
    duration: "51 min",
  },
  {
    title: "Innovations in Medical Device Supply",
    description: "Saad Khan breaks down the tech and logistics trends reshaping the industry.",
    youtubeId: "gC-0LJxEs1UQ",
    date: "2025-03-15",
    host: "Saad Khan",
    duration: "29 min",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.10 + i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  }),
};

function formatDisplayDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

// Clamp description to 4 lines for clean layout
const clampDesc =
  "line-clamp-4 sm:line-clamp-4 md:line-clamp-5 xl:line-clamp-6 overflow-hidden";

const keywords = [
  "podcasts",
  "healthcare podcast",
  "energy podcast",
  "upcoming podcast",
  "medical podcast",
  "healthcare innovation",
  "podcast system",
  "business podcast",
  "sustainable business",
  "medtech podcast",
  "hospital podcast",
  "business empowerment",
  "industry insights",
];

const PodcastPage: React.FC = () => {
  const sortedPodcasts = [...podcasts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <LayoutWrapper className="pt-0 pb-24 min-h-screen">
      {/* Animated Hero */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full py-16 md:py-20 flex flex-col items-center justify-center overflow-hidden rounded-3xl"
      >
        {/* BG Gradient Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 1.2 }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <div className="w-full h-full bg-gradient-to-tr from-[#00808011] via-[#00808033] to-transparent animate-pulse" />
        </motion.div>
        <div className="relative z-10 max-w-5xl text-center px-3">
          <motion.h1
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            className="text-4xl md:text-5xl font-black text-[#008080] mb-2 tracking-tight"
          >
            Welcome to the Pac West channel 
          </motion.h1>
          <motion.h2
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-black font-semibold mb-3"
          >
          </motion.h2>
          <motion.h3
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="text-lg md:text-xl text-[#008080] font-semibold mb-6"
          >
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="text-gray-700 text-base md:text-lg leading-relaxed"
          >
            Our videos are small in size and high quality, and they discuss surgical instruments, medical equipment, and medical processes.
            We aim to provide current and valid knowledge to medical students, professionals, and healthcare suppliers.  Keep yourself entertained by learning about visual instructions, tutorials, and fast facts empowered by reliable medical sources.
          </motion.p>
        </div>
        {/* Keyword area */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="relative z-10 mt-8 flex flex-wrap justify-center gap-2 px-2"
        >
          {keywords.map((kw) => (
            <span
              key={kw}
              className="bg-[#00808011] text-[#008080] border border-[#00808030] rounded-xl px-3 py-1 text-xs font-medium m-1 transition-all hover:bg-[#00808022]"
            >
              {kw}
            </span>
          ))}
        </motion.div>
      </motion.section>

      {/* Podcast Grid */}
      <div className="max-w-7xl mx-auto px-2 md:px-4 mt-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9">
          <AnimatePresence>
            {sortedPodcasts.map((podcast, i) => (
              <motion.div
                key={podcast.youtubeId}
                custom={i}
                initial="hidden"
                whileInView="show"
                exit="hidden"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className="group bg-[#f7f7f7] border border-[#00808020] rounded-2xl shadow-[0_4px_24px_0_rgba(0,128,128,0.08)] overflow-hidden flex flex-col min-h-[350px] max-h-[500px] transition-all duration-200 hover:scale-[1.025] hover:shadow-[0_6px_40px_0_rgba(0,128,128,0.12)]"
              >
                {/* Video */}
                <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200">
                  <iframe
                    src={`https://www.youtube.com/embed/${podcast.youtubeId}`}
                    title={podcast.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-t-2xl"
                    loading="lazy"
                  />
                </div>
                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <a
                    href={`https://www.youtube.com/watch?v=${podcast.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none group"
                  >
                    <h4 className="text-lg font-bold text-[#008080] mb-2 transition-colors duration-150 group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                      {podcast.title}
                    </h4>
                  </a>
                  <p className={`${clampDesc} text-gray-700 text-sm mb-3 flex-1`}>
                    {podcast.description}
                  </p>
                  <div className="flex flex-row items-center justify-between mt-auto">
                    <span className="text-xs text-[#008080] font-semibold">
                      Host: {podcast.host}
                    </span>
                    <span className="text-xs text-gray-400 ml-2">{formatDisplayDate(podcast.date)}</span>
                    {podcast.duration && (
                      <span className="text-xs text-gray-500 ml-3">{podcast.duration}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default PodcastPage;
