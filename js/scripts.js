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

function rollDice(){
    for(;;){
        var number = parseInt(Math.random() * 10)
        if (number > 0 && number < 7){
            console.log(number)
            return number
            break
        }
    }
}
rollDice()
var dice1 = rollDice()
var dice2 = rollDice()
function playerRolls(numb1, numb2){
    
}
