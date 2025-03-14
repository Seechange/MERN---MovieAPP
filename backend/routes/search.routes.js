import express from "express";
import {
  getSearchHistory,
  searchActor,
  searchMovie,
  searchTVShow,
} from "../controllers/search.controller.js";

const router = express.Router();
router.get("/actor/:query", searchActor);
router.get("/movie/:query", searchMovie);
router.get("/tvshow/:query", searchTVShow);
router.get("/history", getSearchHistory);
export default router;
