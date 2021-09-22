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
> Parent component of Menu, HudDisplay, Songs, Boxes, Results, and PopupMessage
> Handles user keyboard inputs and make API requests to retrieve and store songs
> Monitors the state of its children components 

4. Menu.js
> Provides instructions to the user on how to play the game

5. HudDisplay.js
> Responsible for the Heads Up Displays (Current Song & Next Song)

6. Songs.js
> Responsible for the song block component (controllable by user)

7. Boxes.js
> Responsible for the row of boxes below 

8. Results.js
> Responsible for displaying the results to users when [P] is pressed

9. PopupMessage.js
> Responsible for alerting user of their correctness

Reflection on the Challenge
> This challenge taught me a lot. This was my first time learning React, writing API, learning Node.js, 
and performing web scraping. I was glad that I managed to take things one step at a time (not to be 
overwhelmed by the amount of 'new knowledge' and beat myself for not knowing them). At times I felt 
clueless (i.e. How do I scrape and process the songs into an array?), but I still managed to learn how
to do so by googling and finding the relevant resources. 

Challenges I faced
> Knowing my limitations - I originally had a more ambitious idea for this challenge, but decided to
dump that because I knew I was not experienced enough for it. I settled for a tetris-like game mechanics
instead. 
> Designs - I don't consider myself the best designer, and I definitely think there are many design-related 
things that could be improved. 
> General programming structure - As much as I can I tried to make my code readable for others. However, 
I often think that certain parts of my code can certainly be improved, whether that is readability or 
efficiency. It is still something that I have to work on. 