//  arrays

let arr = ["malik","fakhar","sohail"];
//  arrays are mutable
arr[7]="aslam";
arr.push("bashir");
arr.unshift("shakeel")
let blocked = arr.shift();
console.log(blocked)
console.log(arr)
console.log(arr.length);
let arr1 = ["shakeel",3,4.4];
console.log(arr1.length)


let month = ["january","july","march","august"];
month.shift()
month.shift()
month.unshift("june")
month.unshift("july")
console.log(month)
let final = ["july","june","march","august"];
console.log(final)
console.log(final.indexOf("march"))
console.log(month.concat(final))
console.log(final.reverse())
