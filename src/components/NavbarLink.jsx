/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const NavbarLink = ({ link, title, childLink }) => {
  const hasChildren = childLink && childLink.length > 0
  const [showDropdown, setShowDropdown] = useState(false)

  const handleToggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown)
  }

  useEffect(() => {
    console.log(showDropdown)
  }, [showDropdown])

  return (
    <li
      className={`relative ${hasChildren ? "group" : ""}`}
      onMouseEnter={hasChildren ? handleToggleDropdown : null}
      onMouseLeave={hasChildren ? handleToggleDropdown : null}
    >
      <NavLink
        to={link}
        className="p-4 rounded-lg bg-transparent hover:text-teal-300 hover:shadow-teal-300 transition-colors duration-300"
      >
        {title}
      </NavLink>
      {hasChildren && (
        <ul
          className={`absolute left-4 mt-2 bg-base-100 text-base-content shadow-lg rounded-lg ${
            showDropdown ? "opacity-100" : "opacity-0"
          } scale-${
            showDropdown ? "100" : "95"
          } transition-all duration-300 transform ${
            showDropdown ? "scale-y-100" : "scale-y-95"
          } `}
        >
          {childLink.map(({ id, link, title }) => (
            <li
              key={id}
              className="w-48 p-2"
            >
              <NavLink
                to={link}
                className="block p-4 text-sm hover:text-white hover:bg-teal-300 rounded-lg"
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default NavbarLink
