//Qs1. Square and sum the array elements using the arrow function and then find the
//average of the array;
let nums = [1,2,3,4,5];
const square = nums.map((num)=>{
    return num * num;
});
console.log(nums);
console.log(square);
let sum = square.reduce((acc,curr)=>acc+curr,0);
console.log(sum);
let avg = sum/nums.length;
console.log(avg);
//Qs2. Create a new array using the map function whose each element is equal to the
//original element plus 5

let plusfive = nums.map((el)=>el+5);
console.log(plusfive)

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original arra
let str = ["fakhar","sohail","adam"];
console.log(str);
let toUppr=str.map((el)=>el.toUpperCase());
console.log(toUppr)
// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled

const doubleAndRetursArgs = (arr , ...args)=>[
    ...arr,
    ...args.map((v)=>v*2),
];


doubleAndRetursArgs([1,2,3],4,4);
doubleAndRetursArgs([2],10,4);

const mergeObjects = (obj1 , obj2) => ({...obj1,obj2});
mergeObjects({a:1,b:2},{c:3,d:4});
console.log(doubleAndRetursArgs);
console.log(mergeObjects);





















// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object