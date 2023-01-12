import React from "react";
import profile from "../profile.JPG";

function About() {
  return (
    <div>
        
      <div className="about">
        <section id="aboutme" class="aboutme">
          <img style={{ height: '400px' }} src= {profile} alt="img"></img>
          <h2>Isaac Falcon's Portfolio</h2>
          <h3>About Me</h3>
        </section>

        <section id="work" class="main aboutmecontent">
          <p>
            My Name is Isaac Falcon I am married to an amazing wife and have 3
            beautiful little girls. I am currently a research Technologist and
            soon to be a full stack web developer!
          </p>
          <p>
            This portfolio is still a work in progress and I look forward to
            putting many great projects to come in the future.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
