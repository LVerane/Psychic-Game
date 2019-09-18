var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var win = 0;
var lose = 0;
var chances = 5;

computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];

var reset = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
    document.onkeydown = function(event) {
        if(reset === 0){
            userPick = event.key;
                if(chances === 5){
                    userGuess.textContent = "";
                }
                userGuess.append(userPick + " ");
                if(computerPick === userPick){
                    computerAnswer.textContent = "You got it!"
                    win = win + 1;
                    wins.textContent = win;
                    instructions.textContent = "(press any key to continue)";
                    reset = 1;
                }else{
                    chances = chances - 1;
                    if(chances === 0){
                        computerAnswer.textContent = "The right answer was " + computerPick;
                        lose = lose + 1;
                        losses.textContent = lose;
                        instructions.textContent = "(press any key to continue)";
                        reset = 1;
                    }
                    guesses.textContent = chances;
                }
        }else{
            computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
            computerAnswer.textContent = "";
            instructions.textContent = "";
            userGuess.textContent = "Nothing yet...";
            chances = 5;
            guesses.textContent = chances;
            reset = 0;
        }
    }
});