import { fetchFromTMDB } from "../service/tmdb.service.js";
import User from "../models/user.model.js";
export const searchActor = async (req, res) => {
  try {
    const { query } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    );
    if (res.results.length === 0) {
      return res.status(400).send(null);
    }
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].profile_path,
          title: response.results[0].name,
          searchType: "person",
          createdAt: new Date(),
        },
      },
    });
    res.status(200).json({ message: "success", content: data.results });
  } catch (error) {
    console.log("Error from SearchActor", error.message);
    res.status(500).json({ message: "Error server" });
  }
};

export const searchMovie = async (req, res) => {
  try {
    const { query } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );
    if (res.results.length === 0) {
      return res.status(400).send(null);
    }
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].poster_path,
          title: response.results[0].title,
          searchType: "movie",
          createdAt: new Date(),
        },
      },
    });
    res.status(200).json({ message: "success", content: data.results });
  } catch (error) {
    console.log("Error from SearchMovie", error.message);
    res.status(500).json({ message: "Error server" });
  }
};

export const searchTVShow = async (req, res) => {
  try {
    const { query } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
    );
    if (res.results.length === 0) {
      return res.status(400).send(null);
    }
    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].poster_path,
          title: response.results[0].name,
          searchType: "tv",
          createdAt: new Date(),
        },
      },
    });
    res.status(200).json({ message: "success", content: data.results });
  } catch (error) {
    console.log("Error from SearchTvShow", error.message);
    res.status(500).json({ message: "Error server" });
  }
};

export const getSearchHistory = async (req, res) => {
  try {
  } catch (error) {}
};
