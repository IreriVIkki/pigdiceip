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
 var Player = function (name, turn) {
     this.name = name;
     this.rolls = [];
     this.turn = turn;
 }

 // First dice rolling method prototype
 Player.prototype.rollDice1 = function () {
     for (;;) {
         var number = parseInt(Math.random() * 10)
         if (number > 0 && number < 7) {
            //  console.log(number)
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
            //  console.log(number)
             return number
             break
         }
     }
 }

 //  pass turn method prototype **Returns total of rolls**
 Player.prototype.passTurn = function (player) {
     var total = 0;
     player.rolls.forEach(function (number) {
         total += number
     });
     return total
 }

//  function for switching turns

passTurnF = function (Player1, Player2) {
    if (Player1.turn === 'playing') {
        Player1.turn = 'waiting'
        Player2.turn = 'playing'
    } else if (Player2.turn === 'playing') {
        Player2.turn = 'waiting'
        Player1.turn = 'playing'
    }
}

//   change active user
activeUser = function (Player1, Player2, player1id, player2id) {
        if (Player1.turn === 'playing') {
            $(player1id).addClass('bg-info');
            $(player2id).removeClass('bg-info');
        } else if (Player2.turn === 'playing') {
            $(player2id).addClass('bg-info');
            $(player1id).removeClass('bg-info');
        }
}

 //  check if either of the rolls is a 1

 function rollCheck (dice1, dice2, player, player2, dice1id, dice2id, diceTotal, totalScoreid) {
     if ((dice1 === 1) && (dice2 === 1)) {
         player.rolls = []
         $(dice1id).text(dice1);
         $(dice2id).text(dice2);
         $(diceTotal).text('0');
         $(totalScoreid).text(player.passTurn(player));
         passTurnF(player, player2);
     } else if ((dice1 === 1) || dice2 === 1) {
         $(dice1id).text(dice1);
         $(dice2id).text(dice2);
         $(diceTotal).text('0');
         $(totalScoreid).text(player.passTurn(player));
         passTurnF(player, player2)
     } else {
         player.rolls.push(dice1 + dice2)
         $(dice1id).text(dice1);
         $(dice2id).text(dice2);
         $(diceTotal).text(dice1 + dice2);
         $(totalScoreid).text(player.passTurn(player));
     }
 }

function playAgain(Player1, Player2, totalScores1, dice11, dice12, dicetotal11, totalScores2, dice21, dice22, dicetotal21){
    Player1.rolls = [];
    Player2.rolls = [];
    $(totalScores1).text('0');
    $(dice11).text('0');
    $(dice12).text('0');
    $(dicetotal11).text('0');
    $(totalScores2).text('0');
    $(dice21).text('0');
    $(dice22).text('0');
    $(dicetotal21).text('0');
}

 function currentTotal (dice1, dice2){
     return (dice1 + dice2)
 }

 //  check if a player has reached 100 points
 Player.prototype.winGame = function (player, winSelector) {
     if (player.passTurn(player) >= 100) {
         var victory = player.name + '  WINS!!'
         $(winSelector).text(victory);
         $('#winModal').modal('show');
     }
 }


//  capitalize user first name incase it wasn't already
 function upperCaseFirst(string) {
     return string.charAt(0).toUpperCase() + string.slice(1);
 }

// 
// 
// user logic
// 
// 

$(document).ready(function () {
    // // set the user name
    // var player1name = $('#userNameInput1').val();
    // var player2name = $('#userNameInput2').val();

    $('#play').click(function (e) { 
        e.preventDefault();

        var player1name = $('#userNameInput1').val();
        var player2name = $('#userNameInput2').val();

        console.log(player1name.length === 0)

        //  check if user names are empty
        if (player1name.length === 0 || player2name.length === 0){
            alert('please enter your username')
        } else {
            $('.setUp').addClass('slideOutRight');
            var wait = setTimeout(function () {
                $('.setUp').addClass('hideSection');
                $('.gamePlay').addClass('slideInLeft');
            }, 500);
            var wait = setTimeout(function () {
                $('#user1Name').html(upperCaseFirst(player1name));
                $('#user2Name').html(upperCaseFirst(player2name));
                $('.gamePlay').removeClass('hideSection');
            }, 510);
        }
        var Player1 = new Player(player1name, 'playing');
        var Player2 = new Player(player2name, 'waiting');

        console.log(Player1.turn)
        console.log(Player2.turn)

        // when player hits the roll dice button
        var turnTotal = 0;
        $('#rollDice').click(function (e) { 
            e.preventDefault();
            var dice1 = Player1.rollDice1()
            var dice2 = Player2.rollDice2()
            if(Player1.turn === 'playing'){
                rollCheck(dice1, dice2, Player1, Player2, dice11, dice12, dicetotal11, totalScores1)
                Player1.winGame(Player1, winner)
                activeUser(Player1, Player2, player1, player2)
            } else if (Player2.turn === 'playing') {
                rollCheck(dice1, dice2, Player2, Player1, dice21, dice22, dicetotal21, totalScores2)
                activeUser(Player1, Player2, player1, player2)
                Player1.winGame(Player2, winner)
            }
        });
        $('#passTurn').click(function (e) {
            e.preventDefault();
            passTurnF(Player1, Player2, player1, player2)
        });
        $('#playAgain').click(function (e) { 
            e.preventDefault();
            playAgain(Player1, Player2, totalScores1, dice11, dice12, dicetotal11, totalScores2, dice21, dice22, dicetotal21)
        });
        $('#newGame').click(function (e) { 
            e.preventDefault();
            location.reload()
        });
    });
});

