const allCourses = async (req, res) => {
  try {
    return res.status(200).send({ err: false, data });
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

    return res.status(200).send({ err: false, data });
  } catch (error) {
    return res.status(400).send({
      err: true,
      message: error.message || "Something went wrong",
    });
  }
};

const createCourse = async (req, res) => {
  try {
    const { courseName, startDate, duration, instructorName, maxSeats } = req.body;

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

    if (!duration) {
      throw {
        message: "Course duration is required",
      };
    }

    if (!instructorName) {
      throw {
        message: "Course instructor name is required",
      };
    }

    if (!maxSeats) {
      throw {
        message: "Course max seats is required",
      }
    }

    console.log(req.body);

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

    const { courseName, startDate, duration, instructorName, maxSeats } = req.body;

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

    if (!duration) {
      throw {
        message: "Course duration is required",
      };
    }

    if (!instructorName) {
      throw {
        message: "Course instructor name is required",
      };
    }

    if (!maxSeats) {
      throw {
        message: "Course max seats is required",
      }
    }

    console.log(req.body);

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

    const { name, email, mobile, linkedin } = req.body;

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


module.exports = {
  allCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  registerCourse,
};
