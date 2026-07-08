import React from 'react';
import Image from 'next/image';
import { 
  HiOutlineShieldCheck, 
  HiOutlineWifi, 
  HiOutlineOfficeBuilding,
  HiOutlineViewGrid,
  HiOutlineSparkles,
  HiOutlineHome,
  HiOutlineLockClosed,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle
} from 'react-icons/hi';
import { 
  MdOutlineSecurity,
  MdOutlineKitchen,
  MdOutlineBathtub,
  MdOutlineLocalParking
} from 'react-icons/md';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image Grid */}
        <div className="relative h-[450px] md:h-[600px]">
          <div className="absolute top-0 left-0 w-[85%] h-[75%] rounded-sm overflow-hidden shadow-2xl z-10 group">
            <Image
              src="/images/image9.png"
              alt="Hotel Interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[65%] h-[60%] rounded-sm overflow-hidden shadow-lg border-12 border-white dark:border-zinc-900 z-20 group">
            <Image
              src="/images/image3.png"
              alt="Hotel Service"
              fill
              sizes="(max-width: 768px) 70vw, 40vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:pl-10">
          <SectionHeading
            subtitle="A Haven of Exceptional Hospitality"
            title="Discover the Tranquil Beauty of Kibuye"
          />
          <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed mb-8">
            Nestled on the picturesque shores of Lake Kivu in Rwanda, CLEMENT MOTEL is a haven of exceptional hospitality. Experience an unforgettable stay where comfort meets nature. Located in Kibuye, Rwanda, our motel treats guests to a delightful array of entertainment, sports, and convenience facilities.
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed mb-12">
            Our building provides 34 luxury rooms and 10 fully equipped apartments. Whether you're in the mood for a relaxing evening or a lively night out, this motel has got you covered with a beautiful garden, professional service, and stunning views of the surrounding landscape.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-zinc-100 dark:border-zinc-800 mb-12 text-zinc-500">
            <div>
              <span className="block font-serif text-3xl text-accent mb-2">34</span>
              <span className="text-[10px] capitalize tracking-widest font-bold text-zinc-400">Luxury Rooms</span>
            </div>
            <div>
              <span className="block font-serif text-3xl text-accent mb-2">10</span>
              <span className="text-[10px] capitalize tracking-widest font-bold text-zinc-400">Full Apartments</span>
            </div>
            <div>
              <span className="block font-serif text-3xl text-accent mb-2">4G</span>
              <span className="text-[10px] capitalize tracking-widest font-bold text-zinc-400">FAST WIFI</span>
            </div>
            <div>
              <span className="block font-serif text-3xl text-accent mb-2">24/7</span>
              <span className="text-[10px] capitalize tracking-widest font-bold text-zinc-400">On-site Security</span>
            </div>
          </div>

          <Button variant="outline">Learn More About Us</Button>


        </div>

      </div>
      {/* Second Story Row: Text Left, Image Right */}
      <div className="container mx-auto px-6 mt-24 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content Left */}
          <div className="lg:pr-10 order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-serif text-zinc-900 dark:text-white mb-6">
              Closest <span className="text-accent italic">Landmarks & Airports</span>
            </h3>
            <div className="space-y-6 text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
              <p>
                Convenient Transportation from the Nearest Airports. Traveling from Kigali to Kibuye takes approximately 3 hours by car. Kamembe International Airport (KME) is also approximately 2 hours away from Kibuye.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-900 dark:text-white font-bold text-sm uppercase tracking-wider">Goma International Airport</span>
                  <span className="text-accent">28.4 km</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-900 dark:text-white font-bold text-sm uppercase tracking-wider">Kamembe Airport</span>
                  <span className="text-accent">79.3 km</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-900 dark:text-white font-bold text-sm uppercase tracking-wider">Kisoro Airport</span>
                  <span className="text-accent">79.7 km</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-900 dark:text-white font-bold text-sm uppercase tracking-wider">Kigali International Airport</span>
                  <span className="text-accent">88.5 km</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-900 dark:text-white font-bold text-sm uppercase tracking-wider">Kihihi Airport</span>
                  <span className="text-accent">136.5 km</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Right */}
          <div className="relative h-[400px] md:h-[500px] order-1 lg:order-2 group">
            <div className="absolute -inset-4 bg-accent/5  rounded-lg lg:translate-x-8 lg:translate-y-8 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/images/real_about_image.png"
                alt="Luxury Hotel Atmosphere"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-transform duration-1000 rounded-lg group-hover:scale-105"
              />
            </div>
            {/* Elegant detail */}
          </div>
        </div>
      </div>

      {/* Third Story Row: Infrastructure & Excellence */}
      <div className="bg-zinc-50 dark:bg-zinc-900/50 py-24 mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h3 className="text-3xl md:text-5xl font-serif text-zinc-900 dark:text-white mb-8">
               <span className="text-accent italic">Infrastructure & Excellence</span>
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
              Every corner of Clement Motel is designed for comfort and accessibility. We provide a hospitality
              experience that serves both local and international travelers with excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Vibrant Entertainment',
                icon: <HiOutlineSparkles />,
                desc: 'Guests are treated to a delightful array of entertainment facilities. Sip on your favorite beverage while taking in the breathtaking views of the surrounding garden from our lively bar.'
              },
              {
                title: 'Active Getaway',
                icon: <MdOutlineSecurity />,
                desc: 'Experience an active getaway at our sports facilities! Enjoy water sports like fishing and canoeing, or stay grounded with our beautiful hiking trails.'
              },
              {
                title: 'Convenience Facilities',
                icon: <HiOutlineWifi />,
                desc: 'Stay completely relaxed with our comprehensive convenience services including professional laundry service, daily housekeeping, and complimentary Wi-Fi in all areas.'
              },
              {
                title: 'Hassle-free Transport',
                icon: <MdOutlineLocalParking />,
                desc: 'Convenient and hassle-free transport facilities! We offer a dedicated tour desk, secure parking, reliable shuttle service, and a complete ticket service.'
              },
              {
                title: 'Culinary Delights',
                icon: <MdOutlineKitchen />,
                desc: 'Indulge in culinary delights at CLEMENT MOTEL\'s restaurant where we prepare exceptional meals tailored exactly to your unique tastes.'
              },
              {
                title: 'Exceptional Hospitality',
                icon: <HiOutlineHome />,
                desc: 'A true haven of exceptional hospitality where our highly trained staff is dedicated to ensuring your comfort during your stay in Kibuye.'
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl transition-all duration-500">
                <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center text-accent text-3xl mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">{item.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESTORED: Security & Comfort Row (Image Left) - NOW LAST */}
      <div className="container mx-auto px-6 py-24 border-t border-zinc-100 dark:border-zinc-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[500px]">
             <Image
                src="/images/image11.png"
                alt="Hotel Security and Comfort"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-800 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-2xl">
                    <MdOutlineSecurity />
                  </div>
                  <div>
                    <div className="text-zinc-900 dark:text-white font-bold">24/7 Security</div>
                    <div className="text-zinc-500 text-sm italic">CCTV & Guarded Premises</div>
                  </div>
                </div>
              </div>
          </div>

          <div className="lg:pl-10">
            <h3 className="text-3xl md:text-4xl font-serif text-zinc-900 dark:text-white mb-8">
              Engineered For <span className="text-accent italic">Comfort & Safety</span>
            </h3>
            <div className="space-y-8">
              {[
                { title: 'Interior Design', icon: <MdOutlineBathtub />, desc: 'State-of-the-art wall-to-wall tiling and spacious pathways for easy internal access.' },
                { title: 'Digital Lifestyle', icon: <HiOutlineWifi />, desc: 'Seamless 4G wireless connectivity throughout the building and TV sets in every room.' },
                { title: 'Fully Equipped', icon: <MdOutlineKitchen />, desc: 'Apartments feature sitting rooms, U-kitchen cabinets, and laundry services.' },
                { title: 'Secure Parking', icon: <MdOutlineLocalParking />, desc: 'Ample private parking space for all residents and guests with 24/7 surveillance.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-accent text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-zinc-900 dark:text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
