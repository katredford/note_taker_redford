const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const fs = require('fs')
app.use(express.static('public'));

// require('./routes')(app)

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})

app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/public/notes.html')
})

app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', function(err, result) {
        console.log('resultttt', result)
        res.json(JSON.parse(result))
    })
})

// adding a note when we submit the form!!
// req.body will the the stuff form the form!!!!
// fs.read in json file
// add id to req.body
// (id = results.lenght + 1)
// push req.body into array we got from reading in json file
// fs.writeFile the new array to the json file

// deleteing a note when we hit hte trash can

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})