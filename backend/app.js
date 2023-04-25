const express = require('express');
const mongoose  = require('mongoose');
const router   = require('./routes/book-routes');
const cors = require('cors');

const app  = express();

app.use(express.json());
app.use(cors())
// middleware

app.use('/books',router);

mongoose.connect("mongodb+srv://admin:9ytX80mRyvbtyDli@cluster0.iynnncp.mongodb.net/book-store?retryWrites=true&w=majority").then(()=>console.log("connected to the database")).then(()=>app.listen(5000)).catch((err)=>console.log(err));








// password  =  9ytX80mRyvbtyDli