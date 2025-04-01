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
          <a className="nav-link" href="/login">Signin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/bookings">Bookings</a>
        </li>
      </ul>
    </header>
  )
}