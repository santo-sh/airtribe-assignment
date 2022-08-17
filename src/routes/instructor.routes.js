const { Router } = require('express');
const {
  addInstructor,
  updateInstructor,
  deleteInstructor,
  getInstructor,
  allInstructors,
} = require('../controller/instructor');

const instructor = Router();

instructor.get('/instructor', allInstructors)
instructor.post('/instructor', addInstructor);
instructor.get('/instructor/:id', getInstructor);
instructor.put('/instructor/:id', updateInstructor);
instructor.delete('/instructor/:id', deleteInstructor);


module.exports = instructor;
