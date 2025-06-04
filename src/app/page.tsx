'use client';

import NavigationBar from '@/app/components/NavigationBar';
import Hero from '@/app/components/Hero';
import Welcome from '@/app/components/Welcome';
import EventTimeline from '@/app/components/EventTimeline';
import Rsvp from '@/app/components/Rsvp';
import DressCode from '@/app/components/DressCode';
import Contribution from '@/app/components/Contribution';
import Faq from '@/app/components/Faq';
import Gallery from '@/app/components/Gallery';
import Message from '@/app/components/Message';

export default function MainPage() {
  const sections = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'event-timeline', label: 'Event timeline' },
    { id: 'rsvp', label: 'RSVP' },
    { id: 'dress-code', label: 'Dress code' },
    { id: 'contribution', label: 'Contribution' },
    { id: 'faq', label: 'FAQ' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <div>
      <NavigationBar sections={sections} />
      <main>
        <Hero />
        <Welcome id={sections[0].id} />
        <EventTimeline id={sections[1].id} />
        <Rsvp id={sections[2].id} />
        <DressCode id={sections[3].id} />
        <Contribution id={sections[4].id} />
        <Faq id={sections[5].id} />
        <Gallery id={sections[6].id} />
        <Message />
      </main>
    </div>
  );
}
