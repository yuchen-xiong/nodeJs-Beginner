//Using readline module to replace process.stdin and process.stdout
//don't need readline any more, incorporte readline to the collectAnswer module
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const collectAnswers = require("./lib/collectAnswers");
const collectAnswers = require("./lib/collectAnswers2");

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
];

//done: invoke this callback function
//collectAnswers is a reusable function, we can move it to its own module
// 
//change it to modules so that consumers can call what they want
// const collectAnswers = (questions, done) => {
//     const answers = [];
//     //grab the first question by destructing it from array of questions
//     // const [firstQuestion, secondQuestion, thridQuestion ] = questions;
//     const [firstQuestion] = questions;
//     //rl.question, first para is string, second para is callback func
//     const questionAnswered = answer => {
//         answers.push(answer);
//         if(answers.length < questions.length)
//         {
//             //ask another question if not finished
//             rl.question(questions[answers.length], questionAnswered);
//         }
//         else{
//             done(answers);
//         }
//     }
//     rl.question(firstQuestion, questionAnswered);
//     // done(answers);
// };

//custom defined func
// collectAnswers(questions, callback): send an array of the questions and a callback to handle
// const answerEvents = collectAnswers(questions, answers => {
//     console.log("Thank you for your answers. ");
//     console.log(answers);
//     process.exit();
// });

const answerEvents = collectAnswers(questions);


answerEvents.on("answer",  answer => 
    console.log(`question answered: ${answer}`)
);
//maybe users don't want to handle callback when questions are answered, then need to make call back optional
// collectAnswers(questions);

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    // process.exit();
})

answerEvents.on("complete", () => process.exit());