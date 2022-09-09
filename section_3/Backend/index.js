// importing express module
const express = require('express');        //req//
const userRouter = require('./routers/userRouter')
const video = require('./routers/video')
const cors = require('cors');
// const productRouter=require("./routers/productRouter");

// initializing express app

const app = express();

const port = 5000;


// for converting json data into javascript
app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}))
 
// middleware
app.use('/user',userRouter);
app.use('/video',video);

// product router

// app.use('/product',productRouter);


// route or endpoint
app.get('/',(req,res) => {

    res.send('response from express');

})

app.get('/home',(req,res) => {
    
    res.send('response from home');

})


// starting  the  server

app.listen( port, () => {
    
    console.log('express server started...');
    
});

