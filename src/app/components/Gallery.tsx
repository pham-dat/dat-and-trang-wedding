import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import photo1 from '@/../public/gallery/photo-1.jpg';
import photo2 from '@/../public/gallery/photo-2.jpg';
import photo3 from '@/../public/gallery/photo-3.jpg';
import photo4 from '@/../public/gallery/photo-4.jpg';
import photo5 from '@/../public/gallery/photo-5.jpg';
import photo6 from '@/../public/gallery/photo-6.jpg';
import photo7 from '@/../public/gallery/photo-7.jpg';
import photo8 from '@/../public/gallery/photo-8.jpg';
import photo9 from '@/../public/gallery/photo-9.jpg';
import photo10 from '@/../public/gallery/photo-10.jpg';
import photo11 from '@/../public/gallery/photo-11.jpg';
import photo12 from '@/../public/gallery/photo-12.jpg';
import photo13 from '@/../public/gallery/photo-13.jpg';
import photo14 from '@/../public/gallery/photo-14.jpg';
import photo15 from '@/../public/gallery/photo-15.jpg';
import photo16 from '@/../public/gallery/photo-16.jpg';
import photo17 from '@/../public/gallery/photo-17.jpg';
import photo18 from '@/../public/gallery/photo-18.jpg';
import photo19 from '@/../public/gallery/photo-19.jpg';
import photo20 from '@/../public/gallery/photo-20.jpg';

import SectionSeparator from '@/app/components/SectionSeparator';

const PHOTOS = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
];

interface GalleryProps {
  id: string;
}

