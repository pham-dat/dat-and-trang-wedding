import React from 'react';
import Image from 'next/image';

import dressCodeImg from '@/../public/dress-code.png';

import SectionSeparator from '@/app/components/SectionSeparator';

interface DressCodeProps {
  id: string;
}

export default function DressCode({ id }: DressCodeProps) {
  return (
    <section
      id={id}
      className="relative flex flex-col items-center text-justify gap-3 px-5 sm:px-10 lg:px-20 xl:px-30 2xl:px-50 py-20 md:py-30"
    >
      <SectionSeparator right type={3} />

      <h1 className="text-3xl lg:text-5xl font-bold italic mb-2 text-center">Dress Code</h1>

      <div className="mt-2 lg:mt-5 xl:mt-6 2xl:mt-7 flex flex-col md:flex-row items-center gap-5 lg:gap-10 xl:gap-20 2xl:gap-30">
        <Image
          src={dressCodeImg}
          alt="A color pattern inspired by vietnamese flower tiles"
          className="w-full max-w-xs sm:max-w-sm md:w-1/2 md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
        />

        <div className="flex flex-col gap-3 text-justify">
          <p>For our wedding, we wanted every detail to tell a story.</p>

          <p>
            Inspired by vietnamese flower tiles, our dress code is more than just a beautiful
            pattern, it&apos;s a symbol of harmony and the union of two different souls. These tiles
            remind us that love is made of many pieces. Like us, building a life together, every
            shared moment becomes something warm, colorful, and meaningful.
          </p>

          <p>
            So whether in color, pattern, or spirit, we invite you to be part of this living mosaic
            with us.
          </p>
        </div>
      </div>
    </section>
  );
}
