import React, { Component } from "react";
import "./Songs.css";

class Songs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      box_val: 0,
      yoffset: 0,
      ydelta: 25,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.yoffset <= 500) {
        this.setState({ yoffset: this.state.yoffset + this.state.ydelta });
      } else {
      }
    }, 1000);
  }

  moveLeft = () => {
    this.setState({ box_val: Math.min(0, this.state.box_val - 1) });
  };

  moveRight = () => {
    this.setState({ box_val: Math.max(10, this.state.box_val + 1) });
  };

  // Vertical position
  // Horizontal position {i = 1, 2, ..., 10}

  render() {
    return (
      <div className="song" style={{ left: "20px", top: this.state.yoffset + "px" }}>
        <div className="song-title"></div>
        <div className="song-artist"></div>
      </div>
    );
  }
}

export default Songs;
