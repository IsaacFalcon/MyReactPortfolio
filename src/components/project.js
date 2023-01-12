import React from "react";
import "./components.css";
import wordHelpPic from "../images/wordhelppic.JPG"
import employeeTrPic from "../images/employeetrackerpic.JPG"
import passGenPic from "../images/passwordgenpic.JPG"
import teamGenPic from "../images/Teamgeneratorpic.JPG"
import theOfficePic from "../images/Theofficepic.JPG"
import weaApiPic from "../images/WeatherAPIPic.JPG"

function Project() {
  return (
    <div className="projects">
      <div className="wordhelp">
          <a id="word" className="wordhelpP" href="https://github.com/IsaacFalcon/Hackstreet-Boys">
          <img className="wordhelppic" src= { wordHelpPic } alt=""/>
            <div>
              <h3>Word Help API Project</h3>
            </div>
          </a>
        </div>

        <div className="passwordGen">
          <a id="work" className="passwordGenP" href="https://isaacfalcon.github.io/HomeworkModule1Challenge/">
          <img className="wordhelppic" src= { passGenPic } alt=""/>
            <div>
              <h3>Password Generator</h3>
            </div>
          </a>
        </div>

        <div className="teamGen">
          <a id="work" className="teamGenP" href="https://github.com/IsaacFalcon/TeamProfileGenerator/">
          <img className="wordhelppic" src= { teamGenPic } alt=""/>
            <div>
              <h3>Team Generator</h3>
            </div>
          </a>
        </div>

        <div className="theOffice">
          <a id="work" className="theOfficeP" href="https://github.com/IsaacFalcon/TheOfficeJavascriptQuiz/">
          <img className="wordhelppic" src= { theOfficePic } alt=""/>
            <div>
              <h3>The Office Quiz</h3>
            </div>
          </a>
        </div>

        <div className="weatherApi">
          <a id="work" className="weatherApiP" href="https://isaacfalcon.github.io/HomeworkModule1Challenge/">
          <img className="wordhelppic" src= { weaApiPic } alt=""/>
            <div>
              <h3>Weather Api Project</h3>
            </div>
          </a>
        </div>

        <div className="employeeTr">
          <a id="work" className="employeeTrP" href="https://isaacfalcon.github.io/HomeworkModule1Challenge/">
          <img className="wordhelppic" src= { employeeTrPic } alt=""/>
            <div>
              <h3>Employee Tracker</h3>
            </div>
          </a>
        </div>
    </div>
  );
}

export default Project;