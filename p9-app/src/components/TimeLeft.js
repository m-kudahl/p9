import React from "react";
import { useTimer } from "./Usetimer.js";
import "./TimeLeft.css";

export default function TimeLeft() {
  const { timer, clearTimer, getDeadline} = useTimer();

  const onClickReset = () => {
    clearTimer(getDeadline());
  };

  return (
    <div className="TimeLeft">
      <p>TIME LEFT</p>
      <p>{timer}</p>
      <button onClick={onClickReset}></button>
      
    </div>
  );
}
