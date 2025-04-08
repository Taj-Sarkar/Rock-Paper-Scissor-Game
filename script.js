document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");
    const resultDiv = document.getElementById("result");
    const gameResult = document.getElementById("game-result");
    const userChoiceText = document.getElementById("user-choice");
    const computerChoiceText = document.getElementById("computer-choice");
    const playAgainBtn = document.getElementById("play-again");
    const historyList = document.getElementById("history-list");

    let history = [];

    choices.forEach(choice => {
        choice.addEventListener("click", () => {
            const userChoice = choice.dataset.choice;
            playGame(userChoice);
        });
    });

    function playGame(userChoice) {
        const gameOptions = ["Rock", "Paper", "Scissor"];
        const computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];

    
        const emojiMap = {
            "Rock": "✊",
            "Paper": "🤚",
            "Scissor": "✌️"
        };

        
        let result = "";
        if (userChoice === computerChoice) {
            result = "🤝 It's a Tie!";
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissor") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissor" && computerChoice === "Paper")
        ) {
            result = "🎉 You Win!";
        } else {
            result = "😢 You Lose!";
        }

        
        const matchResult = `${emojiMap[userChoice]} vs ${emojiMap[computerChoice]} - ${result}`;
        history.unshift(matchResult);
        updateHistory();

        
        gameResult.textContent = result;
        userChoiceText.innerHTML = `You chose: ${emojiMap[userChoice]} (${userChoice})`;
        computerChoiceText.innerHTML = `Computer chose: ${emojiMap[computerChoice]} (${computerChoice})`;
        resultDiv.classList.remove("hidden");

        
        document.getElementById("choices").style.display = "none";
    }

    function updateHistory() {
        historyList.innerHTML = "";
        history.forEach(match => {
            const li = document.createElement("li");
            li.textContent = match;
            historyList.appendChild(li);
        });
    }

    
    playAgainBtn.addEventListener("click", () => {
        resultDiv.classList.add("hidden");
        document.getElementById("choices").style.display = "flex";
    });
});
