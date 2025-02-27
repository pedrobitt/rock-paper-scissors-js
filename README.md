# Rock-Paper-Scissors Game

This is a simple Rock-Paper-Scissors game built for the browser console. The player competes against the computer in a best-of-five rounds match. The game follows the classic rules:

-   Rock beats Scissors
-   Scissors beat Paper
-   Paper beats Rock

## How to Play

1. Clone the repository to your local machine:
   git clone https://github.com/yourusername/rock-paper-scissors-js.git

2. Navigate to the project folder

3. Open the index.html file in your web browser.

4. Open the developer console

5. When the game starts, you will be prompted to enter your choice: rock, paper, or scissors. The game will randomly choose for the computer and display the result of each round in the console.

6. The game will continue for 5 rounds. After all rounds are played, the console will display the final scores and declare the winner.

## Code Structure

The game is implemented using JavaScript, and the logic is divided into functions:

-   getComputerChoice(): This function randomly selects either rock, paper, or scissors for the computer using Math.random().
-   getHumanChoice(): This function prompts the player to input their choice (rock, paper, or scissors).
-   playRound(): This function takes the player and computer's choices as parameters, compares them, and returns the result of the round.
-   playGame(): This is the main game loop, which plays 5 rounds, keeps track of the scores, and declares a winner at the end.

## Two Solution Approaches

There are two different approaches included in the code to handle the game's scoring logic:

1. The first version updates the player's and computer's scores within the playGame function using a loop that iterates over 5 rounds.
2. The second version updates the scores inside the playRound function, which is called within the loop.

Both approaches lead to the same outcome, but they differ in how they handle the game's structure. You'll find comments and notes in the code that helped guide me through the process of breaking down and solving the problem step by step.
These comments are written in Portuguese.
