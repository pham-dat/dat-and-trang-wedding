import React from 'react';

import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import {
  Be_Vietnam_Pro,
  Playfair,
  Playfair_Display,
  Playfair_Display_SC,
  Yellowtail,
} from 'next/font/google';

import { EVENTS } from './constants';
import { formatDate } from './helpers';

import './globals.css';

const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-be-vietnam-pro',
  weight: [
    // '100', // font-thin
    // '200', // font-extralight
    // '300', // font-light
    '400', // font-normal
    // '500', // font-medium
    '600', // font-semibold
    // '700', // font-bold
    // '800', // font-extrabold
    '900', // font-black
  ],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const playfair = Playfair({
  variable: '--font-playfair',
  weight: [
    '400', // font-normal
    // '500', // font-medium
    '600', // font-semibold
    // '700', // font-bold
    // '800', // font-extrabold
    // '900', // font-black
  ],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  weight: [
    '400', // font-normal
    // '500', // font-medium
    '600', // font-semibold
    // '700', // font-bold
    // '800', // font-extrabold
  ],
  style: [
    'normal',
    //'italic'
  ],
  subsets: ['latin'],
});

const playfairDisplaySc = Playfair_Display_SC({
  variable: '--font-playfair-display-sc',
  weight: [
    '400', // font-normal
    //'700', // font-bold
    // '900', // font-black
  ],
  style: [
    'normal',
    //'italic'
  ],
  subsets: ['latin', 'vietnamese'],
});

const yellowtail = Yellowtail({
  variable: '--font-yellowtail',
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const BODY_CLASS = [
  beVietnamPro.variable,
  playfair.variable,
  playfairDisplay.variable,
  playfairDisplaySc.variable,
  yellowtail.variable,
  'antialiased',
  'bg-[url(/background-mobile.webp)]',
  'md:bg-[url(/background.webp)]',
  'bg-fixed',
  'bg-cover',
  'font-text',
  'text-dark-brown',
  'h-full',
  'overflow-auto',
  'scroll-smooth',
  'selection:bg-dark-green',
  'selection:text-light-yellow',
  'lg:text-lg',
  'xl:text-xl',
].join(' ');

export const metadata: Metadata = {
  title: "Đạt & Trang's wedding",
  description: `Join us to celebrate the wedding of Đạt & Trang on ${formatDate(EVENTS.celebration.date)}.`,
  openGraph: {
    title: "Đạt & Trang's wedding",
    description: `Join us to celebrate the wedding of Đạt & Trang on ${formatDate(EVENTS.celebration.date)}.`,
    url: 'https://dat-and-trang-wedding.vercel.app/',
    type: 'website',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: "Đạt & Trang's wedding logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Đạt & Trang's wedding",
    description: `Join us to celebrate the wedding of Đạt & Trang on ${formatDate(EVENTS.celebration.date)}.`,
    images: ['/thumbnail.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.StrictMode>
      <html lang="en" className="h-full overflow-hidden">
        <body className={BODY_CLASS}>
          {children}
          <SpeedInsights />
        </body>
      </html>
    </React.StrictMode>
  );
}
