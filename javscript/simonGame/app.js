// let gameSeq =[];
// let userSeq =[];

// let btns = ["yellow","red","purple","green"];

// let started = false;

// let level =0;
// let btn = document.querySelector("button");
// let h2 = document.querySelector('h2');
// document.addEventListener("keypress",function(){
//     if(started==false){
//         started = true;
//     h2.innerText ="game started";
//     levelUp();
//     }
// });
 
// function btnFlash(){
//     btn.classList.add('flash')
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     },1000)
// }

// function levelUp(){
//     level++;
//     let randIdx = Math.floor(Math.random()*3);
//     let randomColor = btns[randIdx];
//     let randomBtn = document.querySelector(`.${randomColor}`);

//     h2.innerText = `level ${level}`;
//     btnFlash(randomBtn);
// }





// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector('h2');
// // let btn = document.querySelectorAll('.');


// // Start the game on keypress
// document.addEventListener("keypress", function () {
//   if (started == false) {
//     started = true;
//     h2.innerText = "Game Started";
//     levelUp();
//   }
// });

// // Flash a button
// function btnFlash(btn) {
//   btn.classList.add('flash');
//   setTimeout(function () {
//     btn.classList.remove("flash");
//   }, 250); // Reduced flash duration for better UX
// }

// // Increase level and generate next sequence
// function levelUp() {
//   userSeq = []; // Reset user sequence for the new level
//   level++;
//   h2.innerText = `Level ${level}`;

//   // Generate random color and add to game sequence
//   let randIdx = Math.floor(Math.random() * 4); // Fixed random index calculation
//   let randomColor = btns[randIdx];
//   gameSeq.push(randomColor);

//   // Flash the button for the random color
//   let randomBtn = document.querySelector(`.${randomColor}`);
//   btnFlash(randomBtn);
// }

// // Handle button clicks
// let allBtns = document.querySelectorAll("button");
// for (let btn of allBtns) {
//   btn.addEventListener("click", btnPress);
// }

// function btnPress() {
//   let btn = this;
//   btnFlash(btn); // Flash the clicked button

//   // Get the color of the clicked button
//   let userColor = btn.getAttribute("id");
//   userSeq.push(userColor); // Add to user sequence

//   // Check if the user sequence matches the game sequence
//   checkSeq(userSeq.length - 1);
// }

// // Check if the user sequence matches the game sequence
// function checkSeq(idx) {
//   if (userSeq[idx] === gameSeq[idx]) {
//     // If the entire sequence is correct
//     if (userSeq.length === gameSeq.length) {
//       setTimeout(levelUp, 1000); // Move to the next level
//     }
//   } else {
//     // Game over
//     h2.innerHTML = `Game Over! Your score was <b>${level}</b>. Press any key to restart.`;
//     resetGame();
//   }
// }

// // Reset the game
// function resetGame() {
//   started = false;
//   gameSeq = [];
//   userSeq = [];
//   level = 0;
// }






let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

// Start the game on keypress
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    h2.innerText = "Game Started";
    levelUp();
  }
});

// Flash a button
function btnFlash(btn) {
  btn.classList.add('flash');
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250); // Reduced flash duration for better UX
}

// Increase level and generate next sequence
function levelUp() {
  userSeq = []; // Reset user sequence for the new level
  level++;
  h2.innerText = `Level ${level}`;

  // Generate random color and add to game sequence
  let randIdx = Math.floor(Math.random() * 4); // Fixed random index calculation
  let randomColor = btns[randIdx];
  gameSeq.push(randomColor);

  // Flash the button for the random color
  let randomBtn = document.querySelector(`.${randomColor}`);
  btnFlash(randomBtn);
}

// Handle button clicks
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function btnPress() {
  let btn = this;
  btnFlash(btn); // Flash the clicked button

  // Get the color of the clicked button
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor); // Add to user sequence

  // Check if the user sequence matches the game sequence
  checkSeq(userSeq.length - 1);
}

// Check if the user sequence matches the game sequence
function checkSeq(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    // If the entire sequence is correct
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000); // Move to the next level
    }
  } else {
    // Game over
    h2.innerHTML = `Game Over! Your score was <b>${level}</b>. Press any key to restart.`;
    resetGame();
  }
}

// Reset the game
function resetGame() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}