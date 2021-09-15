var express = require("express");
const neatCsv = require("neat-csv");
var app = express();
const port = 3000;
var fs = require("fs");

listOfSongs = [];

// Open output.csv and store list of songs in data
fs.readFile("./output.csv", async (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  listOfSongs = await neatCsv(data);
});

app.get("/songs", function (req, res) {
  return res.send(listOfSongs);
});

app.get("/songs/:songId", function (req, res) {
  return res.send(listOfSongs[req.params.songId - 1]);
});

app.get("/randomSong", function (req, res) {
  let randomIndex = Math.floor(Math.random() * listOfSongs.length);
  return res.send(listOfSongs[randomIndex]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
