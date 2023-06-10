const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  mobile: { type: String, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  username: { type: String, required: true, trim: true },
  dob: { type: Date, required: true },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = { UserModel };
