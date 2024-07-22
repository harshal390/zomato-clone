import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LocationContextProvider from "./contexts/locationContext";
import Collection from "./pages/Collection";
import DineOut from "./pages/DineOut";
import Delivery from "./pages/Delivery";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "/ahmedabad/collections",
      element: (
        <Collection />
      ),
    },
    {
      path: "/ahmedabad/collections/featured",
      element: (
        <Collection />
      ),
    },
    {
      path: "/ahmedabad/collections/bookmarked",
      element: (
        <Collection />
      ),
    },
    {
      path: "/ahmedabad",
      element: (
        <DineOut />
      ),
    },
    {
      path: "/ahmedabad/dine-out",
      element: (
        <DineOut />
      ),
    },
    {
      path: "/ahmedabad/delivery",
      element: (
        <Delivery />
      ),
    },
  ])
  return (
    <LocationContextProvider>
      <RouterProvider router={router} />
    </LocationContextProvider>
  )
}