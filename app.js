
let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const comScorePara=document.querySelector("#computer-score")


const genComChoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
    const randIndex=Math.floor(Math.random()*3);
    return options[randIndex];
}
const msg=document.querySelector("#msg");

const drawGame=()=>{
    // console.log("game was Draw");
    msg.innerText="Game Was Draw....Play Again!!!"
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        // console.log("choice was clicked",userChoice);
    })
})

const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice); 
    // generate computer choice
    const comChoice=genComChoice();
    console.log("computer choice = ",comChoice);

    if(userChoice==comChoice){
       drawGame(); //Draw Game
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=comChoice=="paper"?false:true;
        }else if(userChoice=="paper"){
            userWin=comChoice=="scissors"?false:true;
        }else{
            userWin=comChoice=="rock"?false:true;
        }
        showWinner(userWin);
    }
    }

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("you win");
        msg.innerText=`You Win! `;
        msg.style.backgroundColor="green";
    }else{
        comScore++;
        comScorePara.innerText=comScore;
        // console.log("computer win")
        msg.innerText=`Computer Win! `;
        msg.style.backgroundColor="red";
    }
}


