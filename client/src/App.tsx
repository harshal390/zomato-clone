import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}