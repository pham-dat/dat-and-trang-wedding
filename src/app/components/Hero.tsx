import React from 'react';

import Image from 'next/image';

import { EVENTS } from '@/app/constants';
import { formatDate } from '@/app/helpers';

import saveTheDateImg from '@/../public/save-the-date.png';
import heroImg from '@/../public/hero.png';

import HeroDecorativeSprites from '@/app/components/HeroDecorativeSprites';
import Countdown from '@/app/components/Countdown';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center h-dvh gap-3 sm:gap-5 md:gap-10 lg:gap-20 xl:gap-30 2xl:gap-50 pb-15 md:pb-22"
    >
      <div className="relative flex flex-col items-center gap-1 md:gap-2 lg:gap-3 xl:gap-5 2xl:gap-6">
        <HeroDecorativeSprites />

        <Image
          src={saveTheDateImg}
          alt="Save the date!"
          className="pointer-events-none select-none z-1 w-30"
        />

        <Image
          src={heroImg}
          alt="Animated illustration of Đạt & Trang kissing"
          className="pointer-events-none select-none z-1 w-50 md:w-60 lg:w-70 xl:w-80 2xl:w-100"
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-3">
        <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-headline">
          Đạt & Trang
        </div>

        <div className="font-title text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-semibold text-dark-green">
          {formatDate(EVENTS.celebration.date)}
        </div>

        <Countdown />
      </div>
    </section>
  );
}
