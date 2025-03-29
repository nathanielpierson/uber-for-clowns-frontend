export function BookingsIndex ({ bookings, onShow }) {
return (
    <div id="bookings-index">
    {bookings.map((booking) => (
    <div key={booking.id}>
  <h1>Clown id: {booking.clown_id}</h1>
  <h1>user id: {booking.user_id}</h1>
  <h1>duration: {booking.duration}</h1>
  <h1>rating: {booking.rating}</h1>
  <button type="button" className="btn btn-primary" onClick={() => onShow(booking)}>More Info</button>
    </div>
    ))}
  </div>
);
}