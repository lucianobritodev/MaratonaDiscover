const express = require("express") // lib for build server
const routes = require("./routes")
const server = express()


// Using template engine
server.set('view engine', 'ejs')

// enable static archives
server.use(express.static("public"))

// routes
server.use(routes)

server.listen(3000, () => console.log('server running ...'))
