import React from 'react';
import RoomShowcase from '@/components/sections/RoomShowcase';
import VideoHighlight from '@/components/sections/VideoHighlight';

export const metadata = {
  title: "Rooms & Suites | Clement Motel",
  description: "Explore our collection of comfortable rooms and suites at Clement Motel in Kibuye.",
};

export default function RoomsPage() {
  return (
    <div className="pt-10 min-h-screen">
      <RoomShowcase />
      <div className="mb-10">
        <VideoHighlight />
      </div>
    </div>
  );
}
