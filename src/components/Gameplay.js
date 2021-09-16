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
      songsInQueue: {},
      songHistory: [],
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
    // Load two random songs and store in currentSong and nextSong
    this.loadRandomSong()
      .then(() => this.updateHUD())
      .then(() => this.loadRandomSong())
      .then(() => this.updateHUD())
      .then(() => this.loadRandomSong())
      .then(() => this.setState({ startGame: true }));

    // this.setState({ startGame: true });
  }

  updateHUD() {
    // Saves currentSong into songHistory
    if (this.state.startGame) {
      this.addCurrentSongToHistory();
    }
    // currentSong becomes nextSong & nextSong becomes songsInQueue
    this.setState({ currentSong: this.state.nextSong, nextSong: this.state.songsInQueue });
    this.hud.current.updateHUD(this.state.nextSong);
  }

  async loadRandomSong() {
    // Load a random song from SongAPI and save to songInQueue
    let song = await SongAPI();
    // console.log("we got: ", song);
    while (!this.isNewSong(song)) {
      console.log("getting random song...");
      song = await SongAPI();
    }
    this.setState({ songsInQueue: song });
  }

  isNewSong(song) {
    // Checks if song exists in songHistory
    for (let i = 0; i < this.state.songHistory.length; i++) {
      // const {title, artist, position} = this.state.songHistory[i];
      if (this.isSongEqual(this.state.songHistory[i], song)) {
        console.log("NEW SONG CAUGHT!");
        console.log(song);
        return false;
      }
    }
    return true;
  }

  isSongEqual(song1, song2) {
    // Compare two objects' keys and values
    let song1Key = Object.keys(song1);
    let song2Key = Object.keys(song2);

    if (song1Key.length === song2Key.length) {
      for (let i = 0; i < song1Key.length; i++) {
        if (song1[song1Key[i]] !== song2[song1Key[i]]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  addCurrentSongToHistory() {
    if (this.state.currentSong) {
      console.log("CURRENT: ", this.state.currentSong);
      let newHistory = this.state.songHistory.slice();
      newHistory.push(this.state.currentSong);
      console.log("post_history: ", newHistory);
      this.setState({ songHistory: newHistory });
    }
  }

  render() {
    return (
      <div className="gameplay">
        {!this.state.startGame && <Menu ref={this.menu} />}
        <HudDisplay ref={this.hud} />
        {this.state.startGame && <Songs ref={this.song} startGame={this.state.startGame} />}
        <Boxes ref={this.boxes} />
      </div>
    );
  }
}

export default Gameplay;
