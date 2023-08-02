import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useContext } from "react";
import AuthContext from "../providers/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, role, isLoading, authenticated, setAuthenticated } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setAuthenticated(false);
    navigate("/login");
  };

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

            {(!isLoading) ? (authenticated ? (<li><Link to={"/" + role + "/dashboard"}>Dashboard</Link></li>) : "") : ""}
            
          </ul>
          <ul className="actions">
            <li className={authenticated ? "removeUnderLineAuth" : ""}>
              {!authenticated ? (
                <Link to="/login">Login</Link>
              ) : (
                <div className="userIcon">{user.fullname[0]}</div>
              )}
            </li>
            <li>
              {!authenticated ? (
                <Link to="/signup">Sign-Up</Link>
              ) : (
                <button onClick={handleLogout}>Logout</button>
              )}
            </li>
            <li></li>
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
