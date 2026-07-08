import React from 'react';
import AboutUs from '@/components/sections/AboutUs';
import VideoHighlight from '@/components/sections/VideoHighlight';

export const metadata = {
  title: "About Us | Clement Motel",
  description: "Learn more about the history and hospitality of Clement Motel in Kibuye, Kibuye.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen mb-10">
      <AboutUs />
      <VideoHighlight />
    </div>
  );
}
