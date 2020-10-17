const cp = require("child_process");

const questionApp = cp.spawn("node", ["question2.js"]);

//we answer all the questions all at once
questionApp.stdin.write("Alex \n");
questionApp.stdin.write("Tahoe \n");
questionApp.stdin.write("Change the world \n");

//question2.js is not closed because this is asynchronous app, it will remain open
questionApp.stdout.on("data", data =>{
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () =>{
    console.log(`questionApp process exited`);
});