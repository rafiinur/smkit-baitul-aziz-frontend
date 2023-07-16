import { navLinks } from "../constants"
import { NavLink } from "react-router-dom"
import { menu } from "../../public/assets"

const Navbar = () => {
  return (
    <nav className="navbar py-4 px-8 bg-neutral-0 border-b-2 border-gray-100">
      <div className="navbar-start">
        <img
          src={import.meta.env.VITE_BASE_URL + "/assets/logo.png"}
          alt="logo"
          className="w-[72px] h-[60px]"
        />
      </div>
      <div className="navbar-end hidden sm:flex">
        <ul className="menu-horizontal font-mont font-semibold space-x-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`p-4 hover:bg-primary hover:text-white rounded-lg`}
            >
              <NavLink to={nav.link}>{nav.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <label
          htmlFor="my-drawer"
          className="btn btn-ghost drawer-button"
        >
          <img
            src={menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
          />
        </label>
      </div>
    </nav>
  )
}
export default Navbar
