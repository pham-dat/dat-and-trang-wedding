import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Playfair, Playfair_Display, Playfair_Display_SC } from 'next/font/google';

import { EVENTS } from './constants';
import { formatDate } from './helpers';

import './globals.css';

const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-be-vietnam-pro',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const playfair = Playfair({
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const playfairDisplaySc = Playfair_Display_SC({
  variable: '--font-playfair-display-sc',
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
});

export const metadata: Metadata = {
  title: "Đạt & Trang's wedding",
  description: `Join us to celebrate the wedding of Đạt & Trang on ${formatDate(EVENTS.celebration.date)}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.variable} ${playfair.variable} ${playfairDisplay.variable}  ${playfairDisplaySc.variable} antialiased bg-[url(/background-mobile.webp)] md:bg-[url(/background.webp)] bg-fixed bg-cover font-text text-dark-brown scroll-smooth selection:bg-dark-green selection:text-light-yellow lg:text-lg xl:text-xl`}
      >
        {children}
      </body>
    </html>
  );
}
