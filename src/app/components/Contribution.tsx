import React from 'react';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

import presents from '@/../public/presents.jpg';

import SectionSeparator from '@/app/components/SectionSeparator';

interface ContributionProps {
  id: string;
}

export default function Contribution({ id }: ContributionProps) {
  return (
    <section
      id={id}
      className="bg-light-yellow/50 relative flex flex-col items-center text-justify gap-3 px-5 sm:px-10 lg:px-20 xl:px-30 2xl:px-50 py-20 md:py-30"
    >
      <SectionSeparator right />

      <h1 className="text-5xl lg:text-6xl mb-2 text-center">
        We request your &quot;presents&quot;
      </h1>

      <div className="mt-2 lg:mt-5 xl:mt-6 2xl:mt-7 flex flex-col lg:flex-row items-center gap-5 lg:gap-10 xl:gap-20 2xl:gap-30">
        <Image
          src={presents}
          alt={
            "A hamster holding an invitation written &quot;We request your presents&quot; and asking a hedgehog &quot;I'm going to throw a party! How does this invitation look?&quot; The hedgehog replies, &quot;There's a typo. It's 'presence' with a 'c', not a 't'.&quot; The hamster says, &quot;But I want them to bring us presents.&quot;"
          }
          className="w-full lg:w-1/2 max-w-md"
        />

        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-3 text-justify">
            <p>Your presence at our wedding is the greatest gift of all!</p>
            <p>
              If you wish to contribute, you can do so via PayPal or via the card box at the venue.
            </p>
          </div>

          <a
            href="https://www.paypal.com/paypalme/Crocodile29292"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 lg:mt-5 xl:mt-6 2xl:mt-7 px-5 py-3 inline-flex items-center gap-3 rounded-full shadow bg-dark-green text-white hover:bg-light-green focus:outline-none focus:ring focus:ring-offset-1 focus:ring-dark-brown font-semibold text-xl lg:text-2xl"
          >
            Contribute via PayPal
            <ArrowTopRightOnSquareIcon className="w-6 lg:w-10" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
