import React, { Component } from "react";
import Boxes from "./Boxes";
import "./Gameplay.css";

class Gameplay extends Component {
  render() {
    return (
      <div className="gameplay">
        <Boxes />
      </div>
    );
  }
}

export default Gameplay;
