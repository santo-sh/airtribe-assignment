const { Router } = require('express');
const router = Router();
const course = require('./course.routes');
const instructor = require('./instructor.routes');
const student = require('./student.routes');

module.exports = function (app) {
  app.use('/api/', router);
  router.use(course);
  router.use(instructor);
  router.use(student);
}

