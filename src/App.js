import { useCallback, useState } from "react";
import "./App.css";
import PreText from "./Component/PreTest.component";
import Quiz from "./Component/Quiz.component";

function App() {
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [testState, setTestState] = useState(0);
  const [email, setEmail] = useState("");
  const onEmailChange = (newEmail) => {
    setEmail(newEmail);
  };
  const moveNextStep = useCallback(() => {
    setTestState((prevTestState) => prevTestState + 1);
  }, []);
  const onSetAnswer = (questionNumber, answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionNumber] = answer;
      return newAnswers;
    });
  };
  const onSetQuestions = useCallback(
    (questions) => {
      setQuestions(questions);
      let newAnswers = new Array(questions.length).fill(null);
      setAnswers(newAnswers);
    },
    [setAnswers, setQuestions]
  );

  return (
    <div className="App">
      {testState === 0 && (
        <PreText
          email={email}
          onEmailChange={onEmailChange}
          onEmailSubmission={moveNextStep}
        />
      )}
      {testState !== 0 && (
        <Quiz
          onSetAnswer={onSetAnswer}
          questions={questions}
          setQuestions={onSetQuestions}
          answers={answers}
          onQuizSubmission={moveNextStep}
          mode={testState === 1 ? "quiz" : "report"}
        />
      )}
    </div>
  );
}

export default App;
