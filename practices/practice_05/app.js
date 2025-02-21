//Qsl. Create a new input and button element on the page using JavaScript only. Set the
//text of button to "Click me;

let input = document.createElement("input");
let button = document.createElement('button');
document.querySelector('body').appendChild(input);
document.querySelector('body').appendChild(button);
button.textContent = "click me!!!";

//Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'

button.setAttribute("id","btn");
input.placeholder = "username";
console.log(button)


// Qs3. Access the btn using the querySelector and button id. Change the button background 
// color to blue and text color to white.
let buttonId=document.querySelector('#btn');
buttonId.style.backgroundColor = "blue";
buttonId.style.color = "white";

// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. 
// Change its color to purple.

let h1Element = document.createElement('h1');
h1Element.textContent = "DOM Practice";
document.querySelector('body').appendChild(h1Element);
h1Element.style.color = "purple";
h1Element.style.textDecoration = "underline";


// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold

let pElement = document.createElement('p');
pElement.innerHTML = "hello <b>Muntazir<b />";
document.querySelector('body').appendChild(pElement);


