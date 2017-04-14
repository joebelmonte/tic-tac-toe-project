# Read Me for Tic Tac Toe Game
## Joe Belmonte - April 14, 2017
## WDI-017

## URL for Game

-   [Tic Tac Toe](https://joebelmonte.github.io/tic-tac-toe-project/)

## Technologies Used

- HTML for website content and structure
- CSS for website style, using Bootstrap for modals
- JavaScript for website actions
- jQuery for event handling and DOM manipulation
- JSON for communication with API
- CURL for testing of API GET, PATCH, and POST requests
- RAILs API for database
- Grunt for test environment and testing
- Atom text editor
- GitHub for version control
- Chrome for browser testing

## Planning, Development, and Problem Solving

Coming into this project, I decided to follow two basic principals: First, complete
all of the project requirements before attempting anything above and beyond the scope.
And second, to take things step by step and not worry about steps that were much
later in the process.

I think this approach served me well.  The design of the site is very bare bones
since that was not a high priority in the project scope, but I was able to complete
all of the functional requirements and I believe my final version is bug free.  I
was even able to go a little above and beyond by building in auto-log in upon account
creation functionality and also adding some Bootstrap modal dialog boxes to confirm
user actions.

In terms of the flow of the site, it starts off with just the sign up and sign in
page.  My decision here was to show only the elements that the user needs to see at
each step of the process.

Once the user signs up or signs in, the options for sign out, start new game, and
stats appear.

If they click stats, they will see how many games they have started.

If they click start a new game, the game board will appear with a new line of text
that indicates game status.  Initially it is player 1's (the Xs) turn.  The players
take turns, with the status indicator toggling between players, until one player
wins or there is a tie, which will be reflected in the status message. Once there
is a winner, empty squares cannot be filled in.

Behind the scenes, what is happening is the following:
* The game board starts as an array with nine 0s, each representing one square.
* When a square is clicked, the game checks to see if the square currently has a
value of zero (indicating that is has not been played).
  * If the number is not zero, nothing will happen.
  * If the number is zero, the game will log the move to the API, mark the square
    with an X (or O as appropriate), add a 1 (for X) or -1 (for O) to the game
    board array, toggle the active player, and also check to see if the game has
    ended.
* To see if the game has ended, the game first checks to see if there is a winner.
  * There are only 8 possible winning square combinations, so the game sums those
    8 combinations.  If any of the combinations sums to 3 or -3 then we know that
    player 1 or player 2 has won, respectively.  The fact that the game is over
    is then logged to the API.  Once the game is over, the rest of the empty
    squares are filled in with 5s (arbitrary number) to prevent any more user moves.
  * If neither player has won, the game checks for a tie.  A tie is determined by counting
    the number of squares with an X or O (1 or -1).  If that number is 9 and there
    hasn't already been a winner, then the game is a tie.  The fact that the game
    is over is then logged to the API.
* Upon starting a new game, the board is reset (Xs and Os are deleted and the array
  is reset to 0), the active player is set to X and a new game is posted to the API.

## Unsolved Problems/Enhancements

As mentioned above, I believe my project meets all minimum requirements so there
aren't any unsolved problems per se, but there are a number of enhancements I
would have made given more time.

In terms of user-facing enhancements:
* Obviously the entire look and feel could use more polish.
* I would like to figure out how to remove the text from the sign up
  and sign in text boxes once the user clicks a button.

Behind the scenes:
* I would like to mine the API for more useful user stats to display to the user,
  such as number of wins and win percentage.
* I would also like to clean up the code generally.  Specifically:
  * I had trouble exporting variables, such as the game board array, from 1 file to
    another.  As a result, most of my code is found within the same file (events.js)
    and is therefore a bit harder to read/follow.
  * There is some repetition where I think the code could be consolidated.  There
    were some functions that I would have liked to make more dynamic but due to time
    constraints I had to brute force it and repeat similar functions multiple times.

## Wireframes and User Stories

* I didn't spend a ton of time on wireframes and user stories.  Here are a couple
of mock ups that I drew before I started, although they were quickly abandoned
for the sake of expediency.

- [Mockups] (http://imgur.com/SIeOPd0/s)


* Here are my user stories, but since Tic Tac Toe is pretty simple they aren't too
  extensive.

1.	I want to be able to clearly see when it’s my turn.
2.	I want to be able to know how many games I have won versus lost and winning percentage.
3.	I want to be able to play on my phone as well as my desktop.
4.	I want to be able to log in without leaving the page.

Overall I definitely enjoyed the project.  It was a humbling experience - considering
how difficult it was to make a game this simple, but overall it was fun.
