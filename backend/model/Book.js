const mongoose  = require('mongoose');

const Schema  = mongoose.Schema;

const bookSchema =  new Schema({
    name:{
        type:String,
        required: true,
    },
    aurthor:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    available:{
        type: Boolean,
    },
    image:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("Book",bookSchema);