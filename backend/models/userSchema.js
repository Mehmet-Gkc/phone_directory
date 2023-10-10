import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    min: [6, 'The password must be at least 6 characters long.'],
    max: [15, 'The password must not be longer than 15 characters.'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

const User = mongoose.model("User", userSchema)

export default User;
