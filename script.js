
const num = document.getElementById("guess");
const guessBtn = document.getElementById("guessButton");
const resetButton = document.getElementById("resetButton");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

const randomNum= Math.floor(Math.random() * 100) + 1;
let attempts= 0;

guessBtn.addEventListener('click', function() {

    const  guressvalue= Number(num.value);
    if(guressvalue === "") {
        message.textContent= 'Please enter a number between 1 and 100, you have to enter a number';
    }
    if(guressvalue < 1 || guressvalue > 100) { 
        message.textContent= 'Please enter a number between 1 and 100'; 
      
    }
    attempts++;
    attemptsText.textContent= `Attempts: ${attempts}`;
    if(guressvalue === randomNum) {
        message.textContent= `🎉 Congratulations! You guessed the number ${randomNum} in ${attempts} attempts.`;
        guessBtn.disabled= true;
    }

    else if (guressvalue > randomNum) {

        message.textContent = "Too high! ⬆️";

    }

    else {

        message.textContent = "Too low! ⬇️";

    }
});

