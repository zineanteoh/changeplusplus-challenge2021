import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="sky">{/* Bunch of music pieces */}</div>
        <div className="user"></div>
        <div className="boxes"></div>
      </div>
    );
  }
}

export default Main;
