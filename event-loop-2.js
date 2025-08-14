const fs = require("fs")
const a = 100

setImmediate(() => console.log("setImmediate"))

Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt", "utf8", () => {
    console.log("file reading CB");
})

setTimeout(() => {
    console.log("Timer expired");
}, 0);

process.nextTick(() => console.log("process.nextTick"))

function printA() {
    console.log("a =", a);
}

printA()
console.log("Last line of the file");


// a = 100
// last line of the file
// process
// promise
// timer expired
// set immediate
// file reading CB