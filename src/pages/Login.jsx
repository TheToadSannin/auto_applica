import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AuthContext from "../providers/AuthContext";


const Login = (props) => {
  let navigate = useNavigate();
  const {user, setUser, role, setRole} = useContext(AuthContext);

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
      console.log(role.value);
      //role = Teacher
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
        localStorage.setItem("token", "BearerTeacher "+json.token);
        setUser(json.user);
        setRole("teacher");
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
        localStorage.setItem("token", "BearerStudent "+json.token);
        setUser(json.user);
        setRole("student");
        navigate("/student/dashboard");
        
      }
    }
  };

  return (
    <div className=" ">
      <form
        onSubmit={handleLogin}
        className=" font-sans flex flex-col justify-center items-center p-10 gap-10"
      >
        {/* dropdown menu =============================*/}
        <div className="flex flex-col justify-center gap-3 items-center w-full">
          <select name="role_dropdown" id="role_dropdown">
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>

        {/* ======================================== */}

        <div className="flex flex-col justify-center gap-3 items-center w-full">
          <label htmlFor="email" className="text-2xl uppercase">
            Email
          </label>
          <input
            className=" bg-gray-200 w-80 p-2 rounded-lg "
            type="text"
            placeholder="Example: Joe Mama"
            name="email"
            id="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-center gap-3 items-center w-full m-5">
          <label htmlFor="password" className="text-2xl uppercase">
            Password
          </label>
          <input
            className=" bg-gray-200 w-80 p-2 rounded-lg "
            type="password"
            placeholder="*******"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-end w-80">
          <button
            type="submit"
            className=" bg-cyan-400 p-2 rounded-xl w-40 ml-auto mr-auto"
          >
            Login
          </button>
          <div className="flex w-full">
            <Link
              to={"/forgotpassword"}
              className=" text-sm  my-4 hover:text-cyan-300 hover:underline underline-offset-2 mr-auto"
            >
              Forgot Password?
            </Link>
            <Link
              to={"/signup"}
              className=" text-sm  my-4 hover:text-cyan-300 hover:underline underline-offset-2"
            >
              New User?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
