import React, { Component } from "react";
import "./HudDisplay.css";

class HudDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSong: {},
      nextSong: {},
    };
  }

  updateHUD(nextSong) {
    this.setState({ currentSong: this.state.nextSong, nextSong: nextSong });
  }

  render() {
    if (!this.props.pauseGame) {
      return (
        <div className="hud-display">
          <div className="current-song">
            <h4>Current Song</h4>
            <p>"{this.state.currentSong.Title}"</p>
            <p>by {this.state.currentSong.Artist}</p>
          </div>
          <div className="next-song">
            <h4>Next Song</h4>
            <p>"{this.state.nextSong.Title}"</p>
            <p>by {this.state.nextSong.Artist}</p>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default HudDisplay;
