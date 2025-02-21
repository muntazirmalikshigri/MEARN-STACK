let container = document.getElementById('container');
let pElement = document.createElement('p');
container.appendChild(pElement);
pElement.textContent="I am red";
pElement.style.color = 'red';
let h3Element = document.createElement('h3');
container.appendChild(h3Element);
h3Element.textContent = "I am blue";
h3Element.style.color = 'blue';


let div = document.createElement('div');
container.appendChild(div);

div.style.borderColor = 'red';
div.style.backgroundColor = "pink";

let h1Elment = document.createElement('h1');
div.appendChild(h1Elment);
h1Elment.textContent = "Hey I am in div";
h1Elment.style.color = "red";
let p2Element = document.createElement('p');
p2Element.textContent = "Me too!!";
div.appendChild(p2Element);
