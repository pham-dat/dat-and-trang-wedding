import React from 'react';

import SectionSeparator from '@/app/components/SectionSeparator';

interface FaqProps {
  id: string;
}

const FAQS = [
  {
    q: 'Why are the celebrations happening on two different dates?',
    a: 'The civil ceremony is scheduled based on the earliest available date at the town hall. We also chose to separate the celebrations so we could take our time and prepare the main wedding day with love and care without rushing any moment. Plus, this way, you have double chances not to miss our celebrations!',
  },
  {
    q: 'Can I bring a plus one?',
    a: "Please check your invitation. If it includes a guest, we'd love to welcome them! If you're unsure, feel free to let us know directly or via the RSVP form.",
  },
  {
    q: 'Are children welcome?',
    a: "Yes, children are more than welcome. We'd love to have them with us! Just a quick note: we don't have a babysitter available, so please plan to look after your little ones during the celebration.",
  },
  {
    q: 'Transportation and parking?',
    a: 'We kindly ask guests to arrange their own transportation. For the civil ceremony, public transportation is the best option. For the main venue, public transportation is less frequent, so private transportation or taxis are preferable. A large private parking area is available at the venue. To help protect the environment, we encourage ride sharing. After the party, please do not drive if you have been drinking. Breathalyzers will be available. If you are unable to drive, we strongly encourage you to leave your car in the parking lot and retrieve it at brunch the following day. If you need help with transportation arrangements, we are happy to assist. Please let us know by indicating this on the RSVP form.',
  },
  {
    q: 'Accommodation?',
    a: 'There are no rooms available at the venue, so please plan your accommodation nearby in advance. If you need assistance, feel free to reach out.',
  },
];

export default function Faq({ id }: FaqProps) {
  return (
    <section
      id={id}
      tabIndex={-1}
      className="relative flex flex-col items-center gap-3 px-5 sm:px-10 lg:px-20 xl:px-30 2xl:px-50 py-20 md:py-30 focus:outline-none"
    >
      <SectionSeparator type={4} />

      <h1 className="text-5xl lg:text-6xl mb-2 text-center">FAQ</h1>

      <p className="text-justify">
        Here are some frequently asked questions. If you have any other questions, feel free to
        reach out!
      </p>

      <ul className="mt-2 lg:mt-3 xl:mt-5 2xl:mt-6 flex flex-col gap-10 text-center max-w-7xl text-justify">
        {FAQS.map((faq) => (
          <li key={faq.q}>
            <p className="font-semibold">
              <span className="font-semibold font-subtitle italic">Q:</span> {faq.q}
            </p>

            <p className="mt-1">
              <span className="font-semibold font-subtitle italic">A:</span> {faq.a}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
