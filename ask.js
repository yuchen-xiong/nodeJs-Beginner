const readline = require("readline");

//read/write from console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//1st para: the answer string; 2nd para: call back function
//async process running and wait for answer to be invoked
rl.question("How do you like Node? ", answer => {
    console.log(`Your answer: ${answer}`);
});