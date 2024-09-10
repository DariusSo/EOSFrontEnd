import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import EventInfo from "./pages/EventInfo.jsx"
import './index.css'
import Admin from './pages/Admin.jsx'
import Login from './pages/Login.jsx'
import Registration from './pages/Registration.jsx'
import Profile from './pages/Profile.jsx'
import StationaryCards from './pages/StationaryCards.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "event",
    element: <EventInfo />,
  },
  {
    path: "event/:eventId",
    element: <EventInfo />,
  },
  {
    path: "admin",
    element: <Admin />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "scards",
    element: <StationaryCards />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  
)
