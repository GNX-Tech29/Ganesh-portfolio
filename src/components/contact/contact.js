import React, { useRef } from "react";
import "./contact.css";

import Linkedin from "../../assets/linkedin.png";
import GmailImg from "../../assets/gmail.png";
import GitHubImg from "../../assets/icons8-github-50.png";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ybbhsii", "template_pnqjwqf", form.current, {
        publicKey: "6jfonQ16dthFnlJvi",
      })
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent !");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunites.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
            required
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.linkedin.com/in/ganesh-n-11851b25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"> <img src={Linkedin} alt="LinkedIn" className="link" /></a>
            <a href="mailto:ganeshsimha2002@gmail.com"> <img src={GmailImg} alt="Gmail" className="link" /></a>
            <a href="https://github.com/GNX-Tech29" target="_blank" rel="noopener noreferrer"> <img src={GitHubImg} alt="GitHub" className="link" /></a>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
