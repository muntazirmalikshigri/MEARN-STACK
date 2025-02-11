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
console.log(double)