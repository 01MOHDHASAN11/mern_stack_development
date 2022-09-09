const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

// router.get('/add',(req,res) => {
//     res.send('response from user Router')
// } )

router.post("/add",(req,res) =>{
    
    console.log(req.body);
    // res.send("response from user router")


    // Add Operation
    new Model(req.body).save()  //pormise
    .then((result) => {
        
        console.log(result);
        res.json(result);
        
        
    }).catch((err) => {

        console.log(err);
        res.json(err);
        
    });
});

router.get('/getall',(req,res) =>{
    Model.find()
    .then((result) => {
        console.log(result);
        res.json(result);

    }).catch((err) => {
        console.log(err);
        res.json(err);

    });
});


// colon denotes url parameter
router.get('/getbyusername/:username', (req,res) => {

    console.log(req.params.username);
    // res.send('nice')
    Model.find({username : req.params.username})
    .then((result) => {
        console.log(result);
        res.json(result);

    }).catch((err) => {
        console.log(err);
        res.json(err);

    });



})

router.put("/update/:id",(req,res)=>{
    Model.findByIdAndUpdate(req.params.id,req.body)
    .then((result) => {
        console.log(result);
        res.json(result);

    }).catch((err) => {
        console.log(err);
        res.json(err);

    });

})


router.delete('/delete/:id', (req, res) => {

    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        console.log(result);
        res.json(result);

    }).catch((err) => {
        console.log(err);
        res.json(err);

    });


})


// Exporting 
module.exports = router;