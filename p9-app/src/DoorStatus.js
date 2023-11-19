import React from "react";
import "./DoorStatus.css";

import SafetyData from "./SafetyData.json";

export default function TimeEstimated() {
  const doorStatus = SafetyData.door.status;

  return (
    <div className="doorDiv">
      <h1>Door Status</h1>

      <p>{doorStatus}</p>
    </div>
  );
}
