const gameData = {
    answer: 0,
    userGuessInput: document.getElementById('userGuessInput'),
    startResetButton: document.getElementById('startResetButton'),
    userGuessSubmit: document.getElementById('submitGuess'),
    output: document.getElementById('outputDiv'),
}

function startGame() {
    gameData.answer = Math.floor(Math.random() * 1000);

    gameData.userGuessSubmit.style.backgroundColor = 'var(--green)';
    gameData.userGuessSubmit.style.opacity = '1';
    gameData.userGuessSubmit.style.color = 'var(--dark-blue)';

    gameData.userGuessSubmit.disabled = false;
    
    gameData.startResetButton.textContent = 'Reset';

    console.log(gameData.answer);

    clearOutput();
}

function clearOutput() {
    while (gameData.output.firstChild) {
    gameData.output.removeChild(gameData.output.lastChild);
    }
}


function checkAnswer() {

    let answer = gameData.answer;
    let guess = gameData.userGuessInput.value;

    if (guess === '' || guess === NaN) {
        alert('Please enter a valid guess');
    } else {
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

        printOutput(guess, output, icon);
        userGuessInput.value = '';
    }
}

function endGame() {
    gameData.userGuessSubmit.disabled = true;

    gameData.userGuessSubmit.style.backgroundColor = 'gray';
    gameData.userGuessSubmit.style.opacity = '0.5';
    gameData.userGuessSubmit.style.color = 'var(--white)';

    gameData.startResetButton.textContent = 'New Game';
}

function printOutput(guess, message, iconName) {
    let outputDiv = gameData.output;
    let newMessage = document.createElement('p');
    newMessage.innerText = guess + ' - ' + message;

    if (iconName) {
        let icon = document.createElement('img');
        let iconSource = `assets/${iconName}.svg`
        icon.src = iconSource;
        newMessage.appendChild(icon);
    }
    
    outputDiv.insertBefore(newMessage, outputDiv.firstChild);
}

function hideModal() {
    let modal = document.getElementById('instructionsModal');
    modal.style.top = '-800px';
    console.log('clicked')
}