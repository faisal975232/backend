const express = require("express");
const router = express.Router();
const PublicController = require("../controllers/PublicController");

const validations = require("../validation/validation");


router.post("/add_user", validations.Uservalidation,PublicController.addUser);

router.post("/find_user", PublicController.findUser);

router.post("/update_user", validations.Uservalidation,PublicController.updateUser);



module.exports = router;
