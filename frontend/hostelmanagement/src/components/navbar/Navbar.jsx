import React, { useState } from "react";
import Button from "./Button";
import menuItems from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <h4 className="navbar-logo"> HostelManagement
        {/* HostelManagement <i className="fab fa-react"></i> */}
      </h4>
      {/* <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div> */}
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button routeto = 'signup'>SIGN UP</Button>
    </nav>
  );
};

export default Navbar;
