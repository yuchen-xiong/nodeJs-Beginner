const path = require("path");
// const util = require("util");
const { log } = require("util"); //destructuring only the variable that I need
const { getHeapStatistics } = require("v8"); 
// const v8 = require("v8");

// const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

// console.log(dirUploads);
//util module have date, make it look official
// util.log(path.basename(__filename));
// util.log("^ The name of the current file");
//memory ususage
// util.log(v8.getHeapCodeStatistics());

log(getHeapStatistics()); 
//make code look better by destructing functions out of modules, 
// then you need to lookup require statements to know where these fuctions coming from
