import axios from "axios";
import {useState} from "react";
import {BookingsIndex} from "./BookingsIndex";
import {BookingsShow} from "./BookingsShow";
import {BookingsNew} from "./BookingsNew";

export function BookingsPage () {

  const [bookings, SetBookings] = useState([]);
  const handleIndex = () => {
    axios.get(`http://localhost:3000/bookings.json`).then(function (response) {
      SetBookings(response.data);
    })
  }
  return (
    <div>
      <BookingsIndex onClick={handleIndex} bookings={bookings}/>
      <div>
      <BookingsNew />
      </div>
      <div>
      <BookingsShow />
      </div>
    </div>
  )
  }