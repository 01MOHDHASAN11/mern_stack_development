const express = require('express');
const router = express.Router();

router.get('/add',(req,res) => {
    res.send('response from user video')

} )

router.get('/upload',(req,res) => {
    res.send('response from user video upload')

} )


// Exporting 
module.exports = router;