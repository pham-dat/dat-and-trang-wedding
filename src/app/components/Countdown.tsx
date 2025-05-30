import { useEffect, useState } from 'react';

import { EVENTS } from '@/app/constants';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    diff: number;
  } | null>(null);

  useEffect((): (() => void) => {
    const updateCountdown: () => void = (): void => {
      const now = new Date();
      const diff: number = EVENTS.celebration.date.getTime() - now.getTime();
      const days: number = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours: number = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes: number = Math.floor((diff / (1000 * 60)) % 60);
      const seconds: number = Math.floor((diff / 1000) % 60);

      // Update the state with the calculated time left
      setTimeLeft({ days, hours, minutes, seconds, diff });
    };

    // Initial call to set the countdown immediately
    updateCountdown();

    // Set up an interval to update the countdown every second
    const timer = setInterval(updateCountdown, 1000);

    return (): void => clearInterval(timer);
  }, []);

  if (!timeLeft || timeLeft.diff <= 0) return null;

  return (
    <div className="font-subtitle text-dark-green text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl flex divide-x text-center">
      {(['days', 'hours', 'minutes', 'seconds'] as const).map((unit) => (
        <span key={unit} className="w-[5ch]">
          {timeLeft[unit]}
          {unit.charAt(0).toUpperCase()}
        </span>
      ))}
    </div>
  );
}
