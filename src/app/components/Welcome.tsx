import Image from 'next/image';

import welcomeImg from '@/../public/welcome.jpg';

import SectionSeparator from '@/app/components/SectionSeparator';

interface WelcomeProps {
  id: string;
}

export default function Welcome({ id }: WelcomeProps) {
  return (
    <section
      id={id}
      className="bg-light-yellow/50 relative flex flex-col md:flex-row items-center gap-5 md:gap-10 lg:gap-20 xl:gap-30 2xl:gap-50 py-20 md:py-0"
    >
      <SectionSeparator />

      <div className="flex flex-col gap-3 px-5 sm:px-10 md:pr-0 md:pl-10 lg:pl-20 xl:pl-30 2xl:pl-50 text-justify md:py-30">
        <h1 className="text-5xl lg:text-6xl mb-2 text-center">You&apos;re invited!</h1>

        <p>
          Ours beautiful love story began with a <span className="font-black">tarte tatin</span> at
          a friend&apos;s birthday. It started unexpectedly, over a shared dessert. One glance, one
          smile...
        </p>

        <p>
          Later, under the lights and energy of a <span className="font-black">rock concert</span>,
          our eyes met again, and this time, everything around us seemed to pause.
        </p>

        <p>
          From there, we slowly got to know each other. Conversations flowed naturally,{' '}
          <span className="font-black">memes</span> were exchanged, and we found our own rhythm.
          Those chats turned into endless &quot;
          <span className="font-black">nuits blanches</span>.&quot; We walking through the quiet
          streets of <span className="font-black">Paris</span>, discovering the city and each other
          at the same time. Since then, our story has been filled with sincerity, connection, and
          joy.
        </p>

        <p>
          On <span className="font-black">2024-11-11</span>, we got engaged!{' '}
          <span className="animate-pulse">💍</span>
        </p>

        <p>
          Now, we&apos;re ready for the next chapter and so happy to share this special day with
          you.
        </p>
      </div>

      <Image
        src={welcomeImg}
        alt="Đạt & Trang in Paris at midnight"
        className="rounded-md md:rounded-none w-xs md:w-1/2 max-w-3xl"
      />
    </section>
  );
}
