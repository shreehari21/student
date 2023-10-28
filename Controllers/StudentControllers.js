const StudentModel = require('../Models/StudentModel');
let createStudent = async (req,res) =>{
  try {
      let data  = req.body;
      let register=await StudentModel.create(data);
      return res.status(201).send({
        status:true,
        msg:"student registered successfully ",
        data:register,
      });
  }catch (error) {
   return res
   .status(500)
   .send({status:false,msg:"internal server error"});
  }
};
module.exports ={createStudent}