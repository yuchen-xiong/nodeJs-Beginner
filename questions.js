//clear keyword: clear terminal
//console.log will always add a new line
// process.stdout.write("Hello ");
// process.stdout.write("Word \n\n\n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your perferred programming language?"
];

//defaut i is 0
const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask(); //ask the first question

//use on function to listen for events, the event we listen is data event (type something)
//the application listens to input data, the application will be open and running
//continue running and listen to data, ctrl+c to exit manually
//process.exit();

const answers = [];

process.stdin.on('data', data =>{
    // process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
    // process.exit();
    answers.push(data.toString().trim());

    if(answers.length < questions.length)
    {
        ask(answers.length); //answered the 1st question already, ask the second question
    }
    else{
        process.exit(); //have all the answers
    }
});

//template string we are using honors white spaces
process.on('exit', () => {
    const [name, activity, lang] = answers;
    console.log(`
    
Thank you for your answers.

Go ${activity} ${name} you can write ${lang} code later!!!
    
    `);
});