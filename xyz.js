

function x() {
    const a = 10

    function b() {
        console.log("b");

    }
}


fs.readFile("./data.json", "utf8", (data) => {
    console.log("File Data", data);

})