//Using readline module to replace process.stdin and process.stdout
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const questions = [
//     "What is your name? ",
//     "Where do you live? ",
//     "What are you going to do with node js? "
// ];

//done: invoke this callback function
//collectAnswers is a reusable function, we can move it to its own module
// const collectAnswers = (questions, done) => {
//renaming it to modules so that consumers can call what they want
module.exports = (questions, done = f => f) => { //create a dummy function for done f => f. It doesn't do anything, therefore making done callback function optional
    const answers = [];
    //grab the first question by destructing it from array of questions
    // const [firstQuestion, secondQuestion, thridQuestion ] = questions;
    const [firstQuestion] = questions;
    //rl.question, first para is string, second para is callback func
    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length)
        {
            //ask another question if not finished
            rl.question(questions[answers.length], questionAnswered);
        }
        else{
            done(answers);
        }
    }
    rl.question(firstQuestion, questionAnswered);
    // done(answers);
};
