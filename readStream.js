const fs = require("fs");

//read binary or text string (text will need encoding parameter UTF-8)
const readSteam = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

let fileTxt = "";

//read it chunk by chunk/bit by bit
//instead of reading everything all at once, it saves memory of putting file content in buffer
console.log("type something...");
readSteam.on("data", data => {
  //-1 for press enter (line break)
  console.log(`I read ${data.length - 1} characters of text`);
  fileTxt += data;
});

readSteam.once("data", data =>{
    console.log(data); //very first bit of data will be put in console
});

//end event know readstream has completed
readSteam.on("end", () => {
    console.log("finished reading file");
    console.log(`In total I read ${fileTxt.length - 1} characters of text`);
});

// console.log("type something...");
// process.stdin.on("data", data => {
//   console.log(data.length);
//   //-1 for press enter (line break)
//   console.log(`I read ${data.length - 1} characters of text`);
// });

// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false //trim extra output
// });

// rl.on('line', line => {
//     console.log(`I read ${line.length} characters of text`);
// });