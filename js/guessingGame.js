
var guessedByProgram = Math.floor(Math.random()*100) + 1;
var userGuess = document.getElementById("userGuess").value;

function guessingGame(){
    if(guessedByProgram == userGuess){
        alert("You have guessed the right number");
    }else{
        alert("You didn't guess the right number");
    }
    alert("Do you want to play again? ");
}


