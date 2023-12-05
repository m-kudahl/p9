import { useState, useRef, useEffect } from "react";

export function useTimer() {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const [isRunning, setIsRunning] = useState(false);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);

    return { total, hours, minutes, seconds };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:10:00");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      if (isRunning) startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadline = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 100);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadline());
    return () => {
      if (Ref.current) clearInterval(Ref.current);
    };
  }, [isRunning]); 

  return { timer, clearTimer, getDeadline, setIsRunning, isRunning };
}
