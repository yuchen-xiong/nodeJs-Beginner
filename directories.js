const fs = require("fs");

fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});

//rename directory
// fs.renameSync("./storage-files", "./storage");

// remove directory
fs.rmdir("./storage", err => {
    if(err)
    {
        throw err; //we will get directory not empty error, need to delete all files before delete directory
    }
    console.log("./storage directory removed"); 
});