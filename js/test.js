//  player constructor
var Player = function(name){
    this.name = name;
    this.rolls = [];
}

//  dice rolling method prototype
Player.prototype.rollDice1 = function(){
    for (;;) {
        var number = parseInt(Math.random() * 10)
        if (number > 0 && number < 7) {
            console.log(number);
            return number;
            break;
        }
    }
}

Player.prototype.rollDice2 = function () {
    for (;;) {
        var number = parseInt(Math.random() * 10)
        if (number > 0 && number < 7) {
            console.log(number);
            return number;
            break;
        }
    }
}

var Vikki = Player('vikki')

Vikki.rollDice1
Vikki.rollDice2()

//  pass turn method prototype **Returns total of rolls**
Player.prototype.passTurn = function(player){
    var total = 0;
    player[rolls].forEach(function(number){
        total += number
    });
    return total
}

//  check if either of the rolls is a 1
Player.prototype.rollCheck = function(player, dice1, dice2, scoreSelector, arraySelector){
    if ((dice1 === 1) && (dice2 === 1)) {
        $(scoreSelector).text('0');
        $(arraySelector).text('0');
    } else if ((dice1 === 1) || dice2) {
        $(arraySelector).text('0');
    }else{
        player[rolls].push((dice1 + dice2))
        $(scoreSelector).text(player.passTurn(player));
        $(arraySelector).text(player.rolls);
    }
}

//  check if a player has reached 100 points
Player.prototype.winGame = function(player, winSelector){
    if (player.passTurn() >= 100){
        var victory = player.name + 'WINS!!'
        $(winSelector).text(victory);
    }
}

