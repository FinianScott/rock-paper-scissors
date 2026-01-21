function getComputerChoice(){
    //SET num to random value from 0 to 9
    let num = Math.floor(Math.random()*10);
    //IF num is zero THEN
    if (num === 0){
        // RETURN rerun of function (could theoretically run forever but not too worried)
        return getComputerChoice();
    //ELSE IF remainder of num and 3 is 0 THEN
    } else if (num % 3 === 0 ){
        // RETURN Rock
        return "Rock";
    //ELSE IF remainder of num and 3 is 1 THEN
    } else if (num % 3 === 1){
        // RETURN Paper
        return "Paper";
    //ELSE remainder of num and 3 is 2 THEN
    } else {
        // RETURN Scissors
        return "Scissors";
    //ENDIF
    }
}

function getHumanChoice (){
    //Get choice from user input. Assume valid value is entered. 
    return prompt("Enter Rock, Paper, or Scissors.");
}

//INIT user and computer scores to 0
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    //SET humanChoice and computerChoice to uppercase
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    //IF humanChoice and computerChoice equal each other THEN
        //RETURN it's a tie
    if (humanChoice === computerChoice){
        console.log("It's a tie!!!");
        return;
    }
    //ELSE IF humanChoice and computer choice are (Rock, Scissors) OR (Paper, Rock) OR (Scissors, Paper) THEN
        //RETURN human win.
        //INCREMENT human score by one
    else if ((humanChoice === "ROCK"&& computerChoice === "SCISSORS") || (humanChoice = "PAPER" && computerChoice=== "ROCK") || (humanChoice ==="SCISSORS"&& computerChoice === "PAPER")){
        console.log(humanChoice);
        console.log(`You win!!! ${humanChoice.charAt(0)}${humanChoice.slice(1).toLowerCase()} beats ${computerChoice.charAt(0)}${computerChoice.slice(1).toLowerCase()}!`);
        humanScore = humanScore++;
        return;
        }
    //ELSE THEN
        //RETURN computer win 
        //INCREMENT computer score by one
    //END IF
    else{
        console.log(humanChoice);
        console.log(`You lose!!! ${computerChoice.charAt(0)}${computerChoice.slice(1).toLowerCase()} beats ${humanChoice.charAt(0)}${humanChoice.slice(1).toLowerCase()}!`);
        computerScore = computerScore++;
        return;
    }

}

//SET human and computer choices
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Use playRound function to determine winner. 
playRound(humanSelection, computerSelection);
