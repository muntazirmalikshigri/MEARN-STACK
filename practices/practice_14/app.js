
let promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise 1: Data fetched successfully!");
    } else {
        reject("Promise 1: Failed to fetch data!");
    }
});

promise1
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise 1: Operation completed!");
    });

let fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 2: Step 1 completed!");
        }, 1000);
    });
};

fetchData()
    .then((data) => {
        console.log(data);
        return "Promise 2: Step 2 completed!";
    })
    .then((data) => {
        console.log(data);
        return "Promise 2: Step 3 completed!";
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });


let fetchUserData = () => {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
};

fetchUserData()
    .then((user) => {
        console.log("Promise 3: User Data:", user);
    })
    .catch((error) => {
        console.log("Promise 3: Error:", error);
    });

let promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 4: Task 1 completed!"), 2000);
});

let promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 4: Task 2 completed!"), 1000);
});

Promise.all([promise2, promise3])
    .then((results) => {
        console.log("Promise 4: All tasks completed:", results);
    })
    .catch((error) => {
        console.log("Promise 4: Error:", error);
    });