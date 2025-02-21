// let btns = document.querySelectorAll("button");

// btn.onclick = function(){

//     console.log("button was clicked");

// }
// for(btn of btns){
//     btn.onclick = sayHello;
//     console.dir(btns);
//      btn.onmouseenter = function(){
//         console.log("You entered a button");
//     btn.addEventListener('mouseenter',function(){
//         console.log("Muntazir Malik")
//     })
//     }


let btn = document.querySelector('button');
let h1Element = document.querySelector('h1');
let div = document.querySelector("div");
btn.addEventListener('click',function(){
    let randomColor = colorBtn();
    h1Element.textContent=randomColor;
    h1Element.style.color = randomColor;
    div.style.backgroundColor = randomColor;
    btn.style.backgroundColor=randomColor;
    btn.style.color = "white";

})
function colorBtn(){
    // div.style.backgroundColor ='red';
    // h1Element.style.color='red';
    // btn.style.backgroundColor = "red";
    // btn.style.color="white"

    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    

    let color = `rgb(${red} , ${blue} , ${green})`
    return color;
}
