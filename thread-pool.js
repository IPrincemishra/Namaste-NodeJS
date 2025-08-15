const fs = require("fs")
const crypto = require("crypto")

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("1 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
    console.log("2 - cryptoPBKDF2 done");
})

// fs.readFile("./file.txt", "utf8", () => {
//     console.log("File Reading CB");
// })
