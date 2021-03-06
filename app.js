/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/



/* December 31st 2019 */

/* January 6th 2020*/
/*VARIABLES*/
var scores, roundScore, activePlayer, gamePlaying;

// function that Resets the game
initialization();
 
// Rolling of the Dice function
document.querySelector('.btn-roll').addEventListener('click', function() {
       if (gamePlaying) {
           /*Generating the Random numbers*/
           var dice1 = Math.floor(Math.random() * 6) + 1;
           var dice2 = Math.floor(Math.random() * 6) + 1;
           /*Displaying the Output*/
           document.querySelector('.dice-0').style.display = 'block';
           document.querySelector('.dice-1').style.display = 'block';
           document.querySelector('.dice-0').src = 'dice-'+dice1+ '.png';
           document.querySelector('.dice-1').src = 'dice-'+dice2+ '.png';
           // Condition for doubles 1's
           if (dice1 !== 1 && dice2 !== 1) {
               console.log(roundScore = dice1 + dice2);
               document.querySelector('#current-'+activePlayer).textContent = roundScore;
           }
           else {
               nextPlayer();
           }
           // Condition for double 6's
           if (dice1 === 6 && dice2 === 6) {
            //Player looses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        }
       }
    });
    
    
     // function for holding the score
    document.querySelector('.btn-hold').addEventListener('click', function() {
        if (gamePlaying) {
            scores[activePlayer] += roundScore;
            document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
            // where you set the winning score
            var input = document.querySelector('.input').value;
            var winningScore;
              if (input) {
                  winningScore = input;
              }
              else {
                  winningScore = 100;
              }
          /// Checking for the Winner
              if (scores[activePlayer] >= winningScore) {
                  document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
                  document.querySelector('.dice-0').style.display = 'none';
                  document.querySelector('.dice-1').style.display = 'none';
    
                  document.querySelector('.player-'+activePlayer+"-panel").classList.add('winner');
                  document.querySelector('.player-'+activePlayer+"-panel").classList.remove('active');
                  gamePlaying = false;
    
              }
              else {
                  nextPlayer();
              }
        }
    });

      // function for the next player
    function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
        document.querySelector('.dice-0').style.display = 'none';
        document.querySelector('.dice-1').style.display = 'none';
    }
    
     // New Game
    document.querySelector('.btn-new').addEventListener('click', initialization);


/*Variable Initialization*/
function initialization() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

    /*Ressetting Scores and Player Names*/
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



