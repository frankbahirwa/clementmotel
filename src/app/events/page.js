import EventsSection from '@/components/sections/EventsSection';

export const metadata = {
  title: 'Events & Conferences | Clement Motel',
  description: 'Host your events, meetings, and conferences at Clement Motel venues in Kibuye.',
};

export default function EventsPage() {
  return (
    <div className="pt-10 min-h-screen">
      <EventsSection />
    </div>
  );
}
