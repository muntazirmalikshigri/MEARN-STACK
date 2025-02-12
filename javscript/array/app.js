//   forEach element

let arr = [1,3,4,5,6,7];
arr.forEach(function(el){
    console.log(el)
});

arr.forEach((el)=>{
    console.log(el)
});

let arr1 = [
    {
        name:"Muntazir",
        marks:90
    },
    {
        name:"fakhar",
        marks:95
    },
    {
        name:"Sohail",
        marks:92
    }
];

arr1.forEach((student)=>{
    console.log(student.marks);
});

let arr2 = [1,2,3,4];
let double = arr2.map((el)=>{
    return el*2;
});
console.log(double);

//    every

let every = arr2.every((el)=>el%2==0);
console.log(every);
let some = arr2.some((el)=>el%2==0);
console.log(some);

//   reduce

let reduce = arr2.reduce((res,el)=>res + el);
console.log(reduce);

let max = null;
for(let i = 0 ;i<arr2.length;i++){
    if(max < arr2[i]){
        max = arr2[i]
    }
}
console.log(max)

let max1 = arr2.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max1;
    }
});
console.log(max1);

let mul10 = arr2.every((el)=>{
    if(el%10==0){
        console.log("Yes all numbers are divible by ten");
    }else{
        console.log("No all numbers is not divisible by ten");
}
});


let minNum = arr2.reduce((min,el)=>{
     if(min<el){
        return min;
     }else{
       return el;
     }
});
console.log(minNum);


// spread

console.log(..."Muntazir Malik")