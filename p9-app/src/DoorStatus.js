import React from "react";
import "./DoorStatus.css";

import safetyData from "./safetyData.json";

export default function TimeEstimated() {
  const doorStatus = safetyData.door.status;

  return (
    <div className="doorDiv">
      <h1>Door Status</h1>

      <p>{doorStatus}</p>
    </div>
  );
}
