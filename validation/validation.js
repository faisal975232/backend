const { body } = require("express-validator");

const Uservalidation = [
  body("username").not().isEmpty().withMessage("Username is Required"),
  body("phone").not().isEmpty().withMessage("Mobile is Required"),
  body("email").isEmail().withMessage("Email is not valid"),
  body("email").not().isEmpty().withMessage("Email is Required"),
  body("name").not().isEmpty().withMessage("Name is Required"),
  body("dob").not().isEmpty().withMessage("Dob is Required"),
];


module.exports = {
  Uservalidation
};
