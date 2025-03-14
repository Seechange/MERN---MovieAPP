import jwt from "jsonwebtoken";
import { config } from "dotenv";
import User from "../models/user.model.js";

config();
export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies["jwt"];
    if (!token) {
      return res
        .status(400)
        .json({ message: "Unauthorized - No token provided" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(400).json({ message: "Invalid token" });
    }
    const user = await User.findById(decode.userId).select("-password");
    if (!user) {
      return res.status(200).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error from protectRoute", error.message);
    res.status(500).json({ message: "Error Server" });
  }
};
