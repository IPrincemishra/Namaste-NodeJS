const fs = require("fs")
const https = require("https")

console.log("hello world");

var a = 1078698;
var b = 20986;

// ! Sync function

fs.readFileSync("./file.txt", "utf8")
console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("fetched data successfully");
})

setTimeout(() => {
    console.log("setTimeout called after 5 seconds");
}, 5000)

// ! Async Function
fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File data : ", data);

})

function mutliplyFn(x, y) {
    const result = a * b
    return result;
}

var c = mutliplyFn(a.b);

console.log("Multiplication result is : ", c);