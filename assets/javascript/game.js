var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var win = 0;
var loss = 0;
var chances;
var computerPick;

//to make the computer cut out its guess from the array. would cut from the original array.
// var position = [Math.floor(Math.random() * alphabet.length)]
// computerPick = alphabet[position];
// alphabet.splice(position,1);

// console.log("position " + position);
// console.log("computerpick " + computerPick);
// console.log("alphabet " + alphabet);

function reset(){
    computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
    computerAnswer.textContent = "";
    instructions.textContent = "";
    userGuess.textContent = "Nothing yet...";
    chances = 5;
    guesses.textContent = chances;
}

document.addEventListener("DOMContentLoaded", function(event) { 
    reset();
    document.onkeydown = function(event) {
        userPick = event.key;
        if(chances === 5){
            userGuess.textContent = "";
        }
        userGuess.append(userPick + " ");
        if(computerPick === userPick){
            computerAnswer.textContent = "You got it!"
            win++;
            wins.textContent = win;
            instructions.textContent = "(press any key to continue)";
            reset ();
        }else{
            chances = chances - 1;
            if(chances === 0){
                computerAnswer.textContent = "The right answer was " + computerPick;
                loss++;
                losses.textContent = loss;
                instructions.textContent = "(press any key to continue)";
                reset ();
            }
            guesses.textContent = chances;
        }
    }
});