export function BookingsIndex ({ bookings, onClick }) {
return (
    <div>
    {bookings.map((booking) => (
    <div key={booking.id}>
  <h1>{booking.clown_id}</h1>
  <h1>{booking.user_id}</h1>
  <h1>{booking.duration}</h1>
  <h1>{booking.rating}</h1>
    </div>
    ))}
  </div>
);
}