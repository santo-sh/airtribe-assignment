const db = require('../db');
const random = require('random');

const allCourses = async (req, res) => {
  try {

    const query = `SELECT * FROM courses`;

    const data = await db.query(query);
    console.log(data.rows);

    if (data.rows.length === 0) {
      return res.status(200).send({ err: false, message: 'Nothing to show' });
    }

    return res.status(200).send({ err: false, data: data.rows});
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const getCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    console.log(courseId);

    const query = `SELECT * FROM courses WHERE courseId = ${courseId}`;

    const data = await db.query(query);
    console.log(data.rows);

    if (data.rows.length === 0) {
      return res.status(200).send({ err: false, message: 'Course not found' });
    }

    return res.status(200).send({ err: false, data: data.rows});
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const createCourse = async (req, res) => {
  try {
    const { courseName, instructorId, startDate, maxSeats } = req.body;

    if (!courseName) {
      throw {
        message: "Course name is required",
      };
    }

    if (!startDate) {
      throw {
        message: "Course start date is required",
      };
    }

    if (!instructorId) {
      throw {
        message: "Course instructor Id is required",
      };
    }

    if (!maxSeats) {
      throw {
        message: "Course max seats is required",
      }
    }

    console.log(req.body);


    const courseId = random.int(1, 1000);

    const query = `INSERT INTO courses(courseId, courseName, instructorId, startDate, maxSeats ) VALUES(${courseId}, '${courseName}', ${instructorId}, '${startDate}', ${maxSeats});`;

    const data = await db.query(query);
    console.log(data.rows);


    return res
      .status(200)
      .send({ err: false, message: "Course created successfully" });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    console.log(courseId);

    let query = `select count(*) from courses where courseId = ${courseId};`;

    let data = await db.query(query);
    console.log(data.rows);

    if(data.rows[0].count === '0'){
      throw {
        message: "Course not found"
      }
    }

    const { courseName, startDate, instructorId, maxSeats } = req.body;

    if (!courseName) {
      throw {
        message: "Course name is required",
      };
    }

    if (!startDate) {
      throw {
        message: "Course start date is required",
      };
    }

    if (!instructorId) {
      throw {
        message: "Course instructor id is required",
      };
    }

    if (!maxSeats) {
      throw {
        message: "Course max seats is required",
      }
    }

    
    query = `UPDATE courses 
            SET courseName = '${courseName}', startDate = '${startDate}', instructorId = ${instructorId}, maxSeats = ${maxSeats} WHERE courseId = '${courseId}';`;

    data = await db.query(query);
    console.log(data.rows);

    return res
      .status(200)
      .send({ err: false, message: "Course updated successfully" });
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    console.log(courseId);

    let query = `select count(*) from courses where courseId = ${courseId};`;

    let data = await db.query(query);
    console.log(data.rows);

    if(data.rows[0].count === '0'){
      throw {
        message: "Course not found"
      }
    }

    query = `delete from courses where courseId = ${courseId};`; 
    data = await db.query(query);
    console.log(data.rows);

    return res
      .status(200)
      .send({ err: false, message: "Course deleted successfully" });
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
};


const registerCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    console.log(courseId);

    const { id, name, email, mobile, linkedin } = req.body;

    let query = `select count(*) from courses where courseId = ${courseId};`;

    let data = await db.query(query);
    console.log(data.rows);

    if(data.rows[0].count === '0'){
      throw {
        message: "Course not found"
      }
    }

    if(!id) {
      throw {
        message: "Student id is required"
      }
    }

    if (!name) {
      throw {
        message: "Student name is required",
      }
    }

    if (!email) {
      throw {
        message: "Student email is required",
      }
    }

    if (!mobile) {
      throw {
        message: "Student mobile numeber is required",
      }
    }

    if(!linkedin){
      throw {
        message: "Student linkedin is required",
      }
    }

    query = `select count(*) from students where id = ${id};`;

    data = await db.query(query);
    console.log(data.rows);

    if(data.rows[0].count === '0'){

      query = `INSERT INTO students(id, name, email, mobile, linkedin) VALUES(${id}, '${name}', '${email}', '${mobile}', '${linkedin}')`;
      data = await db.query(query);
      console.log(data.rows);

    }

    query = `INSERT INTO enrollments(sid, cid) VALUES(${id}, ${courseId});`;

    data = await db.query(query);
    console.log(data.rows);

    return res
      .status(200)
      .send({ err: false, message: "Course registered successfully" })
  } catch (error) {
    return res.status(400).send({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
};

const allRegistered = async( req, res) => {
  try {
    let query = `SELECT * FROM enrollments`;
    let data = await db.query(query);
    console.log(data.rows);

    if(data.rows.length === 0) {
      return res.status(200).send({ err: false, message: "Nothing to show"});
    }

    return res.status(200).send({ err: false, data: data.rows });

  }catch(error){
    return res.status(400).send({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
}

module.exports = {
  allCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  registerCourse,
  allRegistered
};
