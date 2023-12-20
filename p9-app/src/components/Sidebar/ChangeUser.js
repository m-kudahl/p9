import React from "react";
import "./ChangeUser.css";
import Account from "../Images/Account.png";

export default function ChangeUser() {
  return (
    <div className="ChangeUser">
      <a href="/Home">
        <img src={Account} alt="Account" />
        <span>LOGGED IN AS</span>
      </a>
    </div>
  );
}
