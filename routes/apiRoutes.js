const express = require('express');
const db = require('../db/db.json')
const router = express.Router();
const fs = require('fs');
const path = require('path');
const util =require('util')
const uniqid = require('uniqid');
const { json } = require('body-parser');
const readFile = util.promisify(fs.readFile);




router.get('/notes', function(req, res)  {
    readFileAsync('/db/db.json', 'utf-8').then(function(data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    });
});

router.post ('/notes', function(req, res) {
    const note = req.body;
    readFileAsync("/db/db.json", "utf-8").then(function(data) {
        const notes = [].contact(JSON.parse(data));
        note.id =notes.length + 1
        notes.push(note);
        return notes
    }).then(function(notes) {
        writeFileAsync("/db/db.json", JSON.stringify(notes))
        res.json(note);
    })
}) 

router.delete('/notes/:id' , function(req,res) {
    const idToDelete = parseInt(req.params.id);
    readFileAsync("/db/db.json", "utf-8").then(function(data) {
        const notes = [].contact(JSON.parse(data));
        const newNotesData= []
        for (let i =0; i<notes.length; i++) {
            if(idToDelete !== notes[i].id) {
                newNotesData.push(notes[i])
            }
        }
        return newNotesData
    }).then(function(notes) {
        writeFileAsync("/db/db.json", JSON.stringify(notes))
        res.send("SAVED!")
    })
})

module.exports = router;