//waiting for file to read file

var fs = require("fs");
var data = fs.readFileSync('dummyfile.txt');

console.log(data.toString());
console.log("Program Ended");




//Non Blocking

// var fs = require("fs");

// fs.readFile('dummyfile.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
// });

// console.log("Program Ended");