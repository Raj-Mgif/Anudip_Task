let number = Math.floor(Math.random() * 10) + 1;
let guess;
let count = 0;

while (guess != number) {
  guess = prompt("Guess a number (1 to 10):");
  count++;

  if (guess == number) {
    alert("Correct! You took " + count + " chances.");
  } else {
    alert("Wrong guess, try again.");
  }
}
