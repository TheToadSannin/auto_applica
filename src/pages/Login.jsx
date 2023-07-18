import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from '../components/Header'


const Login = (props) => {
  let navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
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
      alert("Enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  };
  document.getElementsByTagName("title")[0].text="Login"
  return (
    <div className=" ">
        <Header/>
      <form
        onSubmit={handleSubmit}
        className=" font-sans flex flex-col justify-center items-center p-10 gap-10"
      >
        <div className="flex flex-col justify-center gap-3 items-center w-full">
          <label htmlFor="email" className="text-2xl uppercase">
            Username
          </label>
          <input
            className=" bg-gray-200 w-80 p-2 rounded-lg "
            type="text"
            placeholder="Example: Joe Mama"
            name="email"
            id="email"
            value={credentials.email}
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