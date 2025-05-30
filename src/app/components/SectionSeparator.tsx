import React from 'react';
import Image from 'next/image';

import bigSprite from '@/../public/sprite-big.png';
import smallSprite from '@/../public/sprite-small.png';

export type SectionSeparatorType = 1 | 2 | 3 | 4;

interface SectionSeparatorProps {
  right?: boolean;
  type?: SectionSeparatorType;
}

export default function SectionSeparator({ right = false, type = 1 }: SectionSeparatorProps) {
  let src = bigSprite;
  let rotate = '';
  if (type === 3 || type === 4) src = smallSprite;
  if (type === 2 || type === 4) rotate = 'rotate-45';

  return (
    <Image
      src={src}
      alt=""
      className={`absolute pointer-events-none select-none w-20 -top-10 md:w-30 md:-top-15 ${right ? 'md:right-10' : 'md:left-10'} motion-reduce:animate-pulse pulse-delay-0 ${rotate}`}
      aria-hidden="true"
    />
  );
}
