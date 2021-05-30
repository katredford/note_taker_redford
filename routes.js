module.exports = function(app) {

    app.get('/', (req, res) => {
        res.sendFile('/index.html');
    });

    app.get('/notes', (req, res) => {
        res.sendFile(__dirname + 'public/notes.html');
    });

}