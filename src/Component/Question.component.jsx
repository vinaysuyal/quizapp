import React from "react";
import classes from "../styles/Question.module.css";
import { decodeHTMLEntities } from "../utils";

const Question = ({ index, question, onAnswerSelect, answer, mode }) => {
  const isReportMode = mode === "report";

  return (
    <div className={classes.questionContainer}>
      <div className={classes.questionText}>{`${index}. ${decodeHTMLEntities(
        question.question
      )}`}</div>
      <div className={classes.questionMeta}>
        <span className={classes.category}>{question.category}</span>
        <span className={classes.difficulty}>{question.difficulty}</span>
      </div>
      <div className={classes["options-container"]}>
        {question.options.map((option) => (
          <div className={classes.option} key={option}>
            <input
              className={classes.radioInput}
              onChange={() => onAnswerSelect(index - 1, option)}
              disabled={isReportMode}
              name={`radio-group-${index}`}
              type="radio"
              value={option}
              checked={answer === option}
            />
            <label
              className={`${classes.optionLabel} ${
                isReportMode && question.correct_answer === option
                  ? classes.correctAnswer
                  : isReportMode && answer === option
                  ? classes.incorrectAnswer
                  : ""
              } ${isReportMode ? classes.disabled : ""}`}
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
