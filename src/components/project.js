import React from "react";
import "./components.css";
import wordHelpPic from "../images/wordhelppic.JPG"
import employeeTrPic from "../images/employeetrackerpic.JPG"

function Project() {
  return (
    <div className="projects">
      <div className="wordhelp">
          <a id="word" className="wordhelpP" href="https://isaacfalcon.github.io/HomeworkModule1Challenge/">
          <img className="wordhelppic" src= { wordHelpPic } alt=""/>
            <div>
              <h3>Word Help API Project</h3>
            </div>
          </a>
        </div>

        <div className="passwordGen">
          <a id="work" className="passwordGenP" href="https://isaacfalcon.github.io/HomeworkModule1Challenge/">
          <img className="wordhelppic" src= { wordHelpPic } alt=""/>
            <div>
              <h3>Refactor Project</h3>
            </div>
          </a>
        </div>

        <div className="teamGen">
          <a id="work" className="teamGenP" href="https://isaacfalcon.github.io/HomeworkModule1Challenge/">
          <img className="wordhelppic" src= { wordHelpPic } alt=""/>
            <div>
              <h3>Refactor Project</h3>
            </div>
          </a>
        </div>

        <div className="theOffice">
          <a id="work" className="theOfficeP" href="https://isaacfalcon.github.io/HomeworkModule1Challenge/">
          <img className="wordhelppic" src= { wordHelpPic } alt=""/>
            <div>
              <h3>Refactor Project</h3>
            </div>
          </a>
        </div>

        <div className="weatherApi">
          <a id="work" className="weatherApiP" href="https://isaacfalcon.github.io/HomeworkModule1Challenge/">
          <img className="wordhelppic" src= { wordHelpPic } alt=""/>
            <div>
              <h3>Refactor Project</h3>
            </div>
          </a>
        </div>

        <div className="employeeTr">
          <a id="work" className="employeeTrP" href="https://isaacfalcon.github.io/HomeworkModule1Challenge/">
          <img className="wordhelppic" src= { employeeTrPic } alt=""/>
            <div>
              <h3>Refactor Project</h3>
            </div>
          </a>
        </div>
    </div>
  );
}

export default Project;