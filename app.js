// const { calculateSum } = require("./calculate/sum")
require("./xyz")
// const { calculateMultiply } = require("./calculate/mutliply")

const { calculateMultiply, calculateSum } = require("./calculate")

const data = require("./data.json")

console.log(data);


calculateSum(4, 5)

calculateMultiply(8, 6)

setTimeout(() => {
    console.log("hello world");

}, 1000)