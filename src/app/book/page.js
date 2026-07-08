import BookingForm from '@/components/sections/BookingForm';

export const metadata = {
  title: 'Book Now | Clement Motel',
  description: 'Send a direct reservation request to Clement Motel. Receive confirmation within 2 hours.',
};

export default function BookPage() {
  return (
    <div className="pt-24 min-h-screen">
      <BookingForm />
    </div>
  );
}
