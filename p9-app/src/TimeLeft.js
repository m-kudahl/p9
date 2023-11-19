import React from "react";
import "./TimeLeft.css";

import Data from "./Data.json";

export default function TimeLeft() {
  const timeLeft = Data.time.timeleft;

  return (
    <div className="timeleft">
      <p>Time Left</p>
      <p>{timeLeft}</p>
    </div>
  );
}
