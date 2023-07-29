let userTotal = 0
let machineTotal = 0
const buttons = document.querySelectorAll('.btn')
let winner = ""

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(userChoice) {
    let machineChoice = computerPlay()
    let result = ""

    if ((userChoice == 'rock' && machineChoice == 'scissors') ||
        (userChoice == 'scissors' && machineChoice == 'paper') ||
        (userChoice == 'paper' && machineChoice == 'rock')) {
        
        userTotal += 1
        result = ('The User Won. User Chose '+ userChoice + ' While Machine Chose '+ machineChoice)

        if (userTotal == 5) {
            winner = "The Winner Is The User!"
            disableButtons()
        }
    }
    else if (userChoice == machineChoice) {
        result = (`A Tie Has Occured, Both of You Chose ${userChoice}`)
    }
    else {
        machineTotal += 1
        result = (`The Machine Won. User Chose ${userChoice} While Machine Chose ${machineChoice}`)

        if (machineTotal == 5) {
            winner = 'The Machine Won The Game!'
            disableButtons()
        }
    }

    document.querySelector('.result-round').innerHTML = result
    document.querySelector('.user-score').textContent = userTotal
    document.querySelector('.machine-score').textContent = machineTotal
    document.querySelector('.winner').textContent = winner

}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})