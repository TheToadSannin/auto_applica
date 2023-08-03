import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import image1 from "../assets/guyInRed.png";
import image2 from "../assets/undraw_real_time_sync.svg";

const Home = () => {
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
        <h1>Features of Auto Applica</h1>
        <div className="features">
          <div>
            <i className="fa-solid fa-check fa-2xl"></i>
            <h3>Application Templates</h3>
            <p>Time-Saving pre-built application templates for your, Sick Leave, Sport Leave, Certificate Leaves, Holiday Leaves applications</p>
          </div>
          <div>
            <i className="fa-solid fa-check fa-2xl"></i>
            <h3>Paperless Applications</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam neque possimus, quis repellat illum.</p>
          </div>
          <div>
            <i className="fa-solid fa-check fa-2xl"></i>
            <h3>Lorem, ipsum dolor.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam neque possimus, quis repellat illum.</p>
          </div>
          <div>
            <i className="fa-solid fa-check fa-2xl"></i>
            <h3>Lorem, ipsum dolor.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam neque possimus, quis repellat illum.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
