//  sorts in array


let cars = ["gwagon" , "corola","BMW","farrare","mehran"];
console.log(cars.sort());

let nums = [1,5,6,7,7,3,2,4,6,0];
console.log(nums.sort());

let start = ["january","july","march","august"];
// start.shift();
// start.shift();
// start.unshift("june")
// start.unshift("july")
let newArr = start.splice(0,1,"june")
console.log(start)
let final = ["july","june","march","august"];
let finaArr = final.splice(0,1,"july")
console.log(final)

let code = ['c','c++','js','python','kotlin','java','R'];
console.log(code)
console.log(code.reverse().indexOf("kotlin"));


// arrays in array

let num = [[ "X",null,"0"],[null,"X",null],["0",null,"X"]];
console.log(num)

let arr =[7,9,0,-2];
let newA=arr.slice(0,3)
console.log(newA)

let str = "malik";
if(str==""){
    console.log("string is blank")
}else{
    console.log("string is not blank")
}
if(str[1]==str[1].toLocaleLowerCase()){
    console.log("Charater is lower case");
}else{
    console.log("character is not lower case")
}
if(num[0].includes("X")){
    console.log("Yes includes")
}else{
    console.log("Not include")
}