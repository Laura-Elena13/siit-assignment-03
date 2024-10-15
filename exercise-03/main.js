function computerOption(){
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function newRound(){
    console.log('');
    console.log(`NEW ROUND!`);
    
    const uChoice = prompt(`Input your choice`);
       
    const validInput = verifyValidInput(uChoice);
      
    if(validInput) {
        const cChoice = computerOption();
        const result = detectWinner(uChoice, cChoice);
        console.log(result);
    } else {
        console.error(`Invalid input: ${uChoice}`);
    }
}

function verifyValidInput(uChoice) {
    if(uChoice === 'rock' || uChoice === 'paper' || uChoice === 'scissors') {
        return true;
    } else {
        return false; 
    }
}

function detectWinner(uChoice, cChoice) {
    console.log(`User's choice: ${uChoice}`);
    console.log(`Computers's choice: ${cChoice}`);

    result = getResult(uChoice, cChoice);
    console.log(result);    

    const displayRElement = document.querySelector('#round-result');
    displayRElement.textContent = result;
    const displayUCElement = document.querySelector('#user-choice');
    displayUCElement.textContent = uChoice;
    const displayCCElement = document.querySelector('#computer-choice');
    displayCCElement.textContent = cChoice;
}

function getResult(uChoice, cChoice) {
    if (uChoice === cChoice) {
        return "It's a tie!";
    }else if (
        (uChoice === 'paper' && cChoice === 'rock') ||
        (uChoice === 'rock' && cChoice === 'scissors') ||
        (uChoice === 'scissors' && cChoice === 'paper')
    ) {
        return "User wins!";
    } else {
        return "Computer wins!";
    }
}
