import axios from "axios";
import { config } from "dotenv";
config();

export const fetchFromTMDB = async (url) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.TMDB_API_KEY,
    },
  };
  const res = await axios.get(url, options);
  if (res.status !== 200) {
    throw new Error("Error from get data TMDB");
  }
  return res.data;
};
