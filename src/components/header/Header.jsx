import React from "react";
import home_style from './header.module.scss'
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div className={home_style.header}>
      <div>
        <ul className={home_style.header_list}>
          <li>
            <NavLink>
              <button>Contact</button>
            </NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className={home_style.header_list2}>
        <li>For developers</li>
        <li>|</li>
        <li>Request demo</li>
        <li>
          <NavLink to="/signUp">
            <button>Sign up</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
