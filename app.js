let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let resetBtn = document.querySelector("#reset-btn");

let userCircle = document.querySelector("#user-choice-img");
let compCircle = document.querySelector("#comp-choice-img");

let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark");
        body.classList.remove("light");

        userCircle.classList.add("light");
        compCircle.classList.add("light");

        userCircle.classList.remove("dark");
        compCircle.classList.remove("dark");
    }else{
        currMode = "light";
        // document.querySelector("body").style.backgroundColor="white";
        body.classList.add("light");
        body.classList.remove("dark");

        compCircle.classList.add("dark");
        userCircle.classList.add("dark");

        userCircle.classList.remove("light");
        compCircle.classList.remove("light");
    }
    console.log(currMode);
})

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame(userChoice, compChoice);
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

// Function to generate the computer choice for game
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = (userChoice, compChoice) => {
    msg.innerText = "Game was draw, play again!";
    msg.style.backgroundColor = "#081b31";
    updateChoiceImages(userChoice, compChoice);
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    updateChoiceImages(userChoice, compChoice);
}

const updateChoiceImages = (userChoice, compChoice) => {
    userCircle.src = `./Images/${userChoice}.png`;
    compCircle.src = `./Images/${compChoice}.png`;
}

const resetGame = () => {
    userScore = 0;
    userScorePara.innerText = userScore;
    compScore = 0;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move!";
    msg.style.backgroundColor = "#081b31";
    userCircle.src = "";
    compCircle.src = "";
    console.clear();
};

resetBtn.addEventListener("click", resetGame);
