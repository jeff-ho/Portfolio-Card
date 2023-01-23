import React from "react";

export default function Button({ isOpen }) {
  return (
    <button
      className="email-button"
      onClick={() => {
        isOpen(true);
      }}
    >
      <img src="../../public/email.png"></img>
      Email
    </button>
  );
}
