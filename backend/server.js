import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import movieRoutes from "./routes/movie.routes.js";
import tvshowRoutes from "./routes/tvshow.routes.js";
import searchRoutes from "./routes/search.routes.js";
import { protectRoute } from "./middleware/protectRoute.js";
import { connectDB } from "./libs/db.js";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/movie", protectRoute, movieRoutes);
app.use("/api/tvshow", protectRoute, tvshowRoutes);
app.use("/api/search", protectRoute, searchRoutes);

app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
  connectDB();
});
