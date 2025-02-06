let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice img");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"]; 
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    // console.log("game was draw.")
    msg.innerText = "Game was Draw. Play again"
    msg.style.backgroundColor = "#260625"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;

        // console.log("You Win")
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++
        compScorepara.innerText = compScore;

        // console.log("You Lose")
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    // console.log("user choice", userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice", compChoice);

    if (userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // option for computer choice is paper and scissor other same means draw match already written upside
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //computer choice are rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor") {
            // userChoice is scissor
            //computer choice are rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})
