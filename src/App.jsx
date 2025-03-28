import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import { ClownsPage } from "./ClownsPage";
import { BookingsPage } from "./BookingsPage";
import { Footer } from "./Footer";
import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage"
import { LogoutLink } from "./LogoutLink"


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
      }
    ]
  }
])

function App() {
  return (
    <div>
      <Header />
      <ClownsPage />
      <BookingsPage />
      <Footer />
      <RouterProvider router={router} />
    </div>
  )
}

export default App;