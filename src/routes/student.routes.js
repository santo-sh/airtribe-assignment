const { Router } = require("express");
const {
  addStudent,
  allStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  addCommentOnStudent,
  updateStudentStatus,
} = require("../controller/student");

const student = Router();

student.get("/students", allStudents);
student.post("/students", addStudent);
student.get("/students/:id", getStudent);
student.put("/students/:id", updateStudent);
student.delete("/students/:id", deleteStudent);
student.post("/students/:id/addComment", addCommentOnStudent);
student.post("/students/:id/updateStatus", updateStudentStatus);


module.exports = student;
