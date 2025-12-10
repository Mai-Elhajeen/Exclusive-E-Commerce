import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label }) => (
    <div className={styles.timeBox}>
      <span className={styles.label}>{label}</span>
      <span className={styles.number}>{value}</span>
    </div>
  );

  return (
    <div className={styles.timerWrapper}>
      <TimeBox value={timeLeft.days} label="Days" />
      <span className={styles.separator}>:</span>
      <TimeBox value={timeLeft.hours} label="Hours" />
      <span className={styles.separator}>:</span>
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <span className={styles.separator}>:</span>
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Timer;
