import React, { Component } from "react";

class SongAPI extends React.Component {
  constructor(props) {
    super(props);

    this.state = { song: {} };
    this.getRandomSong = this.getRandomSong.bind(this);
  }

  componentDidMount() {
    this.getRandomSong();
  }

  getRandomSong() {
    fetch("http://localhost:8080/songs/random")
      .then((response) => response.json())
      .then((data) => this.setState({ song: data }))
      .catch((err) => console.log("An Error occurred while fetching: ", err));
  }

  render() {
    return (
      <div>
        <div>Song:</div>
        <button onClick={this.getRandomSong}>Get Random Song</button>
        <div>Ranking: #{this.state.song.Position}/100</div>
        <div>Title: {this.state.song.Title}</div>
        <div>Artist: {this.state.song.Artist}</div>
      </div>
    );
  }
}

export default SongAPI;
