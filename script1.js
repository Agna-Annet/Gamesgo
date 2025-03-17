let randomNumber =Math.floor(Math.random()*100)+1;

function checkGuess() {
    
    let userGuess=document.getElementById("guessInput").value;
    let message=document.getElementById("message");
    let difference=Math.abs(randomNumber - userGuess);

    if (userGuess <1 || userGuess>100 || isNaN(userGuess)){
        message.textContent="Please enter a number between 1 and 100.";
        return;
    }

    userGuess=Number(userGuess);

    if (userGuess === randomNumber){
        message.textContent="Correct!🎉 You guessed the number!";
        message.style.color="green";
    }
    else if (difference<=5){
        message.textContent="Super Close!🔥";
        message.style.color="red";
    }
    else if (difference<=15){
        message.textContent="Warm!😊";
        message.style.color="orange";
    }
    else {
        message.textContent="Cold!❄";
        message.style.color="blue";
    }

}

function resetGame() {
    randomNumber= Math.floor(Math.random()*100)+1;
    document.getElementById("guessInput").value="";
    document.getElementById("message").textContent="";
}
function changeBackground(difference){
    let color ="lightblue";
    if (difference<=5) 
        color="red";
    else if(difference<=15)
        color="orange";
    document.body.style.backgroundColor;
}