const fs = require("fs")

setImmediate(() => console.log("setImmediate"))

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt", "utf8", () => {
    console.log("file reading CB");
})

process.nextTick(() => {
    process.nextTick(() => console.log("inner nextTick"))
    console.log("outer nextTrick");
})

console.log("Last line of the file");


// last line of the file
// outer nextTick
// inner nextTick
// Promise
// Timer Expired
// set Immediate
// file reading CB
