# Change++ Coding Challenge 2021 - Tetris DJ Challenge

## Description
![Home screen](https://i.imgur.com/17KQ4aj.png)

### The Challenge
Your task is to build a game which tests the user on their ability to rank the popularity of songs.

[Click here to read the complete challenge specifications](https://github.com/zineanteoh/changeplusplus-challenge2021/blob/main/README2.md)

## How To Play
1. Clone the repository to your local computer. 
2. Using terminal, enter "node server.js" to run the backend server
3. Then enter "npm start" to run the game and play it on the browser 

## How It Works

### server.js 
- Responsible for the backend of the game
- Uses axios and cheerio to scrape www.billboard.com/charts/hot-100
- RESTful API to transfer a random song (title, artist, position)

### index.js, App.js, Main.js
- The top-most parent React components of the game

### Gameplay.js
- Responsible for the main functionality of the game
- Parent component of Menu, HudDisplay, Songs, Boxes, Results, and PopupMessage
- Handles user keyboard inputs and make API requests to retrieve and store songs
- Monitors the state of its children components 

### Menu.js
- Provides instructions to the user on how to play the game

### HudDisplay.js
- Responsible for the Heads Up Displays (Current Song & Next Song)

### Songs.js
- Responsible for the song block component (controllable by user)

### Boxes.js
- Responsible for the row of boxes below 

### Results.js
- Responsible for displaying the results to users when [P] is pressed

### PopupMessage.js
- Responsible for alerting user of their correctness
