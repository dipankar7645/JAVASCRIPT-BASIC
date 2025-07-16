// same line print

// process.stdout.write("Hello ");
// process.stdout.write("World");

// user input package name = npm i prompt-async

let prompt = require('prompt-sync')();
let a = prompt("Enter a number: ");
process.stdout.write(a);
