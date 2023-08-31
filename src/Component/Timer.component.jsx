import React, { useEffect, useState } from "react";
import { convertSecondsToMinutesAndSeconds } from "../utils";
import styles from "../styles/Timer.module.css";

const Timer = ({ initialTime, timeUpTrigger }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      timeUpTrigger();
    }, initialTime * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  let timerClassName = styles.timerContainer;

  if (timeLeft <= 300 && timeLeft > 60) {
    timerClassName += ` ${styles.fiveToOne}`;
  } else if (timeLeft <= 60 && timeLeft > 0) {
    timerClassName += ` ${styles.oneToZero}`;
  }

  return (
    <div className={timerClassName}>
      {convertSecondsToMinutesAndSeconds(timeLeft)}
    </div>
  );
};

export default Timer;
