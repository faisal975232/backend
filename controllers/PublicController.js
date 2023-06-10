const { validationResult } = require("express-validator");
const user = require("../models/user");

const valitionErrors = (req, res) => {
  //validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
  //end validation errors
};

const addUser = async (req, res) => {
  valitionErrors(req, res);

  try {
    const insertUser = await user.UserModel.create({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.phone,
      dob: req.body.dob,
    });

    res
      .status(200)
      .json({ success: true, message: "User has been created successfully" });
  } catch (err) {
    console.log(err);
    res.status(200).json({ success: false,message: "error occured" });
  }
};

const findUser = async (req, res) => {
  //   valitionErrors(req, res);

  try {
    const findUser = await user.UserModel.findOne({
      username: req.body.username,
    });

    res.status(200).json({ success: true, data: findUser });
  } catch (err) {
    console.log(err);
    res.status(200).json({success: false, message: "error occured" });
  }
};

const updateUser = async (req, res) => {
    valitionErrors(req, res);

  try {
    const updateUser = await user.UserModel.findOneAndUpdate(
      { username: req.body.username },
      {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.phone,
        dob: req.body.dob,
      },
      { new: true }
    );

    res.status(200).json({ success: true, message: 'User Updated Successfully' });
  } catch (err) {
    console.log(err);
    res.status(200).json({success: false, message: "error occured" });
  }
};

module.exports = {
  addUser,
  findUser,
  updateUser,
};
