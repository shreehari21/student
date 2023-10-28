const CourseModel = require("../Models/Coursemodel");
let createCourse = async (req,res) =>{
  try {
      let data=req.body;
      let register1=await CourseModel.create(data);
      return res.status(201).send({
        status:true,
        msg:"course registered successfully ",
        data:register1,
      });
  }catch (error) {
   return res
   .status(500)
   .send({status:false, msg:"internal server error"});
  }
};
module.exports ={createCourse}