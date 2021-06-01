const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const fs = require('fs')

const bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
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

app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', function(err, result){
        var oldNotes = JSON.parse(result)
        req.body.id = oldNotes.length + 1
        oldNotes.push(req.body)
        console.log(oldNotes)
        console.log('note to add', req.body)

        fs.writeFile('./db/db.json', JSON.stringify(oldNotes),'utf8', function(err, result){
            res.json(oldNotes)
        })
    })
})

app.delete('/api/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', function(err, result){
        var oldNotes = JSON.parse(result)
        console.log('id of dude to delte!', req.params.id)

        var newNotes = []
        for (let i = 0; i < oldNotes.length; i++) {
            if (oldNotes[i].id != req.params.id) {
                newNotes.push(oldNotes[i])
            }
        }
        fs.writeFile('./db/db.json', JSON.stringify(newNotes),'utf8', function(err, result){
            res.json(newNotes)
        })
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