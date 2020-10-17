const fs = require("fs");

//readdirSync: this function is read synchronously
//line 5 is blocking, meaning javascript is going to stop everything it is doing until all the 
//files within that directory are read before processing any more line of codes

// const files = fs.readdirSync("./assets");
//readdir will read asynchronously, but it won't set variable.
//once files are read, they will be pass back to a callback function in the 2nd argument
fs.readdir("./assets", (err, files) => {
    if(err)
    {
        throw err;
    }
    console.log("complete");
    console.log(files);
});

console.log("started reading files");
//since readdir are reading asynchronously, the below two logs might got executed before
//all files are read, so we need to put them in callback function
// console.log("complete");
// console.log(files);