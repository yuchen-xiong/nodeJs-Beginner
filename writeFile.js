const fs = require("fs");

//mark down
const md = `
#This is a new file

We can write text to a file with fs.writeFile


* fs.readdir
* fs.readFile
* fs.writeFile


`;

//2nd argument: the text we want to use; 3rd argument: call back
fs.writeFile("./assets/notes.md", md.trim(), err => {
    if(err)
    {
        throw err;
    }
    console.log("file saved");
});