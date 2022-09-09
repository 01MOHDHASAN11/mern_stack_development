const express= require('express');
const router=express.Router();
const Model=require("../models/productModel")


router.post("/add",(req, res)=>{
    console.log(req.body);
    // res.send("response from router ")
    new Model (req.body).save() //promise 
    .then((result) => {
        console.log(result);
        res.json(result)

        
    }).catch((err) => {
        console.log(err);
        res.json(err);
        
    });
});

router.get("/getall",(req,res)=>{
    Model.find()
    .then((result) => {
        console.log(result);
        res.json(result);
        
    }).catch((err) => {
        console.log(err);
        res.json(err);
        
    });
})

//":" colon denotes url parameter
router.get("/getbytitle/:title",(req,res)=>{
    console.log(req.params.title);
    Model.find({title:req.params.title})
    .then((result) => {
        console.log(result);
        res.json(result)

        
    }).catch((err) => {
        console.log(err);
        res.json(err);
        
    });
    
})

router.delete("/delete/:id",(req,res)=>{
    Model.findByIdAndDelete(req.params.id)

    .then((result) => {
        console.log(result);
        res.json(result)

        
    }).catch((err) => {
        console.log(err);
        res.json(err);
        
    });
    
})

//exporting
module.exports=router;