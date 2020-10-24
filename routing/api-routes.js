const noteData = require ('../db/db.json');
console.log(noteData);
module.exports = function (app) {

    app.get('/api/notes', function(req, res) {
        res.json(noteData)
    });
    app.post('/api/notes', function(req, res) {
        noteData.push(req.body);

        console.log(noteData);
    });
    app.delete('api/notes', function() {
        noteData = [];
    })



};
