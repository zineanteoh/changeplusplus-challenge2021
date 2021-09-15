const cors = require("cors");
var express = require("express");
const neatCsv = require("neat-csv");
const port = 3000;
var fs = require("fs");

var app = express();
app.use(cors());
app.options("*", cors());

listOfSongs = [];

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

app.get("/songs/random", function (req, res) {
  let randomIndex = Math.floor(Math.random() * listOfSongs.length);
  return res.send(listOfSongs[randomIndex]);
});

app.get("/songs/:songId", function (req, res) {
  return res.send(listOfSongs[req.params.songId - 1]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
