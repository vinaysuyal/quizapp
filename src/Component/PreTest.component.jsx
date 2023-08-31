import React from "react";
import { validateEmail } from "../utils";
import styles from "../styles/PreText.module.css";

const PreText = ({ onEmailSubmission, onEmailChange, email }) => {
  const onContinueClick = () => {
    if (validateEmail(email)) {
      onEmailSubmission(email);
    } else {
      alert("Incorrect Email Format");
    }
  };

  return (
    <div className={styles.container}>
      <h4>Enter your email address before taking the test.</h4>
      <input
        className={styles.email}
        onChange={(e) => {
          onEmailChange(e.target.value);
        }}
        type="email"
        id="email"
        name="email"
      />
      <button
        className={styles.continue}
        onClick={(e) => {
          e.preventDefault();
          onContinueClick();
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default PreText;
