function getComputerChoice(){
    //SET num to random value from 0 to 9
    let num = Math.floor(Math.random()*10);
    //IF num is zero THEN
    if (num === 0){
        // return rerun of function (could theoretically run forever but not too worried)
        return getComputerChoice();
    //ELSE IF remainder of num and 3 is 0 THEN
    } else if (num % 3 === 0 ){
        // return Rock
        return "Rock";
    //ELSE IF remainder of num and 3 is 1 THEN
    } else if (num % 3 === 1){
        // return Paper
        return "Paper";
    //ELSE remainder of num and 3 is 2 THEN
    } else {
        // return Scissors
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