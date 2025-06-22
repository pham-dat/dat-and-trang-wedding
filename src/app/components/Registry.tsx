import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

import presents from '@/../public/presents.jpg';

import SectionSeparator from '@/app/components/SectionSeparator';

interface RegistryProps {
  id: string;
}

export default function Registry({ id }: RegistryProps) {
  return (
    <section
      id={id}
      tabIndex={-1}
      className="bg-light-yellow/50 relative flex flex-col items-center text-justify gap-3 px-5 sm:px-10 lg:px-20 xl:px-30 2xl:px-50 py-20 md:py-30 focus:outline-none"
    >
      <SectionSeparator right />

      <h1 className="text-5xl lg:text-6xl mb-2 text-center">
        We request your &quot;presents&quot;
      </h1>

      <div className="mt-2 lg:mt-3 xl:mt-5 2xl:mt-6 flex flex-col lg:flex-row items-center gap-5 lg:gap-10 xl:gap-20 2xl:gap-30">
        <Image
          src={presents}
          alt={
            "A hamster holding an invitation written &quot;We request your presents&quot; and asking a hedgehog &quot;I'm going to throw a party! How does this invitation look?&quot; The hedgehog replies, &quot;There's a typo. It's 'presence' with a 'c', not a 't'.&quot; The hamster says, &quot;But I want them to bring us presents.&quot;"
          }
          className="pointer-events-none select-none w-full lg:w-1/2 max-w-md"
        />

        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-3 text-justify">
            <p>Your presence at our wedding is the greatest gift of all!</p>
            <p>
              However, if you wish to contribute, you can do so via PayPal or by card through
              Revolut using the buttons below. Alternatively, there will also be a card box at the
              venue.
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://revolut.me/trang97"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 lg:mt-3 xl:mt-5 2xl:mt-6 px-5 py-3 inline-flex items-center gap-2 rounded-full shadow bg-dark-green text-white hover:bg-light-green hover:text-dark-brown focus:outline-none focus:ring focus:ring-offset-1 focus:ring-light-green font-semibold text-lg lg:text-xl w-full justify-center"
            >
              Card (Revolut)
              <ArrowTopRightOnSquareIcon className="w-5 lg:w-6" aria-hidden="true" />
            </a>

            <a
              href="https://www.paypal.com/paypalme/Crocodile29292"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 lg:mt-3 xl:mt-5 2xl:mt-6 px-5 py-3 inline-flex  items-center gap-2 rounded-full shadow bg-dark-green text-white hover:bg-light-green hover:text-dark-brown focus:outline-none focus:ring focus:ring-offset-1 focus:ring-dark-green font-semibold text-lg lg:text-xl w-full justify-center"
            >
              PayPal
              <ArrowTopRightOnSquareIcon className="w-5 lg:w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
