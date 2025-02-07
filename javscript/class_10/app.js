//    create a post using object

const post ={
    username:"muntazirmalik",
    content:"This is my first post",
    likes:250,
    repost:5,
    tags:["malik@123","fakhar@233"]
};
let prop = 'username'
console.log(post[prop])
post.likes=200;
console.log(post)
console.log(post.content);
delete post.repost;
console.log(post)


// nested objects

const classInfo ={
    fakhar:{
        class:3,
        marks:90
    },
    sohail:{
        class:4,
        marks:90
    },
    malik:{
        class:5,
        marks:80
    }
}
console.log(classInfo);
delete classInfo.sohail.marks;



let num = Math.floor(Math.random()*10)+1;

console.log(num);
let num2 = Math.floor(Math.random()*5)+20;
console.log(num2);


let max = +prompt("Enter your number?");
let num3 = Math.floor(Math.random()*max)+1;
let guess = +prompt("Enter a guess number?");
if(guess == num3){
    console.log("right")
}else{
    console.log("try again")
}