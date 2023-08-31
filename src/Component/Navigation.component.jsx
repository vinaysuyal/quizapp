import React from "react";
import classes from "../styles/Navigation.module.css";

const Navigation = ({ currentQuestion, answers, onNavigationClick }) => {
  return (
    <div className={classes.navigationContainer}>
      {answers.map((answer, index) => (
        <button
          className={`${classes.navigationButton} ${
            answer ? classes.answered : classes.unanswered
          } ${currentQuestion === index ? classes.selected : ""}`}
          key={index}
          onClick={() => onNavigationClick(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
