import React, { Component } from "react";
import Boxes from "./Boxes";
import Songs from "./Songs";
import SongAPI from "../API/SongAPI";
import HudDisplay from "./HudDisplay";
import Menu from "./Menu";
import "./Gameplay.css";

// start game: how many songs to choose
// get random song from API
// animate song falling down
// keyboard controls / event listeners
// buttons to see ranking

class Gameplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startGame: false,
      currentSong: {},
      nextSong: {},
      songInQueue: {},
      songHistory: {},
    };

    // this.getRandomSong = this.loadRandomSong.bind(this);
    this.menu = React.createRef();
    this.song = React.createRef();
    this.hud = React.createRef();
    this.boxes = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (this.state.startGame) {
        if (e.key === "ArrowLeft") {
          this.song.current.moveLeft();
        } else if (e.key === "ArrowRight") {
          this.song.current.moveRight();
        } else if (e.key === " ") {
          // Update HUD Display
          this.updateHUD();
          // Load a random song from SongAPI
          this.loadRandomSong();
        }
      } else {
        if (e.key === " ") {
          this.initiateGame();
        }
      }
    });
  }

  initiateGame() {
    this.setState({ startGame: true });
    // Load two random songs and store in currentSong and nextSong
    this.loadRandomSong()
      .then(() => this.updateHUD())
      .then(() => this.loadRandomSong())
      .then(() => this.updateHUD());
  }

  updateHUD() {
    // currentSong becomes nextSong & nextSong becomes songInQueue
    this.setState({ currentSong: this.state.nextSong, nextSong: this.state.songInQueue });
    this.hud.current.updateHUD(this.state.nextSong);
  }

  async loadRandomSong() {
    // Load a random song from SongAPI and save to songInQueue
    let song = await SongAPI();
    console.log("we got: ", song);
    this.setState({ songInQueue: song });
  }

  render() {
    return (
      <div className="gameplay">
        <Menu ref={this.menu} />
        <HudDisplay ref={this.hud} />
        <Songs ref={this.song} startGame={this.state.startGame} />
        <Boxes ref={this.boxes} />
      </div>
    );
  }
}

export default Gameplay;
