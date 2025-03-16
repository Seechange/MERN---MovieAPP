import express from "express";
import {
  getSearchHistory,
  removeItemFromSearchHistory,
  searchActor,
  searchMovie,
  searchTVShow,
} from "../controllers/search.controller.js";

const router = express.Router();
router.get("/person/:query", searchActor);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTVShow);
router.get("/history", getSearchHistory);
router.delete("/history/:id", removeItemFromSearchHistory);
export default router;
