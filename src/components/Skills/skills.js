import React from "react";
import "./skills.css";

import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">About Mee</span>
      <p className="introTextpara">
        I am a skilled and passionate Frontend Developer with 1.7 years of
        experience in creating visually appealing and user-friendly
        websites and Email templates. My Journey includes designing,
        developing, testing, and maintaining responsive email templates
        and web applications. I have a strong understanding of design and
        a keen eye for detail. I am proficient in technologies such as
        React for dynamic interfaces and Tailwind CSS for streamlined
        styling.
      </p>

      <div className="skillBars">


        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="skillBar"
        >
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              I specialize in creating responsive, user-friendly, and visually
              appealing websites that prioritize both functionality and
              aesthetics. With a focus on clean layouts, intuitive navigation,
              and mobile optimization, I ensure that each site delivers an
              engaging experience across all devices.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="skillBar"
        >
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Email Template Design</h2>
            <p>
              I design responsive email templates that combine strong visual
              appeal with clear messaging. My templates are crafted to ensure
              consistent branding and increase email engagement, whether for
              marketing, newsletters, or customer communications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
