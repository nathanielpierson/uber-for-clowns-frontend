export function BookingsIndex ({ bookings, onShow }) {
  console.log(bookings);
return (
    <div id="bookings-index">
      <p>please work</p>
    {bookings.map((booking) => (
    <div key={booking.id}>
      <p>please work</p>
  <h1>{booking.clown_id}</h1>
  <h1>{booking.user_id}</h1>
  <h1>{booking.duration}</h1>
  <h1>{booking.rating}</h1>
  <button type="button" className="btn btn-primary" onClick={() => onShow(booking)}>More Info</button>
    </div>
    ))}
  </div>
);
}