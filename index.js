let humanPoints = 0;
let machinePoints = 0;
let totalHumanPoints,totalMachinePoints
function computerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
function totalScore(hpoints,mpoints){
    totalHumanPoints = hpoints + totalHumanPoints;
    totalMachinePoints = mpoints + totalMachinePoints
    

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

    if (human == machine) {
      alert("It's A Tie!");
    }
    if ((human == 'Rock' && machine == 'Scissors') || (human == 'Scissors' && machine == 'Paper') || (human == 'Paper' && machine == 'Rock')) {
      userWins();
      humanPoints++
    }
    if ((machine == 'Rock' && human == 'Scissors') || (machine == 'Scissors' && human == 'Paper') ||(machine == 'Paper' && human == 'Rock')) {
      machineWins()
      machinePoints++
    }
    totalScore(humanPoints,machinePoints)
}
  
for (let i = 0; i < 5; i++) {
    const user = userChoice()
    const machine = computerChoice()
    playRound(user,machine)
}
