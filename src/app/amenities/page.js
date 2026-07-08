import React from 'react';
import Amenities from '@/components/sections/Amenities';

export const metadata = {
  title: "Amenities | Clement Motel",
  description: "Discover the hospitality services and amenities at Clement Motel.",
};

export default function AmenitiesPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Amenities />
    </div>
  );
}
