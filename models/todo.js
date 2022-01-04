const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Model =mongoose.model;  


const todoSchema = new Schema({

    title:{
        type:String,
        required:true,
    },

    content:{
        type:String,
        required:false,
    },
    completed:{
        type:Boolean,
        Boolean:false,
    },

},{

timestamp:true  



});
module.exports=Model('Todo',todoSchema);