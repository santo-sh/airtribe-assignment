const random = require("random");

const allStudents = async (req, res) => {
  try {
    return res.status(200).send({ err: false, data });
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

    return res.status(200).send({ err: false, data });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const addStudent = async (req, res) => {
  try {
    const { name, mobile, email } = req.body;

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

    console.log(req.body);

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

    const { name, mobile, email } = req.body;

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

    console.log(req.body);

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
