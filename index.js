const server = require("./server");

const PORT = 9000;

server.listen(PORT, () => {
    console.log(`!!Server running on port ${PORT}!!`)
})