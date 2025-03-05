
let simplePromise = new Promise((resolve, reject) => {
    let success = true; 

    
    setTimeout(() => {
        if (success) {
            resolve("Data successfully fetched!");
        } else {
            reject("Failed to fetch data!");
        }
    }, 2000);
});

simplePromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise completed!"); 
    });

    