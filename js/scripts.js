/**
 rando generator Math.random()
    parseInt(Math.random() * 10)

1. player rolls a dice
2. if number of dice is 1 player stops rolling and scores nothing
    > else player rolls again summing the totoal of his numbers and plays again
    > if player chooses to hold, they stop playing and their numbers are summed up

3. first player to score 100 point wins the game
 */

 /*
 #####################################################################
 > procedure for the project
 1. build ui with the following features
    a. players enter their names
    b. players choose their avaters
    c. empty arrays are created for each player to hold their rolls
    d. empty total variable to hold each of the players total sum of numbers
    e. random number generating function is created
    f. function to check if number is 1 or not
        > check if both dices are 1 and player loses all points
    g. push number to enpty array or empty the array if number is 1
    h. add numbers in array
    i. add sum of array nimbers to sum of player
    j. check if  player total is 100 and declare then a winner
    k. declare the oposition a loser by default otherwise.....
    l. switch to player 2 and repeat the process
    
2. button for rolling the dice
3. seperate result fields one for ongoing count and another for completed total
4. 
 */


 //  player constructor
 var Player = function (name) {
     this.name = name;
     this.rolls = [];
 }

 // First dice rolling method prototype
 Player.prototype.rollDice1 = function () {
     for (;;) {
         var number = parseInt(Math.random() * 10)
         if (number > 0 && number < 7) {
             console.log(number)
             return number
             break
         }
     }
 }

//  Second dice rolling prototype
 Player.prototype.rollDice2 = function () {
     for (;;) {
         var number = parseInt(Math.random() * 10)
         if (number > 0 && number < 7) {
             console.log(number)
             return number
             break
         }
     }
 }

var Vikki = new Player('vikki');

console.log(Vikki.name)
Vikki.rollDice1();
Vikki.rollDice2();

 //  pass turn method prototype **Returns total of rolls**
 Player.prototype.passTurn = function (player) {
     var total = 0;
     player[rolls].forEach(function (number) {
         total += number
     });
     return total
 }

 //  check if either of the rolls is a 1
 Player.prototype.rollCheck = function (player, dice1, dice2, scoreSelector, arraySelector) {
     if ((dice1 === 1) && (dice2 === 1)) {
         $(scoreSelector).text('0');
         $(arraySelector).text('0');
     } else if ((dice1 === 1) || dice2) {
         $(arraySelector).text('0');
     } else {
         player[rolls].push((dice1 + dice2))
         $(scoreSelector).text(player.passTurn(player));
         $(arraySelector).text(player.rolls);
     }
 }

 //  check if a player has reached 100 points
 Player.prototype.winGame = function (player, winSelector) {
     if (player.passTurn() >= 100) {
         var victory = player.name + 'WINS!!'
         $(winSelector).text(victory);
     }
 }

// 
// 
// 
// user logic
// 
// 

$(document).ready(function () {
    // set the user name
    var player1name = $('#userNameInput1').val();
    var player2name = $('#userNameInput2').val();

    $('#play').click(function (e) { 
        e.preventDefault();
        
    });

});

