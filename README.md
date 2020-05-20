# Hi-Lo
## A vanilla JS game

Hi-Lo is a number guessing game created with the intention of helping me cement my skills in Javascript logic.

The game is simple:

The player starts the game. This triggers a function that creates a random number from 1-1000, which is then stored in a global object.

When the player submits their guess, a few things happen:

First, the answer is checked to make sure it's a number. Then the number's distance from the answer is checked to help determine the icon the player will see in the output. Lastly the guess is compared to the answer to see if it's too high, low, or correct.

Each guess is then displayed to the screen with a hint telling the relationship to the answer as well as an icon giving more feedback.

If the user sees a fire icon, their last guess is within 10 of the answer. If they see a snowflake, their guess is further than 100 from the answer.
