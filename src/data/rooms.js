import { 
  HiOutlineWifi, 
  HiOutlineViewBoards, 
  HiOutlineShieldCheck, 
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineDesktopComputer,
  HiOutlineMap,
  HiOutlineSparkles,
  HiOutlineViewGrid,
  HiOutlineHome,
  HiOutlineLightningBolt,
  HiOutlineCheckCircle
} from 'react-icons/hi';
import { BiDrink, BiBath } from 'react-icons/bi';
import { MdOutlineLocalParking, MdOutlinePool, MdRestaurant, MdSpa, MdFitnessCenter, MdDirectionsBus } from 'react-icons/md';

export const ROOMS = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    price: '45,000 RWF',
    shortDesc: '52 m² / 560 ft² • 3 queen beds • Mountain view',
    image: '/images/deluxe1.png',
    gallery: ['/images/deluxe1.png','/images/deluxe2.png', '/images/deluxe3.png','/images/deluxe4.png'],
    features: ['Mountain view', 'Bathtub', 'Private bathroom', 'Private entrance'],
    fullDesc: 'Our Deluxe Room offers 52 m² of space with 3 queen beds, mountain views, and premium amenities like a bathtub and private entrance.',
    amenities: [
      { label: 'Bathtub', icon: BiBath },
      { label: 'Cleaning products', icon: HiOutlineSparkles },
      { label: 'Private bathroom', icon: BiBath },
      { label: 'Shower', icon: BiBath },
      { label: 'Toiletries', icon: HiOutlineSparkles },
      { label: 'Towels', icon: HiOutlineSparkles },
      { label: 'Hand sanitizer', icon: HiOutlineShieldCheck },
      { label: 'Linens', icon: HiOutlineCheckCircle },
      { label: 'Mosquito net', icon: HiOutlineShieldCheck },
      { label: 'Private entrance', icon: HiOutlineHome }
    ]
  },
  {
    id: 'single-room',
    name: 'Single Room',
    price: '25,000 RWF',
    shortDesc: '32 m² / 344 ft² • 1 single bed • Mountain view',
    image: '/images/single1.png',
    gallery: ['/images/single1.png', '/images/single1.png'],
    features: ['Mountain view', 'Shared bathroom', 'Shower', 'Socket near bed'],
    fullDesc: 'The Single Room offers 32 m² of space with 1 single bed, mountain views, and essential amenities for a comfortable stay.',
    amenities: [
      { label: 'Cleaning products', icon: HiOutlineSparkles },
      { label: 'Shared bathroom', icon: BiBath },
      { label: 'Shower', icon: BiBath },
      { label: 'Toiletries', icon: HiOutlineSparkles },
      { label: 'Towels', icon: HiOutlineSparkles },
      { label: 'Hand sanitizer', icon: HiOutlineShieldCheck },
      { label: 'Linens', icon: HiOutlineCheckCircle },
      { label: 'Mosquito net', icon: HiOutlineShieldCheck },
      { label: 'Slippers', icon: HiOutlineCheckCircle },
      { label: 'Socket near the bed', icon: HiOutlineLightningBolt }
    ]
  },
  {
    id: 'double-room',
    name: 'Double Room',
    price: '35,000 RWF',
    shortDesc: '44 m² / 474 ft² • 1 queen bed • Mountain view',
    image: '/images/double1.png',
    gallery: ['/images/double1.png', '/images/double2.png'],
    features: ['Mountain view', 'Shared bathroom', 'Shower', 'Slippers'],
    fullDesc: 'The Double Room offers 44 m² of space with 1 queen bed, mountain views, and comfortable amenities.',
    amenities: [
      { label: 'Cleaning products', icon: HiOutlineSparkles },
      { label: 'Shared bathroom', icon: BiBath },
      { label: 'Shower', icon: BiBath },
      { label: 'Toiletries', icon: HiOutlineSparkles },
      { label: 'Towels', icon: HiOutlineSparkles },
      { label: 'Hand sanitizer', icon: HiOutlineShieldCheck },
      { label: 'Linens', icon: HiOutlineCheckCircle },
      { label: 'Mosquito net', icon: HiOutlineShieldCheck },
      { label: 'Slippers', icon: HiOutlineCheckCircle },
      { label: 'Socket near the bed', icon: HiOutlineLightningBolt }
    ]
  },
  {
    id: 'king-room',
    name: 'King Room',
    price: '60,000 RWF',
    shortDesc: '66 m² / 710 ft² • 2 queen beds • Mountain view',
    image: '/images/king1.png',
    gallery: ['/images/king1.png', '/images/king2.png','/images/king3.png'],
    features: ['Mountain view', 'Bathtub', 'Private bathroom', 'Private entrance'],
    fullDesc: 'The King Room offers 66 m² of space with 2 queen beds, mountain views, and premium amenities like a bathtub and private entrance.',
    amenities: [
      { label: 'Bathtub', icon: BiBath },
      { label: 'Cleaning products', icon: HiOutlineSparkles },
      { label: 'Private bathroom', icon: BiBath },
      { label: 'Shower', icon: BiBath },
      { label: 'Toiletries', icon: HiOutlineSparkles },
      { label: 'Towels', icon: HiOutlineSparkles },
      { label: 'Hand sanitizer', icon: HiOutlineShieldCheck },
      { label: 'Linens', icon: HiOutlineCheckCircle },
      { label: 'Mosquito net', icon: HiOutlineShieldCheck },
      { label: 'Private entrance', icon: HiOutlineHome }
    ]
  }
];
