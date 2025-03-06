async function greet(){
    // ag.hh()
    throw "weak connection"
    return "Hello"
};
greet()
.then((result)=>{
console.log("Promise was resolved");
console.log("data is ",result);
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log("Error is ",error);
    
})

