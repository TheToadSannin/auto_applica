import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import image1 from "../assets/guyInRed.png";
import image2 from "../assets/undraw_real_time_sync.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  document.getElementsByTagName("title")[0].text = "Home";

  return (
    <main className="homePage">
      <div>
        <h1>
          We are{" "}
          <span>
            <u>AUTO</u>-<u>APPLICA</u>
          </span>
        </h1>
        <div>
          <img src={image1} width={500 + "px"} alt="" />
          <p>
            <span>Streamline</span> Your Application Submissions: Go{" "}
            <span>Paperless</span> and Submit Applications Online{" "}
            <span>Effortlessly.</span>
          </p>
        </div>
        <h1>
          <span>Features</span> of Auto Applica
        </h1>

        <div className="features">
          <div>
            <i class="fa-solid fa-list fa-2xl" style={{ color: "#7371fc" }}></i>
            <h3>Application Templates</h3>
            <p>Pre-built free application templates for various purposes</p>
          </div>
          <div>
            <i
              class="fa-solid fa-mobile-screen fa-2xl"
              style={{ color: "#7371fc" }}
            ></i>
            <h3>Paperless Applications</h3>
            <p>
              Embrace the tradition of paperless applications with auto applica
            </p>
          </div>
          <div>
            <i
              class="fa-regular fa-clock fa-2xl"
              style={{ color: "#7371fc" }}
            ></i>
            <h3>Save Time</h3>
            <p>Your Precious time does not worth just writing applications.</p>
          </div>
          <div>
            <i
              class="fa-solid fa-shield-halved fa-2xl"
              style={{ color: "#7371fc" }}
            ></i>
            <h3>Secure Communication</h3>
            <p>
              Send you applications with user encryption without worrying about
              the intruders
            </p>
          </div>
        </div>

        <div className="tryapp">
          <h1>
            <span>New </span>To This Website ?
          </h1>
          <p>try creating your first free application now!</p>
          <i
            className="arrow"
            class="fa-solid fa-arrow-down fa-2xl"
            style={{ color: "#7371fc" }}
          ></i>
          <button
            onClick={() => {
              navigate("/student/createApplication");
            }}
          >
            Create Application
          </button>
        </div>
        <h1>
          <span>What</span> are We?
        </h1>
        <div>
          <p>
            Empowering students, facilitating teacher <span>communication</span>
            . Our mission: <span>secure</span>, efficient online application{" "}
            submissions, <span>no physical paperwork.</span>
          </p>
          <img src={image2} width={500 + "px"} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Home;
