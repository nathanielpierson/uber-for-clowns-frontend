import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import { RedNosePage } from "./RedNosePage";
import { ClownsPage } from "./ClownsPage";
import { BookingsPage } from "./BookingsPage";
import { Footer } from "./Footer";
import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage"
import { LogoutLink } from "./LogoutLink"
import { ClownsLoginPage } from "./ClownsLoginPage";
import { ClownsSignupPage } from "./ClownsSignupPage";


axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet/>
        <Footer/>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <RedNosePage/>
      },
      {
        path: "/clowns",
        element: <ClownsPage/>
      },
      {
        path: "/signup",
        element: <SignupPage/>
      },
      {
        path: "/login",
        element: <LoginPage/>
      },
      {
        path: "/logout",
        element: <LogoutLink/>
      },
      {
        path: "/bookings",
        element: <BookingsPage/>
      },
      {
        path: "/clowns_signup",
        element: <ClownsSignupPage />
      },
      {
        path: "/clowns_login",
        element: <ClownsLoginPage />
      }
    ]
  }
])

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App;