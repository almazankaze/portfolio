import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import MyPic from "../images/myPic.jpg";

const NavBar = () => {
  // state of hamburger icon
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const closeMenu = () => {
    setIsClicked(false);
  };

  return (
    <nav className="nav-container">
      <Link to="/about" className="nav-name" onClick={closeMenu}>
        John Almazan
      </Link>

      <GiHamburgerMenu className="hamburger-icon" onClick={handleClick} />

      <div className="img-profile">
        <Link to="/about" onClick={closeMenu}>
          <img src={MyPic} alt="profile"></img>
        </Link>
      </div>

      <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            to="/about"
            activeClassName="current"
            className="nav-link"
            exact={true}
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/education"
            activeClassName="current"
            className="nav-link"
            onClick={closeMenu}
          >
            Education
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/experience"
            activeClassName="current"
            className="nav-link"
            onClick={closeMenu}
          >
            Experience
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/projects"
            activeClassName="current"
            className="nav-link"
            onClick={closeMenu}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
