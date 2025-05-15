const express = require('express');

const Model = require('../models/userModel');

const router = express.Router();


router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
        });
});

router.get('/getall', (req, res) => {
    res.send('Add Route from userRouter');
});


module.exports = router;