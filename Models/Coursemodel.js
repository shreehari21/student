const mongoose = require('mongoose');
let courseSchema = new mongoose.Schema({
  Course_name: {
    type:String,
    required:true,
  },
  Course_code:{
    type:String,
    required:true,
    unique:true,
  },

},{timestamps:true});
module.exports = new mongoose.model("Course",courseSchema)