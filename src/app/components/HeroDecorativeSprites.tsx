import React from 'react';

import Image from 'next/image';

import bigSprite from '@/../public/sprite-big.png';
import smallSprite from '@/../public/sprite-small.png';

export default function HeroDecorativeSprites() {
  return (
    <>
      <Image
        id="hero-sprite-1"
        src={bigSprite}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none animate-pulse pulse-delay-2 w-1/10 top-1/5 left-1/12"
      />
      <Image
        id="hero-sprite-2"
        src={smallSprite}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none animate-pulse pulse-delay-8 w-1/5 top-1/3 -left-1/15"
      />
      <Image
        id="hero-sprite-3"
        src={bigSprite}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none animate-pulse pulse-delay-0 w-1/8 top-1/2 left-1/12 rotate-45"
      />
      <Image
        id="hero-sprite-4"
        src={smallSprite}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none animate-pulse pulse-delay-5 w-1/7 top-1/6 right-1/10 rotate-45"
      />
      <Image
        id="hero-sprite-5"
        src={bigSprite}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none animate-pulse pulse-delay-7 w-1/9 top-1/3 right-1/17"
      />
      <Image
        id="hero-sprite-6"
        src={smallSprite}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none animate-pulse pulse-delay-1 w-1/6 top-1/2 right-1/30"
      />
      <Image
        id="hero-sprite-7"
        src={bigSprite}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none animate-pulse pulse-delay-6 w-1/5 bottom-1/6 -left-1/6 rotate-45"
      />
      <Image
        id="hero-sprite-8"
        src={smallSprite}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none animate-pulse pulse-delay-3 w-1/10 bottom-1/3 -left-1/10 rotate-45"
      />
      <Image
        id="hero-sprite-9"
        src={bigSprite}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none animate-pulse pulse-delay-9 w-1/7 bottom-1/9 left-1/9"
      />
      <Image
        id="hero-sprite-10"
        src={smallSprite}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none animate-pulse pulse-delay-4 w-1/8 bottom-1/12 -right-1/11"
      />
      <Image
        id="hero-sprite-11"
        src={bigSprite}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none animate-pulse pulse-delay-5 w-1/6 bottom-1/7 right-1/18 rotate-45"
      />
      <Image
        id="hero-sprite-12"
        src={smallSprite}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none animate-pulse pulse-delay-0 w-1/9 bottom-1/3 -right-1/15 rotate-45"
      />
    </>
  );
}
