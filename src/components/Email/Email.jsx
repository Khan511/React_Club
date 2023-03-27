import "./Email.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Email = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4903rlq",
        "template_levtf87",
        form.current,
        "wjNnYt-Z3jVm7wIP7"
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
    <div className="section">
      <div className="left_e">
        <div className="top_line"></div>
        <span className="stroke-text">READY TO </span>
        LEVEL UP YOUR BODY
        <span className="stroke-text"> WITH US? </span>
      </div>
      <form className="right_e" ref={form} onSubmit={sendEmail}>
        <input
          name="user_email"
          type="tex"
          placeholder="Enter your Email..."
          className="content"
        />
        <button className="btn">Join Now</button>
      </form>
    </div>
  );
};

export default Email;
