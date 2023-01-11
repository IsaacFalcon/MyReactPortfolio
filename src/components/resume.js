import React from "react";
import { Parallax } from "react-parallax";
import MyResume from "../Resume.docx"

function Resume() {
  return (
    <div>
        
      <div class="aboutme1">
      <Parallax
        blur={{ min: -15, max: 15 }}
        strength={-200}
    >
        <section id="aboutme" class="aboutme">
          <h2>Resume</h2>
          <button className="dlbutton"><a href={MyResume} download>Download</a></button>
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
        <div style={{ height: '680px' }} />
    </Parallax>
      </div>
    </div>
  );
}

export default Resume;