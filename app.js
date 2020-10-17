// const name = require("./myModule"); //when we want to load other js file, we need to provide the path

// const counter = require("./myModule");

//we can also destructured this funcion when we invoke the require function, make code look clean
//instead of setting to counter object, I only destructured what I need

const {inc, dec, getCount} = require("./myModule")

// console.log(name);

// counter.inc();
// counter.inc();
// counter.inc();

inc();
inc();
inc();
dec();

// console.log(counter.getCount());

console.log(getCount());