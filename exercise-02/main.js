// Generates a random option between rock, paper & scissors
function computerOption(){
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// runs a new round of rock - paper - scissors game
function newRound(){
    console.log('');
    console.log(`NEW ROUND!`);
    
    const uChoice = prompt(`Input your choice`);
       
    const validInput = verifyValidInput(uChoice);
    
    /**
     * TODO change the code to determine if the user input is valid (one of the options "rock", "paper", "scissors")
     * BONUS: consider also accepting case-insensitive values for the user choice (e.g. "Rock", "ROCK", "rOcK")
     */
    
        
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

    return result = getResult(uChoice, cChoice);
    
    //console.log(result);    
    
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

/**
 *  TODO implement the function that detects the winner 
 *  The function should return one of the messages: "User wins!" / "Computer wins!" / "It's a tie!"
 *  RULES: 
 *      paper beats rock
 *      rock beats scissors
 *      scissors beats paper
 */
//function detectWinner(userChoice, computerChoice){
    //console.log(`User's choice: ${userChoice}`);
    //console.log(`Computers's choice: ${computerChoice}`);

    //return `result message goes here!`;
//}
