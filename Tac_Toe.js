const box = document.querySelectorAll('.box')
const box_1 = document.querySelector('#box_1')
const box_2 = document.querySelector('#box_2')
const box_3 = document.querySelector('#box_3')
const box_4 = document.querySelector('#box_4')
const box_5 = document.querySelector('#box_5')
const box_6 = document.querySelector('#box_6')
const box_7 = document.querySelector('#box_7')
const box_8 = document.querySelector('#box_8')
const box_9 = document.querySelector('#box_9')
const tie = document.querySelector('#tie')
const player_X = document.querySelector('#player_X')
const player_O = document.querySelector('#player_O')
const reset = document.querySelector('#reset')


let currentPlayer = 'O';
let win = "WIN";
let lose = "LOSE";


const winConditions = [
  [box_1, box_2, box_3],
  [box_4, box_5, box_6],
  [box_7, box_8, box_9],
  [box_1, box_4, box_7],
  [box_2, box_5, box_8],
  [box_3, box_6, box_9],
  [box_1, box_5, box_9],
  [box_3, box_5, box_7]
]




for (let bx of box) {
  bx.addEventListener('click', function () {
    currentPlayer = currentPlayer === "O" ? "X" : "O";
    bx.innerHTML= currentPlayer;
    check();
    resetGame();
  })
}


function check() {
  let won = false;
  
  for (let i = 0; i < winConditions.length; i++) {
    let winCondition = winConditions[i];
    if( winCondition[0].innerHTML=== "" || winCondition[1].innerHTML === "" || winCondition[2].innerHTML === "" ){

      continue;
    }
    if (winCondition[0].innerHTML === winCondition[1].innerHTML && winCondition[1].innerHTML === winCondition[2].innerHTML){
        console.log("winnn");
        won = true;
        box.disabled = true;       
        break;
    }
   
}

if(won && currentPlayer === 'X'){
  player_X.innerHTML = win;
  //player_X.display.classList.add("has-text-success");
  player_O.innerHTML = lose; 
  //player_X.display.classList.add("has-text-danger"); 
  tie.innerHTML = "";



} else if(won && currentPlayer === 'O'){
  player_O.innerHTML = win;
  player_X.innerHTML = lose;
  tie.innerHTML = "";

}else if(
  player_O.innerHTML !== win &&
  player_X.innerHTML !== lose
) {
  tie.innerHTML = "TIE";
}
}



function resetGame(){
   reset.addEventListener('click', function(){
    box.forEach(box => box.innerHTML = "");
    player_X.innerHTML = "";
    player_O.innerHTML = "";
    tie.innerHTML = "";
   })
}