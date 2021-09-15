// function scrape() {
//   listOfSongs = [];

//   (async () => {
//     const response = await fetch("https://www.billboard.com/charts/hot-100");
//     const text = await response.text();
//     const dom = await new JSDOM(text);
//     console.log(dom.window.document.querySelector("ol.chart-list__elements").textContent);
//   })();

//   return listOfSongs;
// }

// export default scrape;
