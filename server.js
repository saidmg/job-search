// const path = require('path');
// const http = require('http');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const orm = require( './app/models/orm')
// const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }))
app.use(express.json())




app.get('/job-list', async (req, res) => {
    let data= await orm.getData();
    console.log(data)
    res.send(data)
    // res.sendFile(__dirname + 'index.html');
});

app.post('/submit-job', (req, res)=>{
    console.log(req)
    let data = req.body
    let result = orm.postData(data)
    console.log(result)
    res.send({ message:'success' })

})
app.use(express.static('public'));

// Listener ==================================================
app.listen(PORT, function () {
    console.log(`Serving notes on PORT ${PORT}`)
});