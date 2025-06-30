import React from "react";
import Link from "next/link";

const UpcomingPodcastButton: React.FC = () => {
  return (
    <Link href="/podcast/upcoming-podcast">
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white py-2 px-4 rounded md:mr-4">
          Upcoming Podcast
        </button>
      </div>
    </Link>
  );
};

export default UpcomingPodcastButton;
