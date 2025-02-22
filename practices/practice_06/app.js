// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load
// [Use MDN for help

let div = document.querySelector("div");
div.addEventListener("mouseout",function(){
    console.log("You remove the mouse");
});
div.addEventListener("mouseenter",function(){
    console.log("You enter the mouse")
});
div.addEventListener('scroll',function(){
    console.log("You scroll the mouse")
})
let inp = document.querySelector("input");
inp.addEventListener("keypress",function(){
    console.log("you enter the key")
})

// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked

let body = document.querySelector('body');
let btn = document.createElement("button");
btn.textContent = "clicl me"
body.appendChild(btn);

btn.addEventListener("click",function(){
    btn.style.backgroundColor = 'magenta';
    btn.style.color = 'white'
    btn.style.marginTop = '10px'
})



// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading

let inpt = document.querySelector("#malik");
let h2Element = document.querySelector("h2");


inpt.addEventListener("input",function(){
    h2Element.textContent = inpt.value
})