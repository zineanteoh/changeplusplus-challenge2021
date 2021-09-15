import React, { Component } from "react";
import SongList from "./API/SongAPI";

class App extends Component {
  getRandomSong() {
    return <div>{fetch("http://localhost:3000/songs/random")}</div>;
  }

  render() {
    return (
      <div>
        <SongList>Hi</SongList>
      </div>
    );
  }
}

export default App;
