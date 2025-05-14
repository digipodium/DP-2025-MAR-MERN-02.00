const express = require('express');

const router = express.Router();

router.get('/getall', (req, res) => {
    res.send('Add Route from userRouter');
});

router.post('/add', (req, res) => {
    res.send();
    console.log(req.body);
    
});



module.exports = router;