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

for (let i = 0; i < 4; i++) {
    const user = userChoice()
    const machine = computerChoice()
    
}
