import React, { Component } from "react";
import Boxes from "./Boxes";
import Songs from "./Songs";
import SongAPI from "../API/SongAPI";
import "./Gameplay.css";

class Gameplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSong: {},
    };

    this.getRandomSong = this.getRandomSong.bind(this);
  }

  async getRandomSong() {
    let song = await SongAPI();
    console.log("we got: ", song);
    this.setState({ currentSong: song });
  }
  // start game: how many songs to choose
  // get random song from API
  // animate song falling down
  // keyboard controls / event listeners
  // buttons to see ranking

  render() {
    return (
      <div className="gameplay" onClick={this.getRandomSong}>
        <Songs />
        <Boxes />
      </div>
    );
  }
}

export default Gameplay;
