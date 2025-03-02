setTimeout(()=>{
    console.log("first")
},3000);
console.log('second');

let h1 = document.querySelector('h1');
h1.style.color = 'purple'
function colorChange(color,delay){
setTimeout(()=>{
    h1.style.color = color;
},delay)

};
colorChange('pink',1000);
colorChange('green',2000);
colorChange('yellow',3000);
colorChange('magenta',4000);

