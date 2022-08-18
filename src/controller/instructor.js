const random = require("random");
const db = require('../db');

const allInstructors = async (req, res) => {
  try {
    
    const query = `SELECT * FROM instructors`;

    const data = await db.query(query);
    console.log(data.rows);

    if (data.rows.length === 0) {
      return res.status(200).send({ err: false, message: 'Nothing to show' });
    }

    return res.status(200).send({ err: false, data: data.rows });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const getInstructor = async (req, res) => {
  try {
    const InstructorId = req.params.id;
    console.log(InstructorId);

    const query = `SELECT * FROM instructors where id = '${InstructorId}'`;

    const data = await db.query(query);
    console.log(data.rows);

    if (data.rows.length === 0) {
      return res.status(200).send({ err: false, message: 'Instructor not found' });
    }

    return res.status(200).send({ err: false, data: data.rows });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const addInstructor = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      throw {
        message: "Instructor name is required",
      };
    }

    console.log(req.body);

    const id = random.int(1, 1000);

    const query = `INSERT INTO instructors(id, name) VALUES(${id}, '${name}');`;

    console.log(query);

    const data = await db.query(query);
    console.log(data.rows);


    return res
      .status(200)
      .send({ err: false, message: "Instructor saved successfully" });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const updateInstructor = async (req, res) => {
  try {
    const InstructorId = req.params.id;
    console.log(InstructorId);

    const { name } = req.body;

    if (!name) {
      throw {
        message: "Instructor name is required",
      }
    }

    let query = `SELECT count(*) FROM instructors WHERE id = ${InstructorId}`;

    let data = await db.query(query);
    console.log(data.rows[0].count);

    if (data.rows[0].count === '0') {
      throw { message: "Instructor not found" };
    }

    query = `UPDATE instructors SET name = '${name}' WHERE id = ${InstructorId};`;

    data = await db.query(query);
    console.log(data.rows);

    return res
      .status(200)
      .send({ err: false, message: "Instructor updated successfully" });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const deleteInstructor = async (req, res) => {
  try {
    const InstructorId = req.params.id;
    console.log(InstructorId);

    let query = `SELECT count(*) FROM instructors WHERE id = ${InstructorId}`;

    let data = await db.query(query);
    console.log(data.rows[0].count);

    if (data.rows[0].count === '0') {
      return res.status(200).send({ err: false, message: "Instructor not found" });
    }

    query = `DELETE FROM instructors WHERE id = ${InstructorId}`;

    data = await db.query(query);
    console.log(data.rows);

    return res
      .status(200)
      .send({ err: false, message: "Instructor deleted successfully" });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};


module.exports = {
  addInstructor,
  allInstructors,
  getInstructor,
  updateInstructor,
  deleteInstructor,
};
