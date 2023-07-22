import { createBrowserRouter } from "react-router-dom"
import Beranda from "./pages/Beranda"
import Berita from "./pages/Berita"
import Kontak from "./pages/Kontak"
import DefaultLayout from "./components/DefaultLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Beranda />,
      },
      {
        path: "/berita",
        element: <Berita />,
      },
      {
        path: "/kontak",
        element: <Kontak />,
      },
    ],
  },
])

export default router
