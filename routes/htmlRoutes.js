const router = require("express").Router();
const { notes } = require("../db/db.json");
const { createNewNote, deleteNote } = require("../lib/notes");

router.get("/notes", (req, res) => {
    if (notes) {
        res.send(notes);
    } else {
        res.json("goodbye");
    }
}); 

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();

    // if (!validateZookeeper(req.body)) {
    //     res.status(400).send("The zookeeper is not properly formatted.");
    // } else {
        const note = createNewNote(req.body, notes);

        res.json(note);
    // }
});

router.delete("/notes/:id", (req, res) => {
    res.send(deleteNote(req.params.id, notes));
});


module.exports = router;