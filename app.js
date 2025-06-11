let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);// math .random is used for 0 lekar 2 random no ko  chooose karega har bar bacuse of * 3 / math.flore kiya to all decimal value hat jayengi
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Was Draw. Play Again !";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    // Genrate Computer choice -> modular programing it means har ek kam ke liye ek function banao so function ke tukde ban jayenge to component use ke liye aayenge*/
    const compChoice = genCompChoice();
    console.log("computer Choice =", compChoice);


    if (userChoice === compChoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true; // true means user jita hai kya nahi
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

};



// user choice or click event genrate
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);// playgame calling
    });
});



/* js logic ban gaya hai but abhi screen me logic dikhna hai to 
access the button play your move const msg se acces kiya 
show function me jaise user jit jata hai udhar msg.innerText ko "You Win!"*/