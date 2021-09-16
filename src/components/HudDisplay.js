import React, { Component } from "react";
import "./HudDisplay.css";

class HudDisplay extends Component {
  render() {
    return (
      <div className="hud-display">
        <div className="current-song"></div>
        <div className="next-song"></div>
      </div>
    );
  }
}

export default HudDisplay;
