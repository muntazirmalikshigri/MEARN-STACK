//    practice

let str = "malikjeealkjlakhrajlkj";
function sameStr(){
    let ans="";
    for(let i = 0;i<str.length;i++){
        // console.log(str[i])
        if(str[i]==str[i]){
           str[i].pus
        }
    }
 
}



//    this keyword

let student={
    name:"Muntazir",
    eng:80,
    urdu:90,
    phy:95,
    getAvg(){
        let avg=(this.eng+this.urdu+this.phy)/3;
        console.log(avg)
    }
}
// console.log(Math.floor(BigInt(student.getAvg())));


//   try and catch


console.log("Hello1");
console.log("Hello2");
console.log("Hell03");

try{
    console.log(a);
}catch(error){
    console.log("Caught an error...a is an not defined");
    console.log(error)
}
console.log("Hello4");
console.log("Hello5");


// arrow function

let sum=(a,b)=>{
    console.log(a+b)
}
sum(30,60)

//  settimeot function

setTimeout(() => {
    console.log("Hill Park")
}, 3000);

console.log("muntazir malik");

//  setInterval  finction

let id = setInterval(()=>{
    console.log("repeat")
},4000);

clearInterval(id);

//    return square of a number

let squareNum = (n) =>{
    return n*n;
}
console.log(squareNum(8))


let id1 =setInterval(()=>{
    console.log("Hello munna")
},2000);
setTimeout(() => {
    clearInterval(id1)
},10000);