export default function Gallery({ id }: GalleryProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  // Handle dragging to scroll
  // Use a state to track if the user is dragging
  // This allows us to prevent opening the modal on click if the user is dragging
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const mouseDownData = { offsetX: 0, cursorX: 0 };
    let velocity = 0;
    let isMouseDown = false;

    const handleMouseMove = (event: MouseEvent) => {
      velocity = event.movementX;

      const dx = event.clientX - mouseDownData.cursorX;
      track.scrollLeft = mouseDownData.offsetX - dx;

      if (Math.abs(dx) > 10) setIsDragging(true); // Set dragging if moved enough other than a click
    };

    const handleMouseUp = () => {
      isMouseDown = false;

      track.classList.remove('cursor-grabbing');

      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      setTimeout(() => setIsDragging(false), 0); // Reset dragging after mouse up
    };

    const handleMouseDown = (event: MouseEvent) => {
      // Only handle left mouse button
      if (event.button !== 0) return;

      track.classList.add('cursor-grabbing');

      // Set the initial position
      mouseDownData.cursorX = event.clientX;
      mouseDownData.offsetX = track.scrollLeft;

      isMouseDown = true;
      velocity = 0;

      setIsDragging(false);

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    };

    const updateScrollPosition = () => {
      if (isMouseDown) return;

      velocity *= 0.9; // Dampen the velocity for smooth scrolling

      track.scrollLeft -= velocity;
    };

    let animationFrameId: number;

    const loop = () => {
      updateScrollPosition();
      animationFrameId = window.requestAnimationFrame(loop);
    };

    track.addEventListener('mousedown', handleMouseDown);
    loop();

    // Cleanup event listener on unmount and stop the animation loop to prevent memory leaks
    return () => {
      track.removeEventListener('mousedown', handleMouseDown);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const restoreFocusToSelectedPhoto = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const buttons = track.querySelectorAll('button');

    if (buttons && buttons[currentPhotoIndex]) {
      (buttons[currentPhotoIndex] as HTMLButtonElement).focus();
    }
  }, [currentPhotoIndex]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!modalOpen) return;

    const handleKey = (event: unknown): void => {
      const keyboardEvent = event as KeyboardEvent;

      if (keyboardEvent.key === 'Escape') {
        // Close the modal when Escape is pressed
        setModalOpen(false);
        setTimeout(restoreFocusToSelectedPhoto, 0);
      }

      if (keyboardEvent.key === 'ArrowLeft')
        setCurrentPhotoIndex(
          (currentPhotoIndex: number): number =>
            (currentPhotoIndex - 1 + PHOTOS.length) % PHOTOS.length
        );

      if (keyboardEvent.key === 'ArrowRight')
        setCurrentPhotoIndex(
          (currentPhotoIndex: number): number => (currentPhotoIndex + 1) % PHOTOS.length
        );
    };

    window.addEventListener('keydown', handleKey);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalOpen, currentPhotoIndex, restoreFocusToSelectedPhoto]);

  // Focus trap for modal
  useEffect(() => {
    if (!modalOpen || !modalRef.current) return;

    const modal: HTMLDivElement = modalRef.current;

    // Find all focusable elements inside the modal
    const focusableSelectors: string[] = [
      'button:not([disabled])',
      '[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ];

    const focusableElements = modal.querySelectorAll<HTMLElement>(focusableSelectors.join(','));

    if (focusableElements.length === 0) return;
    const firstElement: HTMLElement = focusableElements[0];
    const lastElement: HTMLElement = focusableElements[focusableElements.length - 1];

    // Focus the modal or first element
    setTimeout((): void => {
      (document.activeElement === modal ? firstElement : modal).focus();
    }, 0);

    const handleTrap = (event: unknown) => {
      const e = event as KeyboardEvent;
      if (e.key !== 'Tab') return;
      if (focusableElements.length === 0) return;

      // Shift+Tab
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleTrap as EventListener);

    // Cleanup event listener on unmount
    return () => {
      modal.removeEventListener('keydown', handleTrap as EventListener);
    };
  }, [modalOpen]);

  // Track loading state for each photo
  const [loaded, setLoaded] = useState(Array(PHOTOS.length).fill(false));

  const handleImageLoad = (photoIndex: number): void => {
    setLoaded((prev) => {
      const next = [...prev];
      next[photoIndex] = true;
      return next;
    });
  };

  return (
    <section
      id={id}
      tabIndex={-1}
      className="bg-light-yellow/50 relative flex flex-col items-center text-justify gap-3 py-20 md:py-30 focus:outline-none"
    >
      <SectionSeparator right type={2} />

      <h1 className="text-5xl lg:text-6xl mb-2 text-center">Gallery</h1>

      <div className="relative w-full">
        {/* Left blur overlay */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-5 sm:w-10 lg:w-20 xl:w-30 2xl:w-50 z-1 bg-gradient-to-r from-light-yellow/50 to-transparent" />
        {/* Right blur overlay */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-5 sm:w-10 lg:w-20 xl:w-30 2xl:w-50 z-1 bg-gradient-to-l from-light-yellow/50 to-transparent" />

        <div
          ref={trackRef}
          className="mt-2 lg:mt-3 xl:mt-5 2xl:mt-6 px-5 sm:px-10 lg:px-20 xl:px-30 2xl:px-50 w-full overflow-x-auto flex gap-8 pt-6 pb-9 cursor-grab"
        >
          {PHOTOS.map((src, photoIndex: number) => (
            <div key={photoIndex} className="relative shrink-0 w-70 max-h-107">
              {!loaded[photoIndex] && (
                <div className="absolute inset-0 bg-dark-yellow rounded-3xl animate-pulse" />
              )}
              <button
                type="button"
                aria-label={`Open photo ${photoIndex + 1} of ${PHOTOS.length}`}
                className="focus:outline-none focus:ring focus:ring-offset-1 focus:scale-110 hover:scale-110 transition-transform ease-in-out rounded-3xl cursor-pointer h-full"
                onClick={(): void => {
                  if (isDragging) return;
                  setCurrentPhotoIndex(photoIndex);
                  setModalOpen(true);
                }}
              >
                <Image
                  src={src}
                  alt={`Photo ${photoIndex + 1}`}
                  className={`pointer-events-none select-none h-full object-cover rounded-3xl transition-opacity ease-out duration-3000 ${loaded[photoIndex] ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => handleImageLoad(photoIndex)}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div
          ref={modalRef}
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
          aria-label="Photo slideshow"
          className="fixed inset-0 z-2 bg-dark-brown/90 backdrop-blur focus:outline-none flex items-center justify-center text-dark-yellow px-5"
          onClick={(): void => {
            setModalOpen(false);
            setTimeout(restoreFocusToSelectedPhoto, 0);
          }}
          onTouchStart={(event): void => {
            if (event.touches.length === 1) {
              swipeStart.current = {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY,
              };
            }
          }}
          onTouchEnd={(event): void => {
            if (!swipeStart.current || event.changedTouches.length !== 1) return;

            const startX: number = swipeStart.current.x;
            const startY: number = swipeStart.current.y;
            const endX: number = event.changedTouches[0].clientX;
            const endY: number = event.changedTouches[0].clientY;
            const dx: number = endX - startX;
            const dy: number = endY - startY;
            swipeStart.current = null;

            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
              if (dx > 0) {
                setCurrentPhotoIndex(
                  (c: number): number => (c - 1 + PHOTOS.length) % PHOTOS.length
                );
              } else {
                setCurrentPhotoIndex((c: number): number => (c + 1) % PHOTOS.length);
              }
            }
          }}
        >
          <button
            type="button"
            className="absolute top-3 right-3 w-10 rounded  hover:text-light-yellow focus:outline-none focus:ring cursor-pointer"
            aria-label="Close slideshow"
            onClick={() => setModalOpen(false)}
          >
            <XMarkIcon aria-hidden="true" />
          </button>

          <div onClick={(event) => event.stopPropagation()}>
            <Image
              src={PHOTOS[currentPhotoIndex]}
              alt={`Photo ${currentPhotoIndex + 1}`}
              className="pointer-events-none select-none max-h-[70vh] w-auto shadow-2xl"
            />
          </div>

          <div
            className="absolute bottom-0 p-10 flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="w-10 rounded hover:text-light-yellow focus:outline-none focus:ring cursor-pointer"
              aria-label="Previous photo"
              onClick={() => setCurrentPhotoIndex((c) => (c - 1 + PHOTOS.length) % PHOTOS.length)}
            >
              <ChevronLeftIcon aria-hidden="true" />
            </button>

            <div className="w-30 text-center font-title text-xl" aria-live="polite">
              {currentPhotoIndex + 1} / {PHOTOS.length}
            </div>

            <button
              type="button"
              className="w-10 rounded hover:text-light-yellow focus:outline-none focus:ring cursor-pointer"
              aria-label="Next photo"
              onClick={() => setCurrentPhotoIndex((c) => (c + 1) % PHOTOS.length)}
            >
              <ChevronRightIcon aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
