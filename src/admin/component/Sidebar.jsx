import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    const sideMenu = document.querySelector("aside");
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const darkMode = document.querySelector(".dark-mode");

    const handleMenuClick = () => {
      sideMenu.style.display = "block";
    };

    const handleCloseClick = () => {
      sideMenu.style.display = "none";
    };

    const handleDarkModeClick = () => {
      document.body.classList.toggle("dark-mode-variables");
      darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
      darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
    };

    menuBtn.addEventListener("click", handleMenuClick);
    closeBtn.addEventListener("click", handleCloseClick);
    darkMode.addEventListener("click", handleDarkModeClick);

    return () => {
      menuBtn.removeEventListener("click", handleMenuClick);
      closeBtn.removeEventListener("click", handleCloseClick);
      darkMode.removeEventListener("click", handleDarkModeClick);
    };
  }, []);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="asideContainer">
      <aside>
        <div className="toggle">
          <div className="logo">
            <img
              src="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png"
              alt=""
            />
          </div>
          <div className="close" id="close-btn">
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>

        <div className="menu">
          <Link
            to="/admin111"
            onClick={() => handleLinkClick(0)}
            className={activeLink === 0 ? "active" : ""}
          >
            <span className="material-symbols-outlined">home</span>
            <h3>Home</h3>
          </Link>
          <Link
            to="/admin111/users"
            onClick={() => handleLinkClick(2)}
            className={activeLink === 2 ? "active" : ""}
          >
            <span className="material-symbols-outlined">contact_mail</span>
            <h3>Users</h3>
          </Link>
          <Link
            to="/admin111/settings"
            onClick={() => handleLinkClick(3)}
            className={activeLink === 3 ? "active" : ""}
          >
            <span className="material-symbols-outlined">settings</span>
            <h3>Settings</h3>
          </Link>
          <Link
            onClick={() => handleLinkClick(0)}
            className={activeLink === 0 ? "" : ""}
          >
            <span className="material-symbols-outlined">logout</span>
            <h3>Logout</h3>
          </Link>

          <div className="dark-mode">
            <span className="material-symbols-outlined active">dark_mode</span>
            <span className="material-symbols-outlined">light_mode</span>
          </div>
        </div>
      </aside>

      <div className="nav">
        <button id="menu-btn">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="dark-mode">
          <span className="material-symbols-outlined active">dark_mode</span>
          <span className="material-symbols-outlined">light_mode</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
