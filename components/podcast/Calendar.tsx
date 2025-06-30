"use client"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const PodcastCalendar: React.FC = () => {
  const [value] = useState(new Date());
  
  const podcastDates = [
    new Date(2024, 5, 15), // Example dates, adjust these to your actual podcast dates
    new Date(2024, 5, 22),
    new Date(2024, 5, 29),
  ];

  const isPodcastDate = (date: Date) => {
    return podcastDates.some(
      (podcastDate) =>
        date.getFullYear() === podcastDate.getFullYear() &&
        date.getMonth() === podcastDate.getMonth() &&
        date.getDate() === podcastDate.getDate()
    );
  };



  return (
    <div>
      <Calendar
        // onChange={handleCalendarChange}
        value={value}
        tileClassName={({ date, view }) => {
          if (view === 'month' && isPodcastDate(date)) {
            return 'highlight';
          }
        }}
      />
      <style jsx>{`
        .highlight {
          background: #ffce00;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default PodcastCalendar;
