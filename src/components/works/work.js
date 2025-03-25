import React from "react";
import "./work.css";
import HTML from "../../assets/HTML5.png";
import CSS from "../../assets/CSS3.png";
import JS from "../../assets/js.png";
import ReactImg from "../../assets/React.png";
import Tailwind from "../../assets/Tailwind CSS.png";
import Bootstrap from "../../assets/Bootstrap.png";
import Veeva from "../../assets/VEEV.png";
import Salesforce from "../../assets/Salesforce.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Skills</h2>

      <div className="Skills">
        <div className="mySkills">
          <img src={HTML} alt="HTML" className="worksImg" />
          <p>HTML</p>
        </div>
        <div className="mySkills">
          <img src={CSS} alt="CSS" className="worksImg" />
          <p>CSS</p>
        </div>
        <div className="mySkills">
          <img src={JS} alt="Javascript" className="worksImg" />
          <p>JavaScript</p>
        </div>
        <div className="mySkills">
          <img src={ReactImg} alt="React" className="worksImg" />
          <p>React</p>
        </div>
        <div className="mySkills">
          <img src={Tailwind} alt="Tailwind CSS" className="worksImg" />
          <p>Tailwind CSS</p>
        </div>
        <div className="mySkills">
          <img src={Bootstrap} alt="Bootstrap" className="worksImg" />
          <p>Bootstrap</p>
        </div>
        <div className="mySkills">
          <img src={Veeva} alt="Veeva Vault" className="worksImg" />
          <p>Veeva Vault</p>
        </div>
        <div className="mySkills">
          <img src={Salesforce} alt="Salesforce" className="worksImg" />
          <p>Salesforce</p>
        </div>
      </div>
    </section>
  );
};

export default Works;
