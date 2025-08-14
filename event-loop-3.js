const fs = require("fs")

setImmediate(() => console.log("setImmediate"))

setTimeout(() => {
    console.log("Timer Expired");
}, 0);

Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => {
        console.log("2nd Timer Expired");
    }, 0);

    process.nextTick(() => console.log("2nd Process"))

    setImmediate(() => console.log("2nd setImmediate"))

    console.log("file reading CB");
})

process.nextTick(() => console.log("Process"))

console.log("Last line of the file");

// last line of the file
// process
// Promise
// timer Expired
// set Immediate
// File reading
// 2nd process
// 2nd set immediate
// 2nd Timer expired