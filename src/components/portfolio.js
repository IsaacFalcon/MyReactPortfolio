import React from "react";
import Project from "./project";
import { Parallax } from "react-parallax";

function Portfolio() {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        strength={-200}
    >
      <h1>Hey guys! I'm a Portfolio!</h1>
      <Project>
        
      </Project>
      <div style={{ height: '680px' }} />
    </Parallax>
    </div>
  );
}

export default Portfolio;