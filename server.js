// const path = require('path');
// const http = require('http');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const orm = require('./app/models/orm')
// const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }))
app.use(express.json())




app.get('/job-list', async (req, res) => {
    let data = await orm.getData();
    res.send(data)
});

app.post('/submit-job', (req, res) => {
    let data = req.body
    let result = orm.postData(data)
    res.send({ message: 'Submitted successfully' })

})

app.get('/get-info/:id', async (req, res) => {
    let jobId = req.params.id
    let result = await orm.getCertainData(jobId)
    res.send(result)
})

app.put('/edit-job/:id', (req, res) => {
    let data = req.body
    let jobId = req.params.id
    let result = orm.updateData(data, jobId)
    res.send({ message: 'Updated Successfully' })
})

app.put('/edit-status/:id', (req, res) => {
    let jobStatus = req.body
    let jobId = req.params.id
    let result = orm.updateStatus(jobStatus.chosenValue, jobId)
    res.send({ message: 'Updated Successfully' })
})

app.delete('/delete-job/:id', (req, res) => {
    let jobId = req.params.id
    let result = orm.deleteData(jobId)
    res.send({ message: 'deleted successfully' })

})

app.use(express.static('public'));

// Listener ==================================================
app.listen(PORT, function () {
    console.log(`Serving notes on PORT ${PORT}`)
});