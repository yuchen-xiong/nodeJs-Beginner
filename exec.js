const cp = require("child_process");

//all the commands I just executed are synchronous; they run once, spit out some data and process ends
//execute function is for synchronous commands

//open a web page
// cp.exec("open http://www.linkedin.com/learning");

//open a new terminal window
// cp.exec("open -a Terminal .");

//grab ls data
// cp.exec("ls", (err, data) => {
//     if(err)
//     {
//         throw err;
//     }

//     console.log(data);
// });

//stderr will be the error from command
cp.exec("lst", (err, data, stderr) => {
    console.log(stderr);
});

//exec command can be used to execute any synchronous process
//It is going to run another node js file
cp.exec("node readStream", (err, data, stderr) => {
    console.log(data);
});


//execute is designed to handle synchronous processes. These are processes that run and close and maybe spit back some data on a one time event
//However, execute is not meant to handle a synchronous processes, this could mean long running processes or processes that are waiting for input
//or anything that remains open