const fs = require("fs");

//rename a file
// fs.renameSync("./assets/colors.json", "./assets/colorData.json");

//move another file
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if(err)
    {
        throw err;
    }
});

setTimeout(() => {
    //remove file in 4 sec
    fs.unlinkSync("./assets/alex.jpg")
}, 4000);