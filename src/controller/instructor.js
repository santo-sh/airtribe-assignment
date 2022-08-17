const random = require("random");

const allInstructors = async (req, res) => {
  try {
    return res.status(200).send({ err: false, data });
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

    return res.status(200).send({ err: false, data });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const addInstructor = async (req, res) => {
  try {
    const { name, joiningDate } = req.body;

    if (!name) {
      throw {
        message: "Instructor name is required",
      };
    }

    if (!joiningDate) {
      throw {
        message: "Instructor joining date is required",
      };
    }

    console.log(req.body);

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


module.exports = {
  addInstructor,
  allInstructors,
  getInstructor,
  updateInstructor,
  deleteInstructor,
};
