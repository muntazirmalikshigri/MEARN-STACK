let promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (1) {
        resolve("Success!");
    } else {
        reject("Error!");
    }
});
promise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("promise completed");
});