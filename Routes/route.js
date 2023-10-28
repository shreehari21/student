const express=require("express");
const router = express.Router();

const CourseControllers = require("../Controllers/CourseControllers");

router.post("/register1",CourseControllers.createStudent);
module.exports=router;
