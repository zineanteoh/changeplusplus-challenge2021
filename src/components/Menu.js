import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h1>The DJ Challenge</h1>
        <h5>How good are you at ranking popular songs?</h5>
        <br />
        <h3>Goal of the game:</h3>
        <p>Random songs will fall from the sky</p>
        <p>Place the songs into the correct boxes (we won't tell you which one)</p>
        <p>You get points if you are correct</p>
        <p>Easy Peazy!</p>
        <br />
        <h3>How to Play:</h3>
        <p>Left/Right Arrow Keys to move Songs</p>
        <p>Spacebar to place song into box</p>
        <button>Start Game!</button>
      </div>
    );
  }
}

export default Menu;
