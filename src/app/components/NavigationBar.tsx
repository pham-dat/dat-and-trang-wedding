import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';

import logo from '@/../public/logo.png';

interface NavigationBarProps {
  sections: { id: string; label: string }[];
}

export default function NavigationBar({ sections }: NavigationBarProps) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const lastLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect((): void => {
    if (open) {
      document.body.classList.add('overflow-hidden');

      // Focus the first link when menu opens
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 0);
    } else {
      document.body.classList.remove('overflow-hidden');

      // Restore focus to menu button
      setTimeout(() => {
        menuButtonRef.current?.focus();
      }, 0);
    }
  }, [open]);

  // Focus trap and menu navigation for mobile menu
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent): void {
      if (!menuRef.current) return;

      const menuItems = Array.from(
        menuRef.current.querySelectorAll<HTMLAnchorElement>('[role="menuitem"] > a')
      );

      const closeButton = menuButtonRef.current;

      if (!menuItems.length || !closeButton) return;

      const focusables: HTMLElement[] = [closeButton, ...menuItems];

      const currentFocusableIndex: number = focusables.indexOf(
        document.activeElement as HTMLElement
      );

      // Tab/Shift+Tab: only between close button and menu
      if (e.key === 'Tab') {
        e.preventDefault();

        if (e.shiftKey) {
          const previousFocusableIndex =
            (currentFocusableIndex - 1 + focusables.length) % focusables.length;
          focusables[previousFocusableIndex].focus();
        } else {
          const nextFocusableIndex = (currentFocusableIndex + 1) % focusables.length;
          focusables[nextFocusableIndex].focus();
        }
      } else if (e.key === 'Escape') {
        setOpen(false);
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        if (menuItems.length < 1) return;

        if (document.activeElement === closeButton) {
          // If close button is focused, focus the first menu item
          menuItems[0].focus();
        } else {
          // If a menu item is focused, focus the next one
          const currentMenuItemIndex: number = menuItems.indexOf(
            document.activeElement as HTMLAnchorElement
          );

          if (currentMenuItemIndex !== -1) {
            const nextMenuItemIndex: number = (currentMenuItemIndex + 1) % menuItems.length;
            menuItems[nextMenuItemIndex].focus();
          }
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        if (menuItems.length < 1) return;

        // If the close button is focused, focus the last menu item
        if (document.activeElement === closeButton) {
          menuItems[menuItems.length - 1].focus();
        } else {
          // If a menu item is focused, focus the previous one
          const currentMenuItemIndex = menuItems.indexOf(
            document.activeElement as HTMLAnchorElement
          );

          if (currentMenuItemIndex !== -1) {
            const previousMenuItemIndex: number =
              (currentMenuItemIndex - 1 + menuItems.length) % menuItems.length;
            menuItems[previousMenuItemIndex].focus();
          }
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <nav className={`sticky top-0 z-2 ${open ? 'h-dvh' : ''}`}>
      {/* Mobile Bar */}
      <div className="md:hidden flex items-center justify-between px-5 py-3 bg-dark-yellow/90 backdrop-blur-xs">
        <Link
          href=""
          aria-label="Go to top"
          className="w-6 rounded focus:outline-none focus:ring focus:ring-offset-1"
          onClick={() => {
            setOpen(false);
          }}
        >
          <Image src={logo} alt="Đạt & Trang logo" className="pointer-events-none select-none" />
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          role="button"
          className="w-10 rounded text-dark-brown hover:bg-light-yellow focus:outline-none focus:ring cursor-pointer"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-haspopup="true"
          aria-controls="mobile-menu"
          onClick={(): void => setOpen((open: boolean): boolean => !open)}
        >
          {open ? <XMarkIcon aria-hidden="true" /> : <Bars3Icon aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden h-full flex flex-col bg-light-yellow/80 backdrop-blur-md text-center text-xl font-title font-semibold"
          role="menu"
        >
          {sections.map((section, index) => (
            <li key={section.id} role="menuitem">
              <Link
                ref={
                  index === 0
                    ? firstLinkRef
                    : index === sections.length - 1
                      ? lastLinkRef
                      : undefined
                }
                href={`#${section.id}`}
                tabIndex={-1}
                className="block p-3 focus:outline-none hover:bg-light-green focus:bg-dark-green focus:text-light-yellow"
                onClick={(): void => {
                  setOpen(false);
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
