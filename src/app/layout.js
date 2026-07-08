import { Nunito_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL('https://clementmotel.com'), // Replace with actual domain when deployed
  title: {
    default: "Clement Motel | Hospitality & Accommodation in Kibuye",
    template: "%s | Clement Motel"
  },
  description: "Clement Motel is a hospitality and accommodation business located in Kibuye, Rwanda, along the KIVU BELT. A convenient stop for business travelers and tourists.",
  keywords: ["Clement Motel", "Kibuye Motel", "Rwanda Accommodation", "RN3 Hotel", "Rusumo Border Hotel"],
  authors: [{ name: "Clement Motel team" }],
  creator: "Clement Motel",
  publisher: "Clement Motel",
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Clement Motel | Hospitality & Accommodation in Kibuye",
    description: "Clement Motel at Kibuye, Kibuye, Rwanda along KIVU BELT. Quality accommodation and restaurant services.",
    url: 'https://clementmotel.com',
    siteName: 'Clement Motel',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Clement Motel Logo',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Clement Motel | Hospitality & Accommodation in Kibuye",
    description: "Clement Motel at Kibuye, Kibuye, Rwanda along KIVU BELT.",
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import PageWrapper from "@/components/layout/PageWrapper";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      style={{ colorScheme: 'light' }}
      className={`${nunitoSans.variable} ${playfairDisplay.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full font-sans bg-white text-zinc-900 flex flex-col">
        <Navbar />
        <PageWrapper>
          {children}
        </PageWrapper>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
