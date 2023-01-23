import React, { useState } from "react";
import ReactDom from "react-dom";
import "./Modal.css";

export default function Modal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(email, message)
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Lets Chat!</h1>
          <p>Your Email</p>
          <input
            type="text"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p>Message</p>
          <textarea
            type="text"
            className="message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="modal-buttons">
            <button className="submit-button" type="submit">
              Submit
            </button>

            <img
              className="close-button"
              onClick={onClose}
              src="../../public/close.png"
            ></img>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}
