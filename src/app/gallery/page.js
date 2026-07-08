import React from 'react';
import Gallery from '@/components/sections/Gallery';

export const metadata = {
  title: "Gallery | Clement Motel Hospitality",
  description: "Explore the visual diary of Clement Motel. View our rooms, serene exteriors, and dining experiences.",
};

export default function GalleryPage() {
  return (
    <div className="pt-17 min-h-screen">
      <Gallery />
    </div>
  );
}
