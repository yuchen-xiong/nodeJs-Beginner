const fs = require("fs");

//1st argument: file path, 2nd argument: encoding of file (text file - UTF - 8)
// const text = fs.readFileSync("./assets/Readme.md", "UTF-8");

// fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
//     console.log("file contents read");
//     console.log(text);
// });
// console.log(text);

//binary files can also be read, binary file doesn't supply encoding
fs.readFile("./assets/alex.jpeg", (err, img) => {
    if(err)
    {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(img);
});