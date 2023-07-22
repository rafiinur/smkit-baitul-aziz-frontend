import { NavLink } from "react-router-dom"
import { menu, logo } from "../assets"
import { navLinks } from "../constants"
import { styles } from "../styles"

const Navbar = () => {
  return (
    <nav className="navbar py-4 px-12 bg-base-100 text-base-content">
      <div className="navbar-start">
        <img
          src={logo}
          alt="logo"
          className="w-[48px] h-[42px] mr-2"
        />
        <div>
          <h1 className="font-mont text-sm font-bold tracking-tighter">
            SMKIT Baitul Aziz
          </h1>
          <hr />
          <p className="font-mont text-[10px] italic tracking-tighter">
            Menuai risalah, Menggapai peradaban
          </p>
        </div>
      </div>
      <div className="navbar-end md:flex hidden text-sm">
        <ul className="menu-horizontal gap-1 font-mont font-semibold">
          {navLinks.map(({ id, link, title, children }) => {
            return (
              <li key={id}>
                <NavLink
                  to={link}
                  className={`${styles.hoverLink} p-4 rounded-lg`}
                >
                  {title}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex flex-1 justify-end items-center">
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
