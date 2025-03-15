import express from "express";
import {
  checkAuth,
  login,
  logout,
  signUp,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();
router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);
router.get("/checkAuth", protectRoute, checkAuth);
export default router;
