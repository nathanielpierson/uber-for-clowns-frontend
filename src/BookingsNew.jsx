import axios from 'axios';

export function BookingsNew () {
  const handleSubmit = (event) => {
event.preventDefault();
const params = new FormData(event.target)
axios.post("http://localhost:3000/bookings.json", params).thwn(response => {
  console.log(response.data)
  window.location.href = "/"
})
  }
  return (
<div id ="bookings-new">
<form onSubmit={handleSubmit}>
  <label>clown_id</label>
  <label>user_id</label>
  <label>duration</label>
  <label>rating</label>
</form>
</div>
)
  }