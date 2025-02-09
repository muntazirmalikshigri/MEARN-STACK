//   make a dice
function printDice(){
    let num = Math.ceil(Math.random()*6)+1;
    console.log(num)
};


//   functions with arguments

function printName(name){
    console.log(name);
}
printName("Muntazir Malik Shigri")

//  using two paramaters


function printInfo(name,age){
    console.log(`Your name is ${name} and age is ${age}`);
}

printInfo("Muntazir Malik Shigri",22)


//  create a fuctions that gives us the average of three numbers


function avg3num(num1,num2,num3){

    console.log((num1+num2+num3)/3);
};

avg3num(15,5,10);


//  multipalication function of a number

function multiOfNum(num){
for(let i=1;i<=10;i++){
    console.log(`${num} X ${i} = ${num*i}`)
}
};
multiOfNum(3);

function returnSum(a,b){
    console.log(3);
    console.log(4)
    return a+b;
    console.log('malik')
}

// let sum = returnSum(2,5);
// console.log(sum)


//   create a function that return sum of from 1 to n

function from1ToN(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum = sum+i;
    }
    return sum;
}
console.log(from1ToN(1000))

// nested function

function outerFuntion(){
    let a = 10;
    let b = 20;
    console.log(a+b)
    function innerFuntion(){
        console.log(a);
        console.log(b);

    }
    // innerFuntion()

}
outerFuntion();



//higher order fnction

function printMulTime(func,n){
  for(let i = 0;i<=n;i++){
      func();
  }
};
let greet = function(){
    console.log("malaik")
}



printMulTime(greet,10)










