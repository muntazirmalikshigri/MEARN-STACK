async function delayedMessage() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Hello, World!");
}

delayedMessage();