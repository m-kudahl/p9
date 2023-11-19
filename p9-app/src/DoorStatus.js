import React from "react";
import "./DoorStatus.css";

import Data from "./Data.json";

export default function TimeEstimated() {
  const doorStatus = Data.door.status;

  return (
    <div className="doorDiv">
      <h1>Door Status</h1>
      <p>{doorStatus}</p>
    </div>
  );
}
