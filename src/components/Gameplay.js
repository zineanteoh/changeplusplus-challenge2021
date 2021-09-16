import React, { Component } from "react";
import Boxes from "./Boxes";
import Songs from "./Songs";
import SongAPI from "../API/SongAPI";
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
      currentSong: {},
    };

    this.getRandomSong = this.getRandomSong.bind(this);
    this.song = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.song.current.moveLeft();
      } else if (e.key === "ArrowRight") {
        this.song.current.moveRight();
      } else if (e.key === " ") {
        // console.log("space");
        this.getRandomSong();
      }
    });
  }

  handleKeyPress() {}

  async getRandomSong() {
    let song = await SongAPI();
    console.log("we got: ", song);
    this.setState({ currentSong: song });
  }

  render() {
    return (
      <div className="gameplay">
        <Songs ref={this.song} />
        <Boxes />
      </div>
    );
  }
}

export default Gameplay;
