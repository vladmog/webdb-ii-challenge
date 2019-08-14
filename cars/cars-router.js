const express = require('express');
const router = express.Router();


const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);


router.get('/', (req, res) => {
    db('cars')
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({message: "Doh" })
        })
})

router.post('/', (req, res) => {
    db('cars').insert(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch(() => {
            res.status(500).json({message:"doh"})
        })
})

// export for use in codebase
module.exports = router;

