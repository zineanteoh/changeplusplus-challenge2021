Running the program
1. Go to the main file directory and enter "node server.js" to run the backend server
2. Enter "npm start" to run the game and play it on the browser

Reading the program
1. server.js
> Responsible for the backend of the game
> Uses axios and cheerio to scrape www.billboard.com/charts/hot-100
> RESTful API that allows access to a random song (title, artist, position)

2. index.js, App.js, Main.js
> The top-most parent React components of the game

3. Gameplay.js
> Responsible for the main functionality of the game
> Parent component of Menu, HudDisplay, Songs, Boxes and Results
> Handles user keyboard inputs and make API requests to retrieve and store songs
> Monitors the state of its children components 

4. Menu.js
> 

Reflection on the Challenge
