const express = require("express");
const router = express.Router();
const StudentController = require("../Controllers/StudentControllers");

router.post("/register",StudentController.createStudent);

module.exports = router;