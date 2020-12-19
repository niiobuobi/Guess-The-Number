var myGuess = -1;
var answer = getSecretNumber();
var attempts = 0;

while(myGuess != answer)
{
  myGuess = prompt("Guess the number (0 to 100)");

  myGuess = Number(myGuess)

  if(myGuess == answer);
  {
    console.log("You guessed the number! You win!");
  }
  if(myGuess > answer)
  {
    console.log("Your guess is over the number!");
  }
  else
  {
    console.log("Your guess is under the number!");
  }

  attempts = attempts + 1;
}

console.log("It took " + attempts + " attempts to guess the correct number.");
