import React, { Component } from "react";
import "./Boxes.css";

class Boxes extends Component {
  render() {
    return (
      <div className="boxes">
        <div className="box">TOP 10</div>
        <div className="box">#11-20</div>
        <div className="box">#21-30</div>
        <div className="box">#31-40</div>
        <div className="box">#41-50</div>
        <div className="box">#51-60</div>
        <div className="box">#61-70</div>
        <div className="box">#71-80</div>
        <div className="box">#81-90</div>
        <div className="box">#91-100</div>
      </div>
    );
  }
}

export default Boxes;
