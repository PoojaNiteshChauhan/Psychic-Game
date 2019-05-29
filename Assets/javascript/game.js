var wins = 0;
var losses= 0;
var guessesLeft= 5;


var compG = document.getElementById("compGuess")
var userw = document.getElementById("wins");
var loss = document.getElementById("losses");
var GuesesL = document.getElementById("GuesesLeft");
var soF = document.getElementById("soFar");

var computerChoice = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var soFar = [];
var userGuess;
var computerGuess = computerChoice[Math.floor(Math.random()* computerChoice.length)];


function resetGame(){

    guessesLeft = 5; // This operation will be done for both win or loss 
    GuesesL.innerText = "Guesses Left: 5";
    soF.innerText = "Your Guesses so far:";
    soFar = []; // This operation will be done for both win or loss 
    computerGuess = computerChoice[Math.floor(Math.random()* computerChoice.length)];
}

function updateScoreBoard (){
    userw.innerText = " Wins: " + wins;
    loss.innerText = " Loss: " + losses;  
}

function playgame()
{

    
    console.log(computerGuess);

        
        document.onkeyup = function (event) 
        {
            console.log(computerGuess,computerGuess != userGuess, guessesLeft >0, guessesLeft);
            userGuess = event.key.toUpperCase();


            if ((guessesLeft >= 1) && (computerGuess != userGuess) )// Either the Guessess are over i.e guessleft is 0 or user has won ( computerGuess === useGuess )
            {
                
                
                soFar.push(userGuess);
                guessesLeft--;


                soF.innerText = "Your Guesses so far:" + soFar;
                GuesesL.innerText = "Guesses Left:" + guessesLeft;
                if (guessesLeft === 0)
                {
                    losses++;
                    resetGame();
                    updateScoreBoard();
                }

                

            } 
            else  if (computerGuess === userGuess) 
            {
                wins++;

                resetGame();
                updateScoreBoard();
            } 
            
                // Random guess again 
        }  
}

playgame();



    

