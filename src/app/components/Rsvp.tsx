import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

import SectionSeparator from '@/app/components/SectionSeparator';

interface RsvpProps {
  id: string;
}

export default function Rsvp({ id }: RsvpProps) {
  const RSVP_FORM_URL = 'https://forms.gle/your-google-form-link'; // TODO: Replace with actual Google Form URL

  return (
    <section
      id={id}
      className="bg-light-yellow/50 relative flex flex-col items-center text-justify gap-3 px-5 sm:px-10 lg:px-20 xl:px-30 2xl:px-50 py-20 md:py-30"
    >
      <SectionSeparator right type={2} />

      <h1 className="text-5xl lg:text-6xl mb-2 text-center">RSVP</h1>

      <p>We kindly ask you to let us know if you&apos;ll be able to join our celebration.</p>

      <p>Please RSVP using the form below so we can plan for your presence.</p>

      <p>We can&apos;t wait to celebrate this special day with you!</p>

      <a
        href={RSVP_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 lg:mt-5 xl:mt-6 2xl:mt-7 px-5 py-3 inline-flex items-center gap-3 rounded-full shadow bg-dark-green text-white hover:bg-light-green focus:outline-none focus:ring focus:ring-offset-1 focus:ring-dark-brown font-semibold text-xl lg:text-2xl"
      >
        RSVP via this form
        <ArrowTopRightOnSquareIcon className="w-6 lg:w-10" aria-hidden="true" />
      </a>
    </section>
  );
}
