import React, { Component } from "react";
import "./Main.css";
import Gameplay from "./Gameplay";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Gameplay />
      </div>
    );
  }
}

export default Main;
