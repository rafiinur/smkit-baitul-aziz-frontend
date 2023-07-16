import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import DefaultLayout from "./components/DefaultLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
])

export default router
