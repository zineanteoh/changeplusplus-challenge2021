import React, { Component } from "react";
import "./Songs.css";

class Songs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxPos: 5,
      yOffset: 0,
      yDelta: 30,
      song: {},
    };
  }

  loadSong(song) {
    this.setState({ song: song });
  }

  componentDidMount() {
    setInterval(() => {
      if (this.props.startGame) {
        if (this.state.yOffset < 500) {
          this.setState({ yOffset: this.state.yOffset + this.state.yDelta });
        } else {
          // song goes into box -> disappear
          this.props.runNextSong();
          this.resetSongYOffset();
        }
      }
    }, 750);
  }

  moveLeft() {
    this.setState({ boxPos: Math.max(1, this.state.boxPos - 1) });
  }

  moveRight() {
    this.setState({ boxPos: Math.min(10, this.state.boxPos + 1) });
  }

  resetSongYOffset() {
    this.setState({ boxPos: 5, yOffset: 0 });
  }

  render() {
    let leftPos = 20 + (this.state.boxPos - 1) * 98.3;

    if (this.props.startGame && !this.props.pauseGame) {
      return (
        <div>
          <div className="song" style={{ left: leftPos + "px", top: this.state.yOffset + "px" }}>
            <p>Dropping...</p>
            <p>{this.state.song["Title"]}</p>
          </div>
          <div className="box-select" style={{ left: leftPos - 7 + "px" }}></div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Songs;
