import React from "react";
import "./intro.css";
import bg from "../../assets/new_bg.jpeg";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const Intro = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:ganeshsimha2002@gmail.com";
  };
  return (
    <section id="intro">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="introContent"
      >
        <span className="hello">Hello</span>
        <span className="introText">
          I'm<span className="introName"> Ganesh</span>
          <br />
          Frontend Developer
        </span>
        <p className="introPara">
          I am a skilled web designer with expereince in creating <br />
          visually appealing and user fiendly websites and Email Templates
        </p>

        <Link>
          <button onClick={handleEmailClick} className="btn">
            <img src={btnImg} alt="hire me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </motion.div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
