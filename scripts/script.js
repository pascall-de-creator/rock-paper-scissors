var userScore = 0
var computerScore = 0
var playStatus = "Start"
var playerScores = document.getElementById("user_score")
var computerScores = document.getElementById("computer_score")
var gameStatus = document.getElementById("status")

function play(item) {
    var rand = Math.floor(Math.random() *3)

    // compare items
    if (rand == 0 && item == 1 || rand == 1 && item == 2 || rand == 2 && item == 0) {
        userScore++
        playStatus = "Won"
        computerScores.innerText = userScore
        gameStatus.innerText = playStatus
    }
    else if (rand == 1 && item == 0 || rand == 2 && item == 1 || rand == 0 && item == 2) {
        computerScore++
        playStatus = "Lost"
        playerScores.innerText = computerScore
        gameStatus.innerText = playStatus
    }
    else{
        playStatus = "Draw"
        gameStatus.innerText = playStatus
    }

    // winner n looser
    if (userScore == 5){
        Winner("You Won")
    }
    else if (computerScore == 5){
        Winner("Computer Won")
    }
} 

function Winner(winner) {
    var endScreen = document.getElementById("end").style
    if (winner == "Computer Won"){
        var winText = document.getElementById("appil").innerText = "Owwww, sorry :("
    }
    else{
        var winText = document.getElementById("appil").innerText = "Congratulations!"
    }
    var winText = document.getElementById("winner").innerText = winner
    endScreen.display = "flex"
}

function restart() {
    computerScore = 0
    userScore = 0
    playerScores.innerText = computerScore
    computerScores.innerText = userScore
    gameStatus.innerText = "Start"
    var endScreen = document.getElementById("end").style
    endScreen.display = "none"
}