//   rest 

function sum(...args){
    for(let i = 0 ; i<args.length;i++){
        console.log("You gave us ",args[i])
    }
};
sum(1,3,5,6,7);



// destructuring

let names = ["sohail","fkahar","nasir","aslam","irfan"];
 let [first , second,...others]  = names;
 console.log(first , second,...others);
 console.log(others);



 let student = {
    id:102,
    name:"abc",
    email:"muntazirshigri.12@gmail.com",
    password:"123malik",
    city:"karachi",
    country:"Iran"
 };
 let {name , password ,country = "pakistan"} = student;
 console.log(country);
 


