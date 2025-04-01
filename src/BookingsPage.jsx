import axios from "axios";
import {useState, useEffect} from "react";
// import {BookingsIndex} from "./BookingsIndex";
import {BookingsNew} from "./BookingsNew";

export function BookingsPage () {

  const [bookings, SetBookings] = useState([]);
  const handleIndex = () => {
    axios.get(`http://localhost:3000/bookings.json`).then(function (response) {
      SetBookings(response.data);
    })
  }
   const handleShow = (booking) => {
       console.log("handleShow", booking);
     };
  useEffect(handleIndex, []);

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate")
    axios.post("/bookings.json", params).then((response) => {
      SetBookings([...bookings, response.data]);
      successCallback();
      console.log(response.data)

    })
  }
  
  return (
    <div>
      <BookingsNew onCreate={handleCreate}/>
      {/* <BookingsIndex onShow={handleShow} bookings={bookings}/> */}
    </div>
  )
  }