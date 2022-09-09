const {Schema , model } = require('../connection');

 const myschema = new Schema({

    username : String,
    email : String,
    password : String,
    age : Number 

});


// Here we are creating a model  
module.exports = model('users',myschema);