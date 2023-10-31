const StudentModel = require('../Models/StudentModel');
const Validitor = require("./Validation")
let createStudent = async (req,res) =>{
  try {
      let data  = req.body;
      if(!Validitor.isValidbody(data)){
        return res.status(404).send({msg:"no data provided"});
      }

      let {Student_name,Email,Usn,Gender,Mobile,Password} = data;

      //student
      if(!Validitor.isValid(Student_name)){
      return res.status(400).send({msg:"student name is required"});
      }

      if(Validitor.isValidStudent.test(Student_name)){
        return res.status(400).send({msg:"please enter a valid name"});
      }

      //email
      if(!Validitor.isValid(Email)){
      return res.status(400).send({msg:"email is required"});
      }
      let sameEmail=await StudentModel.findOne({Email})
      if(sameEmail){
      return res.status(400).send({msg:"email already exist"});
       }
       if(Validitor.isValidEmail.test(Email)){
        return res.status(400).send({msg:"please enter a valid email"});
      }
      //usn
      if(!Validitor.isValid(Usn)){
     return res.status(400).send({msg:"usn is required"});
      }
      let sameUsn=await StudentModel.findOne({Usn})
 if(sameUsn){
  return res.status(400).send({msg:"usn already exist"});
 }
 if(Validitor.isValidUsn.test(Usn)){
  return res.status(400).send({msg:"please enter a valid number"});
}
//gender
 if(!Validitor.isValid(Gender)){
  return res.status(400).send({msg:"gender is required"});
 }
 //mobile
 if(!Validitor.isValid(Mobile)){
  return res.status(400).send({msg:"mobile number is required"});
 }
 let sameMobile=await StudentModel.findOne({Mobile})
 if(sameMobile){
  return res.status(400).send({msg:"phone already exist"});
 }
 if(Validitor.isValidMobile.test(mobile)){
  return res.status(400).send({msg:"please enter a valid name"});
}
 //password 
 if(!Validitor.isValid(Password)){
  return res.status(400).send({msg:"password is required"});
 }
      let register=await StudentModel.create(data);
      return res.status(201).send({
        status:true,
        msg:"student registered successfully ",
        data:register,
      });
  } catch (error) {
   return res
   .status(500)
   .send({status:false,msg:"internal server error"});
  }
};
module.exports ={createStudent}