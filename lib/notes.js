const fs = require("fs");
const path = require("path");

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
}

function deleteNote(id, notes) {
    const selectedNote = notes.filter((note) => note.id === id)[0];
    const noteIndex = notes.indexOf(selectedNote);
    const result = notes.splice(noteIndex, 1);
    fs.writeFile("./db/db.json", JSON.stringify({ notes }), function(err){
        if(err) throw err;
    });
    return notes;
}

module.exports = {
    createNewNote,
    deleteNote
};