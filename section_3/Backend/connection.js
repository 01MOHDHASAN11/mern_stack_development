const mongoose = require('mongoose');
const db = 'mernwss1000';
const dbUrl = `mongodb+srv://mohdhasan:7309951630@cluster0.lsd1uyo.mongodb.net/${db}?retryWrites=true&w=majority`




// Asynchronous Function - returns Promise
mongoose.connect(dbUrl)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});


module.exports = mongoose;