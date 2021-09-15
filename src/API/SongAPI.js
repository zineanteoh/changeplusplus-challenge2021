import React, { Component } from "react";

const url = "http://localhost:3000";

class SongList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { song: [] };
  }

  componentDidMount() {
    this.SongList();
  }

  SongList() {
    fetch(url + "/songs/random")
      .then((response) => {
        response.json();
      })
      .then((data) => this.setState({ song: data }));
  }

  render() {
    return (
      <div>
        <div>Song: {this.state.song}</div>
      </div>
    );
  }
}

export default SongList;
