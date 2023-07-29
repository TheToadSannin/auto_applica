import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    fullname: "",
    email: "",
    roll_no: "",
    standard: "",
    section: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };

  document.getElementsByTagName("title")[0].text = "Signup";

  useEffect(() => {
    const role = document.getElementById("role_dropdown");
    role.onchange = function () {
      const roll_no = document.getElementById("student_div");
      if (role.value === "teacher") {
        roll_no.style.display = "none";
      } else {
        roll_no.style.display = "block";
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const role = document.getElementById("role_dropdown");
    if (role.value === "student") {
      const response = await fetch("http://localhost:5000/api/createStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: credentials.fullname,
          email: credentials.email,
          roll_no: credentials.roll_no,
          standard: credentials.standard,
          section: credentials.section,
          address: credentials.address,
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

      // const json = await response.json();
    } else {
      const response = await fetch("http://localhost:5000/api/createTeacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: credentials.fullname,
          email: credentials.email,
          roll_no: credentials.roll_no,
          standard: credentials.standard,
          section: credentials.section,
          address: credentials.address,
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
    }
  };

  return (
    <main className="signupform">
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <div className="role_dropdown">
            <select name="role_dropdown" id="role_dropdown">
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>

          <div className="creds fullName">
            <input
              className=" "
              type="text"
              placeholder="Full Name"
              name="fullname"
              id="fullname"
              value={credentials.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="subCreds">
            <div className="creds">
              <input
                className=" "
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChange}
              />
              <input
                className="Roll Number"
                type="text"
                name="roll_no"
                id="roll_no"
                placeholder="Roll Number"
                value={credentials.roll_no}
                onChange={handleChange}
              />
              <input
                className=""
                type="text"
                name="standard"
                id="standard"
                placeholder="Standard"
                value={credentials.standard}
                onChange={handleChange}
              />
            </div>
            <div className="creds">
              <input
                className="Section"
                type="text"
                name="section"
                id="section"
                placeholder="Section"
                value={credentials.section}
                onChange={handleChange}
              />
              <input
                className=" "
                type="textbox"
                placeholder="Adress"
                name="address"
                id="address"
                value={credentials.address}
                onChange={handleChange}
              />
              <input
                className=" "
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="actionBtn">
            <button type="submit" className="">
              Sign up
            </button>
            <Link to={"/login"} className="alreadyUser">
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
