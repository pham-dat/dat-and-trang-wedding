import React from 'react';
import { MapPinIcon, ArrowTopRightOnSquareIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

import { EVENTS } from '@/app/constants';
import { formatDate } from '@/app/helpers';

import SectionSeparator from '@/app/components/SectionSeparator';

interface EventTimelineProps {
  id: string;
}

export default function EventTimeline({ id }: EventTimelineProps) {
  return (
    <section
      id={id}
      className="relative flex flex-col items-center gap-3 px-5 sm:px-10 lg:px-20 xl:px-30 2xl:px-50 py-20 md:py-30"
    >
      <SectionSeparator type={4} />

      <h1 className="text-5xl lg:text-6xl mb-2 text-center">Event Timeline</h1>

      <p className="text-justify italic max-w-7xl">
        Please note: The civil ceremony and the wedding celebration are on different dates and at
        different venues. We would be delighted if you could join us for both!
      </p>

      <div className="mt-2 lg:mt-3 xl:mt-5 2xl:mt-6 flex flex-col lg:flex-row justify-center items-center lg:items-stretch w-full gap-5 lg:gap-10 xl:gap-20 2xl:gap-30">
        {[EVENTS.civil, EVENTS.celebration].map((event) => (
          <div
            key={event.type}
            className="w-full max-w-xl bg-light-yellow shadow rounded-t-lg text-center"
          >
            <div className="bg-dark-yellow p-3 font-title font-semibold text-xl lg:text-2xl rounded-t-lg">
              {formatDate(event.date)}
            </div>

            <div className="flex flex-col items-center px-1 gap-3 py-3">
              <h2 className="font-subtitle font-semibold text-xl lg:text-2xl">{event.type}</h2>

              <div>
                <div className="inline-flex items-center justify-center gap-1">
                  <MapPinIcon className="w-5" aria-hidden="true" />
                  <span className="font-semibold">{event.venueName}</span>
                </div>

                <div>{event.venueAddress}</div>

                <a
                  href={event.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-dark-green  focus:outline-none focus:ring focus:ring-offset-1 focus:ring-dark-brown inline-flex items-center justify-center gap-1 rounded"
                >
                  View on map
                  <ArrowTopRightOnSquareIcon className="w-5" aria-hidden="true" />
                </a>
              </div>

              <ul className="mt-2">
                {event.timeline.map((item) => (
                  <li
                    key={item.time}
                    className="grid grid-cols-[1fr_5fr] gap-3 items-center justify-center"
                  >
                    <span className="font-title font-semibold text-right">{item.time}</span>

                    <span className="text-left">{item.event}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <a
        role="button"
        href="/dat-and-trang-wedding.ics"
        download
        className="mt-2 lg:mt-3 xl:mt-5 2xl:mt-6 px-5 py-3 inline-flex items-center gap-2 rounded-full shadow bg-dark-green text-white hover:bg-light-green focus:outline-none focus:ring focus:ring-offset-1 focus:ring-dark-brown font-semibold text-lg lg:text-xl"
      >
        Add to calendar
        <CalendarDaysIcon className="w-5 lg:w-6" aria-hidden="true" />
      </a>
    </section>
  );
}
