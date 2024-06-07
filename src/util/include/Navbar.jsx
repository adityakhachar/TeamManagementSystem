import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  const getUserType = () => {
    const companyAuthToken = localStorage.getItem("companyAuthToken");
    const employeeAuthToken = localStorage.getItem("employeeAuthToken");

    if (companyAuthToken && employeeAuthToken) {
      return "both";
    } else if (companyAuthToken) {
      return "company";
    } else if (employeeAuthToken) {
      return "employee";
    } else {
      return "none";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("companyAuthToken");
    localStorage.removeItem("employeeAuthToken");
    localStorage.removeItem("userData");

    navigate("/");
    window.location.reload();
  };

  const userType = getUserType();

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

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
                to="/company"
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
                to="/employee"
                activeClassName="active"
                className="nav-links"
                onClick={closeMenu}
              >
                Employees
              </NavLink>
            </li>
            {userType === "company" && (
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-links"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            )}
            {userType === "employee" && (
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-links"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            )}
            {userType === "both" && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-links"
                    onClick={handleLogout}
                  >
                    Logout Company
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-links"
                    onClick={handleLogout}
                  >
                    Logout Employee
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
