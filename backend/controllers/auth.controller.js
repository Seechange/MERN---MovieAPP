import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json("All fields are required");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid Email" });
    }
    const checkUserName = await User.findOne({ username });
    const checkUserEmail = await User.findOne({ email });
    if (checkUserEmail) {
      return res.status(400).json({ message: "Email has been registed" });
    }
    if (checkUserName) {
      return res.status(400).json({ message: "Username already exist" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be least 6 character" });
    }
    //hastpass
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];
    const newUser = new User({
      username,
      email,
      password: hashPass,
      image,
    });
    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(200).json({
        user: {
          ...newUser._doc,
          password: "",
        },
      });
    }
  } catch (error) {
    console.log("Error from signup", error.message);
    res.status(500).json({ message: "Error from server" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const checkUserEmail = await User.findOne({ email });
    if (!checkUserEmail) {
      return res.status(400).json({ message: "Email isn;t registed" });
    }
    const checkPass = await bcrypt.compare(password, checkUserEmail.password);
    if (!checkPass) {
      return res.status(400).json({ message: "Password dosen't match" });
    } else {
      generateToken(checkUserEmail._id, res);
      res.status(200).json({
        message: "Login successfull",
        user: {
          ...checkUserEmail._doc,
          password: "",
        },
      });
    }
  } catch (error) {
    console.log("Error from login", error.message);
    res.status(500).json({ message: "Error from server" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Logout successfull" });
  } catch (error) {
    console.log("Error from logout", error.message);
    res.status(500).json({ message: "Error from server" });
  }
};
