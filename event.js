const events = require("events"); //core module comes with nodeJS

const emitter = new events.EventEmitter();

//event handler
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

//raise a custom event, first argument: event name, next set will be data passed to event
emitter.emit("customEvent", "Hello Word", "Computer");
emitter.emit("customEvent", "That's pretty cool huh?", "Alex");

//emitter allows us to raise an event, and we can use on function to listen to event
process.stdin.on("data", data => {
    const input = data.toString().trim();
    if(input == "exit")
    {
        emitter.emit("customEvent", "Goodbye!", "process");
        process.exit();
    }
    //message is input, terminal is the user
    emitter.emit("customEvent", input, "terminal");
});