import React, { Component } from "react";
import SongList from "./API/SongAPI";

class App extends Component {
  render() {
    return (
      <div>
        <SongList></SongList>
      </div>
    );
  }
}

export default App;
