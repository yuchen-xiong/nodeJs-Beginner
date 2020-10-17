const fs = require("fs");
const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");
// process.stdout.write("hello");
// process.stdout.write(" world\n");

// writeStream.write("hello");
// writeStream.write(" world\n");

// process.stdin.on("data", data =>{
//     writeStream.write(data);
// });

// readStream.on("data", data =>{
//     writeStream.write(data);
// });

//simple way to save read from console to writeStream file
// process.stdin.pipe(writeStream);

readStream.pipe(writeStream);