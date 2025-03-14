import { fetchFromTMDB } from "../service/tmdb.service.js";
export const getTrendingMovie = async (req, res) => {
  try {
    const movie = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    const randomTrending =
      movie.results[Math.floor(Math.random() * movie.results?.length)];
    res.status(200).json({ message: "success", content: randomTrending });
  } catch (error) {
    console.log("Error from getTrending", error.message);
    res.status(500).json({ message: "Error Server" });
  }
};

export const getTrailerMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    );
    res.status(200).json({ message: "success", trailer: data.results });
  } catch (error) {
    console.log("Error from getTrailer", error.message);
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({ message: "Error Server" });
  }
};

export const getDetailsMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );
    res.status(200).json({ message: "success", content: data });
  } catch (error) {
    console.log("Error from getDetailsMovie", error.message);
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({ message: "Error Server" });
  }
};

export const getSimilarsMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
    );
    res.status(200).json({ message: "success", similar: data.results });
  } catch (error) {
    console.log("Error from getSimilarsMovie", error.message);
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({ message: "Error Server" });
  }
};

export const getMovieByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
    );
    res.status(200).json({ message: "success", listMovie: data.results });
  } catch (error) {
    console.log("Error from getMovieByCategory", error.message);
    res.status(500).json({ message: "Error Server" });
  }
};
