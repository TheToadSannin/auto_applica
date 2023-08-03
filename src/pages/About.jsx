import React from "react";
import gaurav from "../assets/gaurav_avatar.png";
import lucky from "../assets/lucky_avatar.png";

const About = () => {
  return (
    <main className="about">
      <div>
        <h1>For Students, by Students</h1>

        <div className="gaurav">
          <div>
            <h2>Gaurav <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Panwar</h2>
            <p>I am a programmer, designer and chess lover</p>
          </div>
          <img src={gaurav} alt="gaurav" />
        </div>

        <div className="lucky">
          <img src={lucky} alt="" />
          <div>
          <h2>Lucky <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bairagi</h2>
            <p>I am a programmer, designer and anime lover</p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default About;
