"use client";
import React, { useState } from 'react';
import PodcastCalendar from '@/components/podcast/Calendar';
import AddPodcastButton from '@/components/podcast/AddPodcastButton';
import LayoutWrapper from '@/components/Wrapper/LayoutWrapper';
import { PodcastData } from '@/types/types';
import Image from 'next/image';

const UpcomingPodcastPage: React.FC = () => {
  const [podcasts, setPodcasts] = useState<PodcastData[]>([]);
  const title = "Upcoming Podcast";
  const description = "Stay tuned for more details about our upcoming podcasts. Check out the calendar below for availability.";

  const addPodcast = (podcastData: PodcastData) => {
    // Update the state with the new podcast data
    setPodcasts([...podcasts, podcastData]);
  };

  return (
    <LayoutWrapper>
      <div className="py-10">
        <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
        <div className="mt-10 mb-5">
          <h2 className="md:text-3xl mb-3 mt-5 font-bold ">Patient Safety</h2>
          <div className="md:flex flex-col md:flex-row md:justify-between">
            <div className="md:w-1/2 md:pr-4">
              <span className="font-bold md:text-xl ">Topic: </span>
              <p className="md:text-lg ">
                {" "}
                “John Ervin, Lean & Patient Safety in the Operating Room by
                Mark Graban”{" "}
              </p>
              <span className="font-bold md:text-xl ">Title: </span>
              <p className="md:text-lg text-justify">
                {" "}
                In this episode, John Ervin explores the holistic nature of
                Lean principles, highlighting their focus on not just
                optimizing processes, but also prioritizing the well-being and
                engagement of people within organizations.
              </p>
              <span className="font-bold md:text-xl  ">
                Podcast Link:{" "}
              </span>{" "}
              <br />
              <a href="https://www.leanblog.org/2015/02/podcast-215-john-ervin-lean-patient-safety-in-the-operating-room/" className="md:text-lg text-blue-700">
                <u className="text-md ">
                  {" "}
                  https://www.leanblog.org/2015/02/podcast-215-john-ervin-lean-patient-safety-in-the-operating-room/
                </u>{" "}
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* Render submitted podcasts */}
        {podcasts.map((podcast, index) => (
          <div key={index}>
            <h2 className="md:text-3xl mb-3 mt-5 font-bold">{podcast.topic}</h2>
            <div className="md:flex flex-col md:flex-row md:justify-between">
              <div className="md:w-1/2 md:pr-4">
                <span className="font-bold md:text-xl">Title: </span>
                <p className="md:text-lg text-justify">{podcast.title}</p>
                <span className="font-bold md:text-xl">Description: </span>
                <p className="md:text-lg text-justify">{podcast.description}</p>
                {podcast.image && <Image width={3000} height={3000} src="/images/lean.png" alt="Podcast" />}
                {podcast.link && (
                  <a href={podcast.link} className="md:text-lg text-blue-700">
                    Listen to Podcast
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        <br />
        <br />
        <p className="text-lg mb-8"><strong>{description}</strong></p>
        <PodcastCalendar />
        <br />
        <AddPodcastButton onAddPodcast={addPodcast} />
      </div>
    </LayoutWrapper>
  );
};

export default UpcomingPodcastPage;
