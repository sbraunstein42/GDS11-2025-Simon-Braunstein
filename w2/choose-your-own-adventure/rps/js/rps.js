//this variable is outside of any function.
let enemyLifeCount = 3;





function makeChoice(heroChoice) {

    //determine anyone's choice!
    function getRandomChoice() {
        let choice = "nothing, yet!";
        let number = Math.random();

        if(number > .33)
            choice = "scissors";
        else if(number > .66)
            choice = "paper";
        else 
            choice = "rock";

        return choice;
    }

    //enemy gets a random choice!
    let enemyChoice = getRandomChoice();

 

    let winner = "no one, yet!";

    //shortest (too short? no {}...)
    if (heroChoice == "scissors" && enemyChoice == "rock")
        winner = "hero";
    else if (heroChoice == "paper" && enemyChoice == "rock")
        winner = "hero";
    else if (heroChoice == "rock" && enemyChoice == "scissors")
        winner = "hero";
    else if (heroChoice == enemyChoice) //you might tie!
        winner = "no one";
    else
        winner = "enemy";


    if(winner == "enemy") {
        enemyLifeCount = enemyLifeCount - 1;
        document.getElementById("enemyStatus").innerHTML = 
            "Enemy has " + enemyLifeCount + " lives!";

        if(enemyLifeCount == 0) {
            alert("You defeated the enemy!");
            //relative to the html file, not the javascript file!
            sessionStorage.setItem("didPlayerWinRPS", "yes");
            window.location.href = "../index.html"
        }
    }


    let result = "";
    result = result + "Hero has " + heroChoice + "<br>";
    result = result + "Enemy has " + enemyChoice + "<br>";
    result = result + "Winner was: " + winner;
    document.getElementById("result").innerHTML = result;


    console.log("Hero has " + heroChoice);
    console.log("Enemy has " + enemyChoice);
    console.log("Winner: " +  winner);
}

function heroChoseRock() {
    makeChoice("rock")
}

function heroChosePaper() {
    makeChoice("paper")
}
function heroChoseScissors() {
    makeChoice("scissors")
}

let rockButton = document.getElementById("rockChoice");
rockButton.addEventListener("click", heroChoseRock);

let paperButton = document.getElementById("paperChoice");
paperButton.addEventListener("click", heroChosePaper);

let scissorsButton = document.getElementById("scissorsChoice");
scissorsButton.addEventListener("click", heroChoseScissors);

