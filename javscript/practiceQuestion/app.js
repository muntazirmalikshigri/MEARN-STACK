//      practice Question

let arr = [1,2,3,4,5,6,2,3];
let newArr = arr.filter(item=>item!==2);
console.log(newArr)
let num = 234525;
let count = num.toString().length;
console.log(count);
let num2 = 45464;
let sum = num2.filter(function(){
    for(let i = 0;i<num2.length;i++){
        sum+=i;
    }
})
console.log(sum)