const path = require('path');
const http = require('http');
const express = require('express');

const PORT = process.env.PORT || 8080;

const orm = require( './app/models/orm')
const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// // Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + 'index.html');
// });
app.use(express.static('public'));


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
