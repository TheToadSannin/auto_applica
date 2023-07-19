import React, { useState } from "react";
import { useEffect } from "react";
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

  document.getElementsByTagName("title")[0].text="Signup"


useEffect(() => {
    const role = document.getElementById("role_dropdown");
    console.log(role);
    role.onchange = function(){
      const roll_no = document.getElementById("student_div");
      if(role.value === "teacher"){
          roll_no.style.display = "none";
      }
      else{
          roll_no.style.display = "block";
      }
  
    }
}, [])


  return (
    <div className=" ">
      <form
        onSubmit={handleSubmit}
        className=" font-sans flex flex-col justify-center items-center p-10 gap-10"
      >
        <div className="flex flex-col justify-center gap-3 items-center w-full">
            <select name="role_dropdown" id="role_dropdown">
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
            </select>
        </div> 
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
            required
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
            required
            onChange={handleChange}
          />
        </div>

        <div id="teacher_div">

        </div>


        <div id="student_div" className="hidden">
            <div className="flex flex-col justify-center gap-3 items-center w-full">
            <label htmlFor="roll_no" className="text-2xl uppercase">
                Roll Number
            </label>
            <input
                className=" bg-gray-200 w-80 p-2 rounded-lg "
                type="text"
                name="roll_no"
                id="roll_no"
                placeholder="12341234"
                value={credentials.roll_no}
                required
                onChange={handleChange}
            />
            </div>
        </div>
        <div className="flex flex-col justify-center gap-3 items-center w-full">
            <label htmlFor="standard" className="text-2xl uppercase">
                Standard
            </label>
            <input
                className=" bg-gray-200 w-80 p-2 rounded-lg "
                type="text"
                name="standard"
                id="standard"
                placeholder="1"
                value={credentials.standard}
                required
                onChange={handleChange}
            />
        </div>

        <div className="flex flex-col justify-center gap-3 items-center w-full">
        <label htmlFor="section" className="text-2xl uppercase">
            section
        </label>
        <input
            className=" bg-gray-200 w-80 p-2 rounded-lg "
            type="text"
            name="section"
            id="section"
            placeholder="A"
            value={credentials.section}
            required
            onChange={handleChange}
        />
        </div>


        <div className="flex flex-col justify-center gap-3 items-center w-full m-5">
          <label htmlFor="address" className="text-2xl uppercase">
            address
          </label>
          <input
            className=" bg-gray-200 w-80 p-2 rounded-lg "
            type="textbox"
            placeholder="*******"
            name="address"
            id="address"
            value={credentials.address}
            required
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
            required
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
