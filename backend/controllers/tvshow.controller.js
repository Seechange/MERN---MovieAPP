import { fetchFromTMDB } from "../service/tmdb.service.js";
export const getTrendingTVShow = async (req, res) => {
  try {
    const movie = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
    );
    const randomTrending =
      movie.results[Math.floor(Math.random() * movie.results?.length)];
    res.status(200).json({ message: "success", content: randomTrending });
  } catch (error) {
    console.log("Error from getTrendingTVShow", error.message);
    res.status(500).json({ message: "Error Server" });
  }
};

export const getTrailerTVShow = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
    );
    res.status(200).json({ message: "success", trailer: data.results });
  } catch (error) {
    console.log("Error from getTrailerTVShow", error.message);
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({ message: "Error Server" });
  }
};

export const getDetailsTVShow = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`
    );
    res.status(200).json({ message: "success", content: data });
  } catch (error) {
    console.log("Error from getDetailsTVShow", error.message);
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({ message: "Error Server" });
  }
};

export const getSimilarsTVShow = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`
    );
    res.status(200).json({ message: "success", similar: data.results });
  } catch (error) {
    console.log("Error from getSimilarsTVShow", error.message);
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({ message: "Error Server" });
  }
};

export const getTVShowByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`
    );
    res.status(200).json({ message: "success", listMovie: data.results });
  } catch (error) {
    console.log("Error from getTVShowByCategory", error.message);
    res.status(500).json({ message: "Error Server" });
  }
};
