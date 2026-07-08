import React from 'react';

const JsonLd = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const HotelSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Clement Motel Hospitality & Accommodation",
    "description": "Clement Motel is a hospitality and accommodation business located in Kibuye, Rwanda, along the KIVU BELT.",
    "image": "https://clementmotel.com/images/hero_bg.jpg", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nkomero center, Kivu belt street Near Nkomero center, Musasa village",
      "addressLocality": "Kibuye",
      "addressRegion": "Western Province",
      "addressCountry": "RW"
    },
    "telephone": "0791 750 555",
    "url": "https://clementmotel.com",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "2.0"
    },
    "priceRange": "$$$",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Front desk [24-hour]", "value": true }
    ]
  };

  return <JsonLd data={schema} />;
};

export default JsonLd;
