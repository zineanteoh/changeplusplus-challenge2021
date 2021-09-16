import React, { Component } from "react";
import "./Songs.css";

class Songs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxPos: 1,
      yOffset: 0,
      yDelta: 25,
      song: {},
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.yOffset <= 500) {
        this.setState({ yOffset: this.state.yOffset + this.state.yDelta });
      } else {
      }
    }, 1000);
  }

  moveLeft = () => {
    console.log("MOVIGN LEFT");
    this.setState({ boxPos: Math.max(1, this.state.boxPos - 1) });
  };

  moveRight = () => {
    console.log("MOVIGN RIGHT");
    this.setState({ boxPos: Math.min(10, this.state.boxPos + 1) });
  };

  render() {
    let leftPos = 20 + (this.state.boxPos - 1) * 98.3 + "px";
    return (
      <div className="song" style={{ left: leftPos, top: this.state.yOffset + "px" }}>
        <div className="song-title"></div>
        <div className="song-artist"></div>
      </div>
    );
  }
}

export default Songs;
