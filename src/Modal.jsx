import "./Modal.css";
// import { BookingsNew } from "./BookingsNew";

export function Modal({ children, show, onClose }) {
  if(show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {children}
          <button className="close" type="button" onClick={onClose}>
            &#x2715;
          </button>
          <button type="button" className="btn btn-light"> <a href="/bookings/new">Request this Clown</a></button>
        </section>
      </div> 
    )
  }
}