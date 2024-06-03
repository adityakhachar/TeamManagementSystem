import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  
  const closeMenu = () => setClick(false); // Function to close the menu

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>TeamForge</span>
          </NavLink>

          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon" onClick={closeMenu}>
                <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/companies"
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
              >
                Companies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/employees"
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
              >
                Employees
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
