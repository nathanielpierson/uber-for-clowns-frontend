// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import { ClownsPage } from "./ClownsPage";
import { BookingsPage } from "./BookingsPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <ClownsPage />
      <BookingsPage />
      <Footer />
    </div>
  )
}

export default App;