//this file can be consumed by required function in another file
// Within every javascript file, all of the variables are scoped to that module
//the file consumes this module won't access to the count variable
//we need to create a function to return count;
let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

//module.exports allows us to export any object type

// module.exports = "Alex";

module.exports = {
    inc, 
    dec,
    getCount
};