export const EVENTS = {
  civil: {
    venueName: 'Mairie du 16ᵉ arrondissement de Paris',
    venueAddress: '71 Av. Henri Martin, 75016 Paris',
    map: 'https://maps.app.goo.gl/YC1aJPXysHXJvhoN9',
    date: new Date('2025-10-25T00:00:00+02:00'), // Paris time: 2025-10-25T00:00:00+02:00 (CEST)
    type: 'Civil ceremony',
    timeline: [
      { time: '10:30', event: 'Arrivals & reception' },
      { time: '11:00', event: 'Ceremony' },
      { time: '11:20', event: 'Photos' },
      { time: '12:00', event: 'Picnic' },
    ],
  },

  celebration: {
    venueName: 'Château de Dommerville',
    venueAddress: '55 Rue de la Plaine, 91670 Angerville',
    map: 'https://maps.app.goo.gl/NFU83BPnzdZkHspL8',
    date: new Date('2026-03-28T00:00:00+01:00'), // Paris time: 2026-03-28T00:00:00+01:00 (CET/CEST)
    type: 'Wedding celebration',
    timeline: [
      { time: '15:00', event: 'Arrivals & welcome drinks' },
      { time: '16:00', event: 'Outdoor ceremony' },
      { time: '17:00', event: 'Outdoor cocktail & photos' },
      { time: '19:00', event: 'Dinner, toasts & games' },
      { time: '22:00', event: 'Cake cutting' },
      { time: '23:00', event: 'Dancing, party & karaoke' },
      { time: '', event: '----------' },
      {
        time: '10:00',
        event: 'Brunch (Note: Beware of daylight saving time!)',
      },
    ],
  },
};
