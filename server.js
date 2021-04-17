// const path = require('path');
// const http = require('http');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

// const orm = require( './app/models/orm')
// const server = http.createServer(app);

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())


// // Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + 'index.html');
// });
app.use(express.static('public'));

// Listener ==================================================
app.listen(PORT, function () {
    console.log(`Serving notes on PORT ${PORT}`)
});