import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (

    <header>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/clowns">Clowns</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Sign-In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/bookings">Bookings</a>
          <LogoutLink />
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/clowns_signup">Clown Signup</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/clowns_login">Clown Login</a>
        </li>
      </ul>
    </header>
  )
}