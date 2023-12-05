import React from "react";
import { useTimer } from "../Usetimer";

export default function StartButton({ setIsRunning, isRunning }) {
  const { clearTimer, getDeadline } = useTimer();

  const handleClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };
  const buttonStyle = {
    position: "absolute",
    width: "70%",
    height: "20%",
    left: "15%",
    top: "your-top-value",
    borderRadius: "8px",
    border: "1px solid #000000",
    background: isRunning ? "#62BE59" : "#B7B7B7",
    fontSize: "calc(2vw + 2vh)",
  };

  return (
    <button style={buttonStyle} onClick={() => { handleClick(); clearTimer(getDeadline()); }}>
      {isRunning ? "PAUSE" : "START"}
    </button>
  );
}