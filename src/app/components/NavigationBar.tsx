import React, { useState } from 'react';
import Image from 'next/image';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';

import logo from '@/../public/logo.png';

interface NavigationBarProps {
  sections: { id: string; label: string }[];
}

export default function NavigationBar({ sections }: NavigationBarProps) {
  const [open, setOpen] = useState(false);

  React.useEffect((): void => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <nav className={`sticky top-0 z-2 ${open ? 'h-screen' : ''}`}>
      {/* Mobile Bar */}
      <div className="md:hidden flex items-center justify-between px-5 py-3 bg-dark-yellow/90 backdrop-blur-xs">
        <a
          href="#"
          aria-label="Go to top"
          className="focus:outline-none focus:ring focus:ring-offset-1 focus:ring-dark-brown"
          onClick={(): void => setOpen(false)}
        >
          <Image src={logo} alt="Đạt & Trang logo" className="w-5" />
        </a>

        <button
          type="button"
          role="link"
          className="rounded text-dark-brown hover:bg-light-yellow focus:outline-none focus:ring focus:ring-dark-brown cursor-pointer"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={(): void => setOpen((open: boolean): boolean => !open)}
        >
          {open ? (
            <XMarkIcon className="w-8" aria-hidden="true" />
          ) : (
            <Bars3Icon className="w-8" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden h-full flex flex-col bg-light-yellow/80 backdrop-blur-md text-center text-xl font-title font-semibold">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block p-3 focus:outline-none hover:bg-light-green focus:bg-dark-green"
                onClick={(): void => setOpen(false)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Desktop Bar */}
      <div className="hidden md:flex items-center justify-between px-10 lg:px-11 xl:px-12 2xl:px-15 py-3 bg-dark-yellow/90 backdrop-blur-xs">
        <a
          href="#"
          aria-label="Go to top"
          className="focus:outline-none focus:ring focus:ring-offset-1 focus:ring-dark-brown"
        >
          <Image src={logo} alt="Đạt & Trang logo" className="w-10" />
        </a>

        <ul className="flex gap-1 font-title font-semibold lg:text-lg xl:text-xl 2xl:text-2xl">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="px-2 py-1 rounded hover:bg-light-yellow focus:outline-none focus:ring focus:ring-offset-1 focus:ring-dark-brown"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
