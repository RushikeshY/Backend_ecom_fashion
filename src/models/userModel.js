
import mongoose from 'mongoose'
import validator from 'validator';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your full name"],
    maxLength: [30, "Nmae cannot exceed 30 characters"],
    minLength: [3, "Name should have more tahn 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    trim: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
});
