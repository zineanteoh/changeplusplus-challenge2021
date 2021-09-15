import React, { Component } from "react";

// const url = "http://localhost:3000";

class SongList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { song: [] };
  }

  componentDidMount() {
    this.SongList();
  }

  SongList() {
    fetch("http://localhost:3000/songs/random")
      .then((response) => response.json())
      .then((data) => console.log("Ranking #", data["Position"], data["Title"], "by", data["Artist"]))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div>Song:</div>
        <button onClick={this.SongList}>Get Random Song</button>
      </div>
    );
  }
}

export default SongList;
