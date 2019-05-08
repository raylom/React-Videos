import axios from "axios";

const KEY = "AIzaSyCvFoIDjhlk634hFQP1Aj_nCnBwMuhyX1U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
