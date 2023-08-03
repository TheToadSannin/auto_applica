import React from "react";
import gaurav from "../assets/gaurav_avatar.png";
import lucky from "../assets/lucky_avatar.png";

const About = () => {
  return (
    <main className="about">
      <div>
        <h1>For Students, by Students</h1>
        <div className="team">
          <div className="gaurav">
            <img src={gaurav} alt="gaurav" />
            <h2>Gaurav Panwar</h2>
            <h2></h2>
          </div>
          <div className="lucky">
            <img src={lucky} alt="" />
            <h2>Lucky Bairagi</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
