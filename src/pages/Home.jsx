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
      </div>
    </main>
  );
};

export default Home;
