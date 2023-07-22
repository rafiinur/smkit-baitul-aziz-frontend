import Navbar from "./Navbar"
import Drawer from "./Drawer"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => (
  <Drawer>
    <Navbar />
    <div>
      <Outlet />
    </div>
  </Drawer>
)
export default DefaultLayout
