const fs = require("fs");

const colorData = require("./assets/colors.json")

//if the file is not exist, it will create one and append to existing file
colorData.colorList.forEach(c => {
    fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex} \n`, err =>{
        if(err)
        {
            throw err;
        }
    });
});