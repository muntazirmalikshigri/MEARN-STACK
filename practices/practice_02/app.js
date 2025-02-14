//   filter

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


//   map

let number = [1, 2, 3, 4, 5];

let doubledNumbers = number.map(function(num) {
    return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]