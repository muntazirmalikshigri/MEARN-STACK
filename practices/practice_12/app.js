
let numbers = [2, 4, 6, 8, 10];
let doubledNumbers = numbers.map((num) => num * 2);
console.log("Task 1 - Doubled Numbers:", doubledNumbers);

let words = ["apple", "banana", "cherry"];
let lengths = words.map((word) => word.length);
console.log("Task 2 - Word Lengths:", lengths); 

let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];
let prices = products.map((product) => product.price);
console.log("Task 3 - Product Prices:", prices);


let numbers2 = [1, 2, 3, 4, 5];
let stringNumbers = numbers2.map((num) => num.toString());
console.log("Task 4 - String Numbers:", stringNumbers);

let fruits = ["Apple", "Banana", "Cherry"];
let indexedFruits = fruits.map((fruit, index) => `${index}-${fruit}`);
console.log("Task 5 - Indexed Fruits:", indexedFruits);