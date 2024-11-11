import Home from "./Home";
import Rooms from "./Rooms"
import BookingForm from "./BookingForm"
import Bookings from "./Bookings"
import Contact from "./Contact"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/rooms",
    element: <Rooms />
  },
  {
    path: "/BookingForm",
    element: <BookingForm />
  },
  {
    path: "/bookings",
    element: <Bookings />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);
export default router;