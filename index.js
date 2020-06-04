const server = require("./server");

const PORT = 9000;

server.listening(PORT, () => {
    console.log(`!!Server running on port ${PORT}!!`)
})