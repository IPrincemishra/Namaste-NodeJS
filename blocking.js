const crypto = require("node:crypto")

console.log("hello world");

var a = 109089;
var b = 20986;

// ! pbkdf2 - password based key derivation fnc

//* Sync function - Will Block the main Thread - DON'T USE IT
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512")
console.log("Sync key is generated");

// * Async
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("key is generated");

})

function mutliplyFn(x, y) {
    const result = x * y
    return result
}

var c = mutliplyFn(a, b)

console.log("Multiplication result is : ", c);

