// set up requirements 

const express = require('express');
const router = express.Router();
const path = require("path");

// main page display
router.get("/index", (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))

});

// notes page display
router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))

});

module.exports = router;