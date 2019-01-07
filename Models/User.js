const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  githubID: String
});

mongoose.model("users", userSchema);
