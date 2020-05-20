const gameData = {
    answer: 0,
}

function startGame() {
    let answer = Math.floor(Math.random() * 1000);
    let userGuessSubmit = document.getElementById('submitGuess');
    let startResetButton = document.getElementById('startResetButton');
    userGuessSubmit.disabled = false;

    gameData.answer = answer;
    
    startResetButton.textContent = 'Reset';

    console.log(answer);

    clearOutput();
}

function clearOutput() {
    const output = document.getElementById('outputDiv');
    while (output.firstChild) {
    output.removeChild(output.lastChild);
    }
}



function checkAnswer() {

    let answer = gameData.answer;
    const userGuessInput = document.getElementById('userGuessInput');
    let guess = userGuessInput.value;

    let icon = '';
    let output = '';

    if (Math.abs(answer - guess) <= 10 && Math.abs(answer - guess) > 0) {
        icon = 'fire';
    } else if (Math.abs(answer - guess) >= 100) {
        icon = 'ice';
    }

    if (guess < answer) {
        console.log('TOO LOW');
        output = 'Too Low';
    } else if (guess > answer) {
        console.log('TOO HIGH');
        output = 'Too High';
    } else {
        console.log('YOU WIN!');
        output = 'You Win!';
        endGame();
    }

    printOutput(output, icon);
    userGuessInput.value = '';
}

function endGame() {
    let userGuessSubmit = document.getElementById('submitGuess');
    userGuessSubmit.disabled = true;
}

function printOutput(message, iconName) {
    console.log(message, iconName);
    let outputDiv = document.getElementById('outputDiv');
    let newMessage = document.createElement('p');
    newMessage.innerText = message;

    if (iconName) {
        let icon = document.createElement('img');
        let iconSource = `assets/${iconName}.svg`
        icon.src = iconSource;
        newMessage.appendChild(icon);
    }
    
    outputDiv.appendChild(newMessage);
}

function hideModal() {
    let modal = document.getElementById('instructionsModal');
    modal.style.top = '-400px';
    console.log('clicked')
}