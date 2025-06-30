import React, { useState } from 'react';
import LayoutWrapper from '@/components/Wrapper/LayoutWrapper';
import { PodcastData } from '@/types/types';
import PodcastCalendar from './Calendar';
import AddPodcastButton from './AddPodcastButton';
import Image from 'next/image';


const UpcomingPodcastPage: React.FC = () => {
  const [podcasts, setPodcasts] = useState<PodcastData[]>([]);

  const addPodcast = (podcastData: PodcastData) => {
    // Generate a unique ID for the new podcast
    const newPodcast = { ...podcastData, id: Date.now() };
    // Update the state to add the new podcast
    setPodcasts([...podcasts, newPodcast]);
  };

  return (
    <LayoutWrapper>
      <div className="py-10">
        {/* Your other JSX code */}
        <PodcastCalendar />
        {/* Pass the addPodcast function to the AddPodcastButton component */}
        <AddPodcastButton onAddPodcast={addPodcast} />
        {/* Display submitted podcasts */}
        <div>
          {podcasts.map((podcast) => (
            <div key={podcast.id}>
              <h2>{podcast.topic}</h2>
              <p>{podcast.title}</p>
              <p>{podcast.description}</p>
              {podcast.image && <Image width={3000} height={3000} src={podcast.image} alt="Podcast" />}
              {podcast.link && <a href={podcast.link}>Listen to Podcast</a>}
            </div>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default UpcomingPodcastPage;
