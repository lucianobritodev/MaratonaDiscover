const express = require("express") // lib for build server
const open = require("open")
const routes = require("./routes")
const server = express()
const port = '3000'
const url = 'http://localhost'
const browser = 
 

// Using template engine
server.set('view engine', 'ejs')

// enable static archives
server.use(express.static("public"))

// routes
server.use(routes)

server.listen(port, () => {
    console.log(`server running at port ${port}...`);
    open(`${url}:${port}`);
});
