const { Router } = require("express");
const {
  createCourse,
  updateCourse,
  allCourses,
  getCourse,
  deleteCourse,
  registerCourse,
} = require("../controller/course");

const course = Router();
course.get("/courses", allCourses);
course.post("/courses", createCourse);
course.get("/courses/:id", getCourse);
course.put("/courses/:id", updateCourse);
course.delete("/courses/:id", deleteCourse);
course.post('/courses/:id', registerCourse);

module.exports = course;
