import React from "react";
import './Alertbox.css'

export default function Alertbox() {
  return (
    <div className="BackgroundBox">
        <div className="CenterBox"> 

            <div className="AlertHeader">
                ALERTS
            </div>
            <div className="AlertList">
                <div className="AlertEntry" style={{background: 'red'}}> ERROR 7: PLACEHOLDER </div>
                <div className="AlertEntry" style={{background: 'orange'}}> WARNING: PLACEHOLDER </div>
                <div className="AlertEntry"> Placeholder </div>
            </div>

        </div> 
    </div>
  )
}
