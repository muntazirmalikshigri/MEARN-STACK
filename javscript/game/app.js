//     guess game

const favoriteMovie="avatar";

let guessMovie = prompt("Enter movie name??");
while((guessMovie != favoriteMovie) && (guessMovie != "quit")){
   
    guessMovie = prompt("Wrong try again , Enter movie name??");
}
if(guessMovie==favoriteMovie){
    alert("Congrats")
}else{
    alert("you quit")
}