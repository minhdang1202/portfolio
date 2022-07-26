import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ukb33ki",
        "template_3rks5hg",
        form.current,
        "6NXkMYrQ3boMVwUxS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="contact__box">
          <div className="contact__meta">
            <h1 className="hire__text">Contact Me.</h1>
            <p className="hire__text white">Connect with me via phone:</p>
            <p className="hire__text white">
              <a href="tel:+84963886106">
                <strong>+8496 38 86 106</strong> or email{" "}
              </a>
              <a href="mailto:vuminhdang20@gmail.com">
                <strong>vuminhdang20@gmail.com</strong>
              </a>
            </p>
          </div>
          <form className="input__box" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="contact name"
              placeholder="Your name *"
              name="user_name"
              required
            />
            <input
              type="text"
              className="contact email"
              placeholder="Your Email *"
              name="user_email"
              required
            />
            <input
              type="text"
              className="contact subject"
              placeholder="Write a Subject"
              name="subject"
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Write Your message"
            ></textarea>
            <button className="btn contact pointer" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
