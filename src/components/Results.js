import React, { Component } from "react";
import "./Results.css";

// export: RANKING, Results and checkUserAnswer

export const RANKING = ["TOP 10", "#11-20", "#21-30", "#31-40", "#41-50", "#51-60", "#61-70", "#71-80", "#81-90", "#91-100"];

class Results extends Component {
  render() {
    const { songHistory } = this.props;
    const heading = ["Song Album", "Artist", "Actual Ranking", "Your Ranking"];

    return (
      <div>
        <div className="resultsInstruction">
          <p>Press [P] to resume game</p>
        </div>
        <div className="results">
          <h1>Your Result</h1>
          <Table heading={heading} body={processSongHistory(songHistory)} />
        </div>
      </div>
    );
  }
}

class Table extends Component {
  render() {
    const heading = this.props.heading;
    const body = this.props.body;
    return (
      <table style={{ width: 650 + "px" }}>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row) => (
            <TableRow row={row} />
          ))}
        </tbody>
      </table>
    );
  }
}

class TableRow extends Component {
  render() {
    let row = this.props.row;
    // console.log("this is row: ", row);
    let color = checkUserAnswer(row[3], row[2]) ? "rgb(6, 233, 45)" : "rgb(239, 13, 33)";
    return (
      <tr>
        {row.map((val) => (
          <td style={{ color: color }}>{val}</td>
        ))}
      </tr>
    );
  }
}

export default Results;

function processSongHistory(songHistory) {
  let arr = [];
  for (let i = 0; i < songHistory.length; i++) {
    arr.push(processSongObject(songHistory[i]));
  }
  return arr;
}

function processSongObject(song) {
  // turns a song object from
  // ... {"Artist": "A", "Title": "Song", "Position": 3, "Box": 9}
  // into ["Song", "A", 3, 9]
  let arr = [];
  arr.push(song["Title"]);
  arr.push(song["Artist"]);
  arr.push(song["Position"]);
  arr.push(getRankingFromBoxPos(song["Box"]));
  return arr;
}

function getRankingFromBoxPos(boxPos) {
  return RANKING[boxPos - 1];
}

export function checkUserAnswer(boxPos, position) {
  let box = RANKING.indexOf(boxPos) + 1;
  let result = Math.ceil(position / 10.0);
  return box === result;
}
