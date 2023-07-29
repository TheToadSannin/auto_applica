import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
// import AuthContext from "../providers/AuthContext";

const Login = (props) => {
  let navigate = useNavigate();
  // const {user, setUser, role, setRole, authenticated, setAuthenticated} = useContext(AuthContext);

  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const role = document.getElementById("role_dropdown");
    if (role.value === "teacher") {
      const response = await fetch("http://localhost:5000/api/loginTeacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();

      console.log(json);

      if (!json.success) {
        alert(json.errors);
      }
      if (json.success) {
        localStorage.setItem("token", "BearerTeacher " + json.token);
        // setUser(json.user);
        // setRole("teacher");
        // setAuthenticated(true);
        navigate("/teacher/dashboard");
      }
    } else {
      const response = await fetch("http://localhost:5000/api/loginStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();

      if (!json.success) {
        alert(json.success);
      }
      if (json.success) {
        localStorage.setItem("token", "BearerStudent " + json.token);
        // setUser(json.user);
        // setRole("student");
        // setAuthenticated(true);
        navigate("/student/dashboard");
      }
    }
  };

  return (
    <main className="formMain">
      <div className=" ">
        <form onSubmit={handleLogin} className="form">
          {/* dropdown menu =============================*/}
          {/* <div className="role_dropdown">
            <select name="role_dropdown" id="role_dropdown">
              <option className="teacherRole" value="teacher">
                Teacher
              </option>
              <option value="student">Student</option>
            </select>
          </div> */}
          <Dropdown/>

          {/* ======================================== */}

          <div className="creds">
            <input
              className=" "
              type="text"
              placeholder="Email or Username"
              name="email"
              id="email"
              value={credentials.email}
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              className=""
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div className="actionBtn">
            <Link to={"/forgotpassword"} className="forgotPassword">
              Forgot Password?
            </Link>
            <button type="submit" className="">
              Login
            </button>
            <Link to={"/signup"} className="newUser">
              New User?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};
export default Login;
