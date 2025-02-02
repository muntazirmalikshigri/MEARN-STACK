//   truthy and flasy value in js
let num = 0;
if(num){
    console.log("true")
}else{
    console.log("false")
}

//     switche statements 
let color = 'green';

switch(color){
    case  "red":
        console.log("stop");
        break;
    case "green" :
        console.log("Go");
        break;
    case "yellow":
        console.log("slow down");
        break;
    default :
    console.log('Wrong input')  ;  
}
 //    switched statements practice

let day = 3;
switch(day){
    case  1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("sturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default :
    console.log('Wrong input')  ;  
}


let name = prompt("Enter your name");
let age = prompt("Enter your age")
alert(`Your age is ${age} and name is ${
    name
}`);


// practice

let numb = 30;
if(numb%10==0){
    console.log("Good")
}else{
    console.log("Bad")
}