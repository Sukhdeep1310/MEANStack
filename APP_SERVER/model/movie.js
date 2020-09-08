const mongoose = require( 'mongoose' );


const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"required"],
        min: 3
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    starcast:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('Movie', movieSchema);