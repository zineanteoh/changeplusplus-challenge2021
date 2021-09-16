import React, { Component } from "react";
import "./Songs.css";

class Songs extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // Vertical position
  // Horizontal position {i = 1, 2, ..., 10}

  render() {
    return (
      <div className="song">
        <div className="song-title"></div>
        <div className="song-artist"></div>
      </div>
    );
  }
}

export default Songs;
