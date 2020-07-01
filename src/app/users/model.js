const mongoose = require("mongoose");
const md5 = require("md5");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: { type: Date, default: Date.now },
});

userSchema.methods.setPass = function (password) {
  this.password = md5(password);
};

userSchema.methods.checkPass = function (password) {
  return this.password === md5(password);
};

module.exports = mongoose.model("User", userSchema);
