function computerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function userChoice(){
    let userChoice;
    const userPrompt = prompt("Enter 1 For Rock,2 For Paper Or 3 For Scissors","1");
    if (userPrompt == "1"){
        userChoice = "Rock";
    }
    else if (userPrompt == "2"){
        userChoice = "Paper";
    }
    else{
        userChoice = "Scissors"
    }
    return userChoice;
}
function machineWins(){
    alert("Machine Wins !")
}

function userWins(){
    alert("Hooman Wins !")
}

function playRound(human, machine) {

    if (playerSelection === computerSelection) {
      alert("It's A Tie!");
    }
    if ((human == 'Rock' && machine == 'Scissors') || (human == 'Scissors' && machine == 'Paper') || (human == 'Paper' && machine == 'Rock')) {
      userWins();
    }
    if ((machine == 'Rock' && human == 'Scissors') || (machine == 'Scissors' && human == 'Paper') ||(machine == 'Paper' && human == 'Rock')) {
      machineWins()
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}
  
for (let i = 0; i < 5; i++) {
    const user = userChoice()
    const machine = computerChoice()
    playRound(user,machine)
}
