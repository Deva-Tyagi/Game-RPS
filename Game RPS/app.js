let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorepara = document.querySelector('#user-score')
const compScorepara = document.querySelector('#comp-score')


const genCompChoice = () =>{
    const options=["Rock","Paper","Scissors"]
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}
const msg = document.getElementById('msg');

const drawGame = () =>{
    msg.innerHTML="Match has been draw ! Play Again."
    msg.style.backgroundColor="#081b31"
}
const showWinner = (userWin,userChoice,compChoice) =>{
    userScore++;
    userScorepara.innerHTML=userScore;
    if(userWin){
        msg.innerHTML = `You win your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }
    else{
        compScore++;
        compScorepara.innerHTML=compScore;
        msg.innerHTML = `You lost  ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor="red"
    }
}

const playGame = (userChoice) =>{
     
     const compChoice = genCompChoice();
    

     if(userChoice===compChoice){
        drawGame();
     }
     else{
        userWin = true;
        if(userChoice==="Rock"){
            userWin = compChoice==="Paper" ? false : true;
        }
        else if(userChoice==="Paper"){
            userWin = compChoice==="Scissors" ? false : true; 
        }
        else{
            userWin = compChoice==="Rock" ? false : true;
        }
        showWinner(userWin, userChoice , compChoice);
     }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
        
    })


});