import mongoose from 'mongoose';

const todoSchma = new mongoose.Schema({
   title : {
    type : String,
    required : true,
    trim : true
   },
   description : {
    type : String,
    required : true,
   },
   priority : {
    type : ['Low', 'Medium', 'High'],
    required : true 
   },
   completed : {
    type : Boolean,
    default : false
   },
//    dueDate : {
//     type : Date,
//    },
},
{
    timestamps : true
})


const TODO = mongoose.model("TODO", todoSchma);

export default TODO;