const cors = require("cors");
const express = require("express");

const port = 8080;
const app = express();
app.use(cors());
app.options("*", cors());

// axios and cheerio for web scraping
const axios = require("axios");
const cheerio = require("cheerio");

// scrapes data from website using axios and cheerio
let listOfSongs = [];
const scrape = () => {
  axios
    .get("https://www.billboard.com/charts/hot-100")
    .then((response) => {
      const html = response.data;

      const $ = cheerio.load(html);

      $("span.chart-element__information__song, span.chart-element__information__artist").each((i, element) => {
        // The querySelectorAll will return
        // ... [song1_title, song1_artist, song2_title, song2_artist, ..., song100_artist]
        let omg = $(element).text();

        let index = Math.floor(i / 2);
        if (i % 2 == 0) {
          // if i is even then element is a song title
          // .. push a new object to listOfSongs
          listOfSongs.push({ Position: index + 1 });
          listOfSongs[index].Title = omg;
        } else {
          // if i is odd then element is a song artist
          // .. add Artist property to existing object
          listOfSongs[index].Artist = omg;
        }
      });

      console.log("Web scraping completed");
      // console.log("ListOfSongs: ", listOfSongs);
    })
    .catch((err) => {
      console.log(err);
    });
};
scrape();

app.get("/", function (req, res) {
  return res.send(`<p>To view all songs: /songs</p><p>To get a random song: /songs/random</p><p>To get a specific song: /songs/:songId</p>`);
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
  console.log(`Server listening at http://localhost:${port}`);
});
