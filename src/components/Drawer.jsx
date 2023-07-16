import { navLinks, NavLink } from "../constants"

// eslint-disable-next-line react/prop-types
const Drawer = ({ children }) => (
  <div className="drawer">
    <input
      id="my-drawer"
      type="checkbox"
      className="drawer-toggle"
    />
    <div className="drawer-content">
      {/* Page content here */}
      {children}
    </div>
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        className="drawer-overlay"
      ></label>
      <ul className="p-4 w-80 h-full bg-base-100 text-base-content font-mont">
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
  </div>
)

export default Drawer
