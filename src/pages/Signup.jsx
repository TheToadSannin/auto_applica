import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    fullname: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: credentials.fullname,
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
      navigate("/login");
    }
  };
  return (
    <div className=" ">
      <form
        onSubmit={handleSubmit}
        className=" font-sans flex flex-col justify-center items-center p-10 gap-10"
      >
        <div className="flex flex-col justify-center gap-3 items-center w-full">
          <label htmlFor="fullname" className="text-2xl uppercase">
            Full name
          </label>
          <input
            className=" bg-gray-200 w-80 p-2 rounded-lg "
            type="text"
            placeholder="Example: Joe Mama"
            name="fullname"
            id="fullname"
            value={credentials.fullname}
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
        <div className="flex flex-col justify-center gap-3 items-center w-full">
          <label htmlFor="email" className="text-2xl uppercase">
            Email
          </label>
          <input
            className=" bg-gray-200 w-80 p-2 rounded-lg "
            type="email"
            name="email"
            id="email"
            placeholder="joemama@gmail.com"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col items-end w-80">
          <button
            type="submit"
            className=" bg-orange-400 p-2 rounded-xl w-40 ml-auto mr-auto"
          >
            Sign up
          </button>
          <Link
            to={"/login"}
            className=" text-sm underline underline-offset-2 my-4 hover:text-orange-300"
          >
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
