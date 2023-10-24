const express = require('express')
var exphbs  = require('express-handlebars');

const path = require('path')

const app = express()
const port = 3000

// Using handlebars in first express app
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Link the routes file
app.use('/', require(path.join(__dirname, 'routes/blog.js')))

// Create server which will listen on some port
app.listen(port, () => {
    console.log("Blog app is listning at http://localhost:"+ port)
})