module.exports = function(app) {

    app.get('/home', (req, res) => {
        res.sendFile('/Users/katier./Desktop/Bootcamp/noteTaker.redford/Develop/public/index.html')
    })

    app.get('/notes', (req, res) => {
        res.sendFile('/Users/katier./Desktop/Bootcamp/noteTaker.redford/Develop/public/notes.html')
    })

}