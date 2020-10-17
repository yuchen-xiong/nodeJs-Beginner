//Improve collectAnswer.js using EventEmitter
const readline = require("readline");
//destructing the EventEmitter right when I reqire our events module
//that way I can use it directly without having to preface it with events dot
const { EventEmitter } = require("events");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, done = f => f) => { 
    const answers = [];
    const [firstQuestion] = questions;
    const emitter = new EventEmitter(); //constructor

    const questionAnswered = answer => {
        emitter.emit("answer", answer); //raise an event when user answer a question 
        answers.push(answer);
        if(answers.length < questions.length)
        {
            //ask another question if not finished
            rl.question(questions[answers.length], questionAnswered);
        }
        else{
            emitter.emit("complete", answers);
            done(answers);
        }
    }
    rl.question(firstQuestion, questionAnswered);
    
    return emitter; //now we can use emitter to raise event when certain things happen to this func
};
