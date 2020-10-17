const waitTime = 5000;
const waitTimeInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitTimeInterval;
    //Math.floor gives us a decimal, we have a percentage (times 100 and trim the decimal using Math.floor)
    const p = Math.floor((currentTime / waitTime) * 100);
    // console.log(`waiting ${currentTime / 1000} seconds`);
    process.stdout.clearLine(); //clear the previous line
    process.stdout.cursorTo(0); //move the cursor back to the start of line
    process.stdout.write(`waiting ... ${p}%`);
};

console.log(`setting a ${waitTime / 1000} second delay`);

//one line, no need to add {} for simplicity 
//compared with 
// const ask = (i = 0) => {
//     process.stdout.write(`\n\n\n ${questions[i]}`);
//     process.stdout.write(` > `);
// };

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine(); //clear the previous line
    process.stdout.cursorTo(0); //move the cursor back to the start of line
    console.log("done")
};

//setInterval will call the incTime func over and over again every half second
const interval = setInterval(incTime, waitTimeInterval);
setTimeout(timerFinished, waitTime);