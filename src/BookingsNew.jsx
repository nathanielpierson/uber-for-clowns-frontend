export function BookingsNew ({onCreate}) {
  const handleSubmit = (event) => {
event.preventDefault();
const params = new FormData(event.target);
const form = event.target;
  window.location.href = "./bookings"
  const successCallback = () => form.reset();
  onCreate(params, successCallback);
  }
  return (
<div id ="bookings-new">
<form onSubmit={handleSubmit}>
<br></br>
<br></br>
<h1>book a clown</h1>
  <p>
    clown id <input name="clown_id" type="text" />
  </p>
  <p> user id <input name="user_id" type="text" />
  </p>
  <p> duration <input name="duration" type="text"/>
  </p>
  <p> rating <input name="rating" type="text"/>
  </p>
  <button type="submit">Create</button>
</form>
</div>
)
  }