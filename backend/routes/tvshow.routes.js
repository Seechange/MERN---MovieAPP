import express from "express";
import {
  getDetailsTVShow,
  getSimilarsTVShow,
  getTrailerTVShow,
  getTrendingTVShow,
  getTVShowByCategory,
} from "../controllers/tvshow.controller.js";

const router = express.Router();
router.get("/trending", getTrendingTVShow);
router.get("/:id/trailer", getTrailerTVShow);
router.get("/:id/details", getDetailsTVShow);
router.get("/:id/similar", getSimilarsTVShow);
router.get("/:category", getTVShowByCategory);
export default router;
