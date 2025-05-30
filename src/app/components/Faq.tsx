import React from 'react';

import SectionSeparator from '@/app/components/SectionSeparator';

interface FaqProps {
  id: string;
}

const FAQS = [
  {
    q: 'Why are the celebrations happening on two different dates?',
    a: 'The civil ceremony is scheduled based on the earliest available date at the town hall. We also chose to separate the celebrations so we could take our time and prepare the main wedding day with love and care without rushing any moment.',
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
    a: "Guests are kindly asked to arrange their own transportation. For the civil ceremony, public transport is available: Métro line 9 to \"Rue de la Pompe\" station or nearby bus lines. For the main venue: There's a large private parking area available. If you need assistance with planning your trip, don't hesitate to reach out, we'll be happy to help!",
  },
  {
    q: 'Accommodation?',
    a: "If you'd like to stay late and spend the night nearby, please plan your accommodation in advance. Depending on how many guests are staying, we might organise something so please let us know on the RSVP form if you'd be interested!",
  },
];

export default function Faq({ id }: FaqProps) {
  return (
    <section
      id={id}
      className="relative flex flex-col items-center gap-3 px-5 sm:px-10 lg:px-20 xl:px-30 2xl:px-50 py-20 md:py-30"
    >
      <SectionSeparator type={4} />

      <h1 className="text-5xl lg:text-6xl mb-2 text-center">FAQ</h1>

      <p className="text-justify">
        Here are some frequently asked questions. If you have any other questions, feel free to
        reach out!
      </p>

      <ul className="mt-2 lg:mt-5 xl:mt-6 2xl:mt-7 flex flex-col gap-10 text-center max-w-7xl">
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
