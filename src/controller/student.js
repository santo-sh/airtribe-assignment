const db = require('../db');
const random = require("random");

const allStudents = async (req, res) => {
  try {

    const query = `SELECT * FROM students`;

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

const getStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    console.log(studentId);

    const query = `SELECT * FROM students WHERE id = ${studentId}`;

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

const addStudent = async (req, res) => {
  try {
    const { name, mobile, email, linkedin } = req.body;

    if (!name) {
      throw {
        message: "Student name is required",
      };
    }

    if (!mobile) {
      throw {
        message: "Student mobile number is required",
      };
    }

    if (!email) {
      throw {
        message: "Student email is required",
      };
    }

    if(!linkedin){
      throw {
        message: "Student linkedin url is required",
      }
    }

    let id = random.int(1, 1000);

    let query = `INSERT INTO students(id, name, email, mobile, link) VALUES(${id}, '${name}', '${email}', '${mobile}', '${linkedin}');`;

    let data = await db.query(query);
    console.log(data.rows);

    return res
      .status(200)
      .send({ err: false, message: "Student saved successfully" });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    console.log(studentId);

    let query = `select count(*) from students where id = ${studentId};`;
    
    let data = await db.query(query);
    console.log(data.rows);

    if(data.rows[0].count === '0'){
      throw {
        message: "student not found"
      }
    }

    const { name, mobile, email, linkedin } = req.body;

    if (!name) {
      throw {
        message: "Student name is required",
      };
    }

    if (!mobile) {
      throw {
        message: "Student mobile number is required",
      };
    }

    if (!email) {
      throw {
        message: "Student email is required",
      };
    }

    if(!linkedin){
      throw {
        message: "Student linkedin url is required",
      }
    }

    query = `UPDATE students
            SET name = '${name}', mobile = '${mobile}', email = '${email}', linkedin = '${linkedin}' WHERE id = ${studentId};`;

    data = await db.query(query);
    console.log(data.rows);

    return res
      .status(200)
      .send({ err: false, message: "Student data update successfully" });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    console.log(studentId);

    let query = `select count(*) from students WHERE id = ${studentId};`;

    let data = await db.query(query);
    console.log(data.rows);

    if(data.rows[0].count === '0'){
      return res.status(200).send({ err: false, message: "Student not found" });
    }

    query = `delete from students where id = ${studentId};`; 
    data = await db.query(query);
    console.log(data.rows);

    return res
      .status(200)
      .send({ err: false, message: "Student data deleted successfully" });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const addCommentOnStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    console.log(studentId);
    
    const {
      courseId, 
      comment
    } = req.body;
    
    if(!courseId) {
      throw {
        message: "Course ID is required",
      }
    }

    if(!comment) {
      throw {
        message: "Comment is required",
      }
    }

    let query = `select count(*) from registrations WHERE sid = ${studentId} and cid = ${courseId};`;

    let data = await db.query(query);
    console.log(data.rows);

    if(data.rows[0].count === '0'){
      throw {
        message: "Student not found",
      }
    }


    query = `UPDATE registrations SET comment ='${comment}' WHERE sid = ${studentId} and cid = ${courseId};`;
    data = await db.query(query);
    console.log(data.rows);

    return res
      .status(200)
      .send({ err: false, message: "Commented successfully" });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const updateStudentStatus = async (req, res) => {
  try {
    const studentId = req.params.id;
    console.log(studentId);

    return res
      .status(200)
      .send({ err: false, message: "Student status updated successfully" });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

module.exports = {
  allStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
  addCommentOnStudent,
  updateStudentStatus,
};
