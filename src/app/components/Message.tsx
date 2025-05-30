import React from 'react';
import Image from 'next/image';

import logo from '@/../public/logo.png';

import SectionSeparator from '@/app/components/SectionSeparator';

export default function Message() {
  return (
    <div className="bg-light-yellow/50 relative flex flex-col items-center text-justify gap-3 px-5 sm:px-10 lg:px-20 xl:px-30 2xl:px-50 pt-20 pb-1">
      <SectionSeparator right type={2} />

      <h1 className="text-5xl lg:text-6xl mb-2 text-center">
        We can&apos;t wait to celebrate with you!
      </h1>

      <p>
        Thank you for being a part of our special day. We are so grateful for your love and support.
      </p>

      <p>We are excited to share this moment with you and create beautiful memories together.</p>

      <p>If you have any questions or need assistance, please feel free to reach out to us.</p>

      <p>We look forward to seeing you soon!</p>

      <p>With love,</p>
      <p>Đạt &amp; Trang</p>

      <Image
        src={logo}
        alt="Đạt & Trang logo"
        className="w-10 sm:w-11 md:w-12 lg:w-15 xl:w-16 2xl:w-17"
      />

      <footer className="mt-10 text-xs">
        &copy; {new Date().getFullYear()} Đạt & Trang. All rights reserved.
      </footer>
    </div>
  );
}
