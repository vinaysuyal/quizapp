import React, { useEffect, useState } from "react";
import classes from "../styles/Quiz.module.css";
import { getQuizData } from "../api/quizApi";
import Question from "./Question.component";
import Navigation from "./Navigation.component";
import Timer from "./Timer.component";

const Quiz = ({
  onSetAnswer,
  onQuizSubmission,
  questions,
  setQuestions,
  answers,
  mode,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loadingDetails, setLoadingDetails] = useState(true);
  const mergeOptionsRandomly = (incorrectOptions, correctOption) => {
    const optionsLength = incorrectOptions.length + 1;
    const index = Math.floor(Math.random() * optionsLength);
    const options = [...incorrectOptions];
    options.splice(index, 0, correctOption);
    return options;
  };

  useEffect(() => {
    getQuizData()
      .then((res) => res.json())
      .then((res) => {
        const questionsData = res.results.map((question) => {
          return {
            ...question,
            options: mergeOptionsRandomly(
              question.incorrect_answers,
              question.correct_answer
            ),
          };
        });
        setQuestions(questionsData);
        setLoadingDetails(false);
      });
  }, []);

  const endTest = () => {
    onQuizSubmission();
    setCurrentQuestion(0);
  };
  const getCorrectQuestionsCount = () => {
    let correctAnswerCount = 0;
    for (let i = 0; i < questions.length; i++) {
      console.log(answers[i], questions[i].correct_answer);
      if (answers[i] === questions[i].correct_answer) {
        correctAnswerCount += 1;
      }
    }
    return correctAnswerCount;
  };

  return (
    <div className={classes.quizContainer}>
      {mode === "quiz" && questions.length > 0 ? (
        <Timer initialTime={1800} timeUpTrigger={endTest} />
      ) : (
        mode === "report" && (
          <>
            <h4>{`Test Over. Your score is ${getCorrectQuestionsCount()}/${
              questions.length
            }`}</h4>
            <h5>You can now compare your answers.</h5>
          </>
        )
      )}
      {loadingDetails && (
        <h5>
          Getting Your Test Ready. This typically takes less than a minute.
        </h5>
      )}

      {questions.length > 0 && (
        <>
          <div className={classes.questionBox}>
            <Question
              onAnswerSelect={onSetAnswer}
              index={currentQuestion + 1}
              question={questions[currentQuestion]}
              answer={answers[currentQuestion]}
              mode={mode}
            />
          </div>
          <div className={classes.navigationButtons}>
            <button
              className={`${classes.navButton} ${
                currentQuestion === 0 ? classes.disabledButton : ""
              }`}
              onClick={() =>
                setCurrentQuestion((prevQuestion) => prevQuestion - 1)
              }
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button
              className={`${classes.navButton} ${
                currentQuestion === questions.length - 1
                  ? classes.disabledButton
                  : ""
              }`}
              onClick={() =>
                setCurrentQuestion((prevQuestion) => prevQuestion + 1)
              }
              disabled={currentQuestion === questions.length - 1}
            >
              Next
            </button>
          </div>
          {mode === "quiz" && (
            <button className={classes.submitButton} onClick={endTest}>
              Submit Test
            </button>
          )}
        </>
      )}
      <Navigation
        onNavigationClick={(newQuestion) => setCurrentQuestion(newQuestion)}
        answers={answers}
        currentQuestion={currentQuestion}
      />
    </div>
  );
};

export default Quiz;
