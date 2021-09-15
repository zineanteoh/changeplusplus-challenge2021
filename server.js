const cors = require("cors");
const express = require("express");
const neatCsv = require("neat-csv"); // temporary (remove once web scraping works)

// Axios and Cheerio for web scraping
const axios = require("axios");
const cheerio = require("cheerio");

const port = 3000;
const fs = require("fs");
const { data } = require("cheerio/lib/api/attributes");

const app = express();
app.use(cors());
app.options("*", cors());

function scrape() {
  let data = [];
  axios
    .get("https://www.billboard.com/charts/hot-100")
    .then((response) => {
      const html = response.data;

      const $ = cheerio.load(html);

      $("span.chart-element__information__song, span.chart-element__information__artist").each((i, element) => {
        var omg = $(element).html(); // .text(); //.replace(/  +/g, " ");
        data[i] = omg;
        console.log("song: ", data[i]);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

scrape();

// console.log(listOfSongs.length);

// fs.readFile("./output.csv", async (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   listOfSongs = await neatCsv(data);
// });

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
  console.log(`Server listening at http://localhost:${port}`);
});
