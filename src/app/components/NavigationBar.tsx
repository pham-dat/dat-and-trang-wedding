import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';

import logo from '@/../public/logo.png';

interface NavigationBarProps {
  sections: { id: string; label: string }[];
}

// TODO: Focus on the first link when opening the mobile dropdown and keyboard navigation

export default function NavigationBar({ sections }: NavigationBarProps) {
  const [open, setOpen] = useState(false);

  useEffect((): void => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [open]);

  // Focus the section after navigation
  function focusSectionById(id: string) {
    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.focus();
      }
    }, 0);
  }

  return (
    <nav className={`sticky top-0 z-2 ${open ? 'h-screen' : ''}`}>
      {/* Mobile Bar */}
      <div className="md:hidden flex items-center justify-between px-5 py-3 bg-dark-yellow/90 backdrop-blur-xs">
        <Link
          href=""
          aria-label="Go to top"
          className=" w-6 rounded focus:outline-none focus:ring focus:ring-offset-1"
          onClick={() => {
            setOpen(false);
          }}
        >
          <Image src={logo} alt="Đạt & Trang logo" className="pointer-events-none select-none" />
        </Link>

        <button
          type="button"
          role="link"
          className="w-10 rounded text-dark-brown hover:bg-light-yellow focus:outline-none focus:ring cursor-pointer"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={(): void => setOpen((open: boolean): boolean => !open)}
        >
          {open ? <XMarkIcon aria-hidden="true" /> : <Bars3Icon aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden h-full flex flex-col bg-light-yellow/80 backdrop-blur-md text-center text-xl font-title font-semibold">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className="block p-3 focus:outline-none hover:bg-light-green focus:bg-dark-green focus:text-light-yellow"
                onClick={(): void => {
                  setOpen(false);
                  focusSectionById(section.id);
                }}
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Desktop Bar */}
      <div className="hidden md:flex items-center justify-between px-10 lg:px-11 xl:px-12 2xl:px-15 py-3 bg-dark-yellow/90 backdrop-blur-xs">
        <Link
          href=""
          aria-label="Go to top"
          className=" w-10 rounded focus:outline-none focus:ring focus:ring-offset-1"
        >
          <Image src={logo} alt="Đạt & Trang logo" className="pointer-events-none select-none" />
        </Link>

        <ul className="flex gap-1 font-title font-semibold lg:text-lg xl:text-xl 2xl:text-2xl">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className="px-2 py-1 rounded hover:bg-light-yellow focus:outline-none focus:ring"
                onClick={(): void => focusSectionById(section.id)}
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
