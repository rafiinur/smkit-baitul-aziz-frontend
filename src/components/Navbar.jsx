import { menu, logo } from "../assets"
import { navLinks } from "../constants"
import NavbarLink from "./NavbarLink"

const Navbar = () => {
  return (
    <nav className="navbar py-6 px-10 text-white">
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
        <ul className="menu-horizontal gap-2 font-mont font-semibold">
          {navLinks.map(({ id, link, title, children = null }) => (
            <NavbarLink
              key={id}
              link={link}
              title={title}
              childLink={children}
            />
          ))}
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
