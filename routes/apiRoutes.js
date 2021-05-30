const router = require('express').Router();
const fs = require('fs')
const path = require('path')
let notes = require('../db/db')


router.get('/notes', (req, res) => {
    res.json(notes)
})

module.exports = router;