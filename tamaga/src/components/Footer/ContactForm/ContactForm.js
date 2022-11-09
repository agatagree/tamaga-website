import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-layout">
      <div className="contact-wrapper">
        <h4 className="H04--bold contact-title">Contact us</h4>
        <div className="contact-section">
        <div className="contact-info">
          <h6 className="H06 contact-text">
            We work locally and internationally.
          </h6>
          <h6 className="H06 contact-text">
            Get in touch and let’s build something together info@tamagastudio.pl
          </h6>
          <h6 className="H06 contact-text">
            Follow us on{" "}
            <a
              className="link24"
              href="https://www.instagram.com/tamagastudio/"
            >
              Instagram
            </a>
            ,{" "}
            <a className="link24" href="https://www.facebook.com/tamagastudio/">
              Facebook
            </a>
          </h6>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-section">
            <label className="body-text-xs">Name</label>
            <input
              className="body-text-sm input-form"
              type="text"
              name="user_name"
              placeholder="Your Name"
            />
          </div>
          <div className="form-section">
            <label className="body-text-xs">Email</label>
            <input
              className="body-text-sm input-form"
              type="email"
              name="user_email"
              placeholder="Your E-mail"
            />
          </div>
          <div className="form-section">
            <label className="body-text-xs">Message</label>
            <textarea
              className="body-text-sm input-form"
              name="message"
              placeholder="Tell us about your project"
              rows="5"
            />
          </div>
          <input
            type="submit"
            value="Send"
            className="btn-primary-sm-default form-button"
          />
        </form>
        </div>
      </div>
    </div>
  );
};
