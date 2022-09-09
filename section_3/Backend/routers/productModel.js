const {Schema,model}=require("../connection");

const myschema=new Schema({

    title:String,
    size:Number,
    color:String,
    price:Number

});

module.exports=model("products",myschema)