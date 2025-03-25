import React from "react";
import "./experience.css";

import indegene from "../../assets/indegene_logo.jpg";

import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const Experience = () => {
  return (
    <section id="expercience">
      <span className="expercienceTitle">Experience</span>

      <div className="expercienceBars">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="expercienceBar"
        >
          <img src={indegene} alt="Indegene" className="expercienceBarImg" />
          <div className="expercienceBarText">
            <h2>Indegene</h2>
            <h4>Web Developer Trainee</h4>
            <h5>August 2023 - February 2025</h5>
            <p>
              I specialize in creating responsive, user-friendly, and visually
              appealing websites that prioritize both functionality and
              aesthetics. With a focus on clean layouts, intuitive navigation,
              and mobile optimization, I ensure that each site delivers an
              engaging experience across all devices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
