import React, { Component } from "react";

class SongList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { song: {} };
    this.getRandomSong = this.getRandomSong.bind(this);
  }

  componentDidMount() {
    this.getRandomSong();
  }

  getRandomSong() {
    fetch("http://localhost:3000/songs/random")
      .then((response) => response.json())
      .then((data) => this.setState({ song: data }))
      .catch((err) => console.log("An Error occurred while fetching: ", err));
    return <div>Song: {this.state.song}</div>;
  }

  render() {
    return (
      <div>
        <div>Song:</div>
        <button onClick={this.getRandomSong}>Get Random Song</button>
      </div>
    );
  }
}

export default SongList;
