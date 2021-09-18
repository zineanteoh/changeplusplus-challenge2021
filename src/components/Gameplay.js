import React, { Component } from "react";
import Boxes from "./Boxes";
import Songs from "./Songs";
import SongAPI from "../API/SongAPI";
import HudDisplay from "./HudDisplay";
import Menu from "./Menu";
import Results, { checkUserAnswer, RANKING } from "./Results";
import "./Gameplay.css";

// TODO:
// Alert user immediately of their correctness
// Press [P] to see results
// .. press [P] to resume game

class Gameplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startGame: false,
      pauseGame: false,
      alertMessage: "",
      currentSong: {},
      nextSong: {},
      songInQueue: {},
      songHistory: [],
    };

    this.menu = React.createRef();
    this.song = React.createRef();
    this.hud = React.createRef();
    this.boxes = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (this.state.startGame) {
        if (!this.state.pauseGame) {
          if (e.key === "ArrowLeft") {
            this.song.current.moveLeft();
          } else if (e.key === "ArrowRight") {
            this.song.current.moveRight();
          } else if (e.key === " ") {
            this.revealAnswer();
            this.runNextSong();
          } else if (e.key === "p") {
            // pause game
            this.setState({ pauseGame: !this.state.pauseGame });
          }
        } else {
          if (e.key === "p") {
            // resume game
            this.setState({ pauseGame: !this.state.pauseGame });
            // this.hud.current.updateHUD();
          }
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
      .then(() => this.runNextSong())
      .then(() => this.loadRandomSong())
      .then(() => this.runNextSong())
      .then(() => this.loadRandomSong())
      .then(() => this.setState({ startGame: true }));
  }

  revealAnswer() {
    if (checkUserAnswer(RANKING[this.song.current.state.boxPos - 1], this.song.current.state.song.Position)) {
      this.setState({ alertMessage: congratulateMessage() });
    } else {
      this.setState({ alertMessage: encouragementMessage() });
    }
  }

  runNextSong = () => {
    // Saves currentSong into songHistory
    if (this.state.startGame) {
      this.addCurrentSongToHistory();
    }
    // currentSong becomes nextSong & nextSong becomes songInQueue
    this.setState({ currentSong: this.state.nextSong, nextSong: this.state.songInQueue });
    this.hud.current.updateHUD(this.state.nextSong);

    // Save currentSong into Song
    this.song.current.loadSong(this.state.currentSong);

    // Load a random song from SongAPI into songInQueue
    this.loadRandomSong();

    // Reset song yOffset
    this.song.current.resetSongYOffset();
  };

  async loadRandomSong() {
    // Load a random song from SongAPI and save to songInQueue
    let song = await SongAPI();
    // console.log("we got: ", song);
    while (!this.isNewSong(song)) {
      // console.log("getting random song...");
      song = await SongAPI();
    }
    this.setState({ songInQueue: song });
  }

  isNewSong(song) {
    // Checks if song exists in songHistory
    for (let i = 0; i < this.state.songHistory.length; i++) {
      if (this.isSongEqual(this.state.songHistory[i], song)) {
        // console.log("NEW SONG CAUGHT!");
        // console.log(song);
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
      // console.log("CURRENT: ", this.state.currentSong);
      let songData = { ...this.state.currentSong, Box: this.song.current.state.boxPos };
      this.setState({ songHistory: [...this.state.songHistory, songData] });
    }
  }

  render() {
    const { startGame, pauseGame } = this.state;
    return (
      <div className="gameplay">
        {!startGame && <Menu ref={this.menu} />}
        {<HudDisplay ref={this.hud} pauseGame={pauseGame} />}
        {<Songs ref={this.song} startGame={startGame} pauseGame={pauseGame} runNextSong={this.runNextSong} />}
        {!pauseGame && <Boxes ref={this.boxes} />}
        <div className="alert-message">{this.state.alertMessage}</div>
        {pauseGame && <Results songHistory={this.state.songHistory} />}
      </div>
    );
  }
}

export default Gameplay;

const congratulateMessages = ["Marvelouso!!", "Spectacular!!", "Impressive!!!", "DJ in the making!!!", "Wonderful!", "That was right!"];
const encouragementMessages = ["Nice Guess...", "Keep Trying...", "Good Guess...", "You were close...", "It's okay."];

function congratulateMessage() {
  return congratulateMessages[Math.floor(Math.random() * congratulateMessages.length)];
}

function encouragementMessage() {
  return encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
}
