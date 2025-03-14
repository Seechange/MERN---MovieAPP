import express from "express";
import {
  getDetailsMovie,
  getMovieByCategory,
  getSimilarsMovie,
  getTrailerMovie,
  getTrendingMovie,
} from "../controllers/movie.controller.js";

const router = express.Router();
router.get("/trending", getTrendingMovie);
router.get("/:id/trailer", getTrailerMovie);
router.get("/:id/details", getDetailsMovie);
router.get("/:id/similar", getSimilarsMovie);
router.get("/:category", getMovieByCategory);
export default router;
