export function formatDate(date: Date): string {
  // Convert to Paris time (Europe/Paris)
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Europe/Paris',
  };
  const parts = new Intl.DateTimeFormat('en-US', options).formatToParts(date);
  const dayName = parts.find((p) => p.type === 'weekday')?.value || '';
  const year = parts.find((p) => p.type === 'year')?.value || '';
  const month = parts.find((p) => p.type === 'month')?.value || '';
  const day = parts.find((p) => p.type === 'day')?.value || '';
  return `${dayName}, ${year}-${month}-${day}`;
}
