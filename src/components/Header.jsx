import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => {
  const handleNav = () => {
    const menuDrawer = document.querySelector("header .nav-drawer");
    const isShow = menuDrawer.getAttribute("isshow");

    if (isShow === "false") {
      menuDrawer.style.display = "flex";
      menuDrawer.classList.add("nav-drawer-animaition");
      menuDrawer.setAttribute("isshow", "true");
    } else {
      menuDrawer.style.display = "none";
      menuDrawer.classList.remove("nav-drawer-animaition");
      menuDrawer.setAttribute("isshow", "false");
    }

    console.log(menuDrawer.getAttribute("isshow"));
  };

  return (
    <header>
      <nav>
        <span style={{ opacity: "0" }}>
          <Logo height={65 + "px"} width={65 + "px"} viewBox={"0 0 500 300"} />
        </span>
        <div className="nav-drawer" isshow="false">
          <ul className="pages">
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign-Up</Link>
            </li>
            <li>
              <div className="userIcon">L</div>
            </li>
          </ul>
        </div>
        <div className="menu-icon">
          <i className="fa-solid fa-bars fa-2xl" onClick={handleNav}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
