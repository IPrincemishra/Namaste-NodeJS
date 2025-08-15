const http = require("node:http")

const server = http.createServer(function (req, res) {
    // Reply
    if (req.url === "/getSceretData") {
        res.end("Sorry you are too late!")
    }

    res.end("Hello World")
})

server.listen(7777)


