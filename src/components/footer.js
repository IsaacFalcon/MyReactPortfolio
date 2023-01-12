import React from "react";
import GitHub from "../images/github-mark.png"
import LinkedIn from "../images/LI-In-Bug.png"
import Insta from "../images/icons8-instagram-50.png"

function Footer() {
  return (
    <div className="footerflex">
      <a id="gitHub" href="https://github.com/IsaacFalcon">
        <img style={{ height: '50px'}} src={ GitHub } alt=""></img>
      </a>
      <a id="linkedIn" href="https://www.linkedin.com/in/isaac-falcon-461328213/">
        <img style={{ height: '50px'}} src={ LinkedIn } alt=""></img>
      </a>
      <a id="Instagram" href="https://www.instagram.com/isaacfalcon6490/">
        <img style={{ height: '50px'}} src={ Insta } alt=""></img>
      </a>
    </div>
  );
}

export default Footer;