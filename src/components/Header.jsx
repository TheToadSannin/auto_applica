import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => {

  const handleNav = ()=>{
    console.log("nav");
  }

  return (
    <header>
      <nav>
        <span>
          <Logo
            height={120 + "px"}
            width={120 + "px"}
            viewBox={"0 0 500 300"}
          />
        </span>
        <div className="nav-drawer">
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
              <Link to="/singup">Singup</Link>
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
