import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Key": "701a2646c3mshb9cacd4ff49a630p17a682jsnbc6a83a5f92a",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

//api integration

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    if (error.response) {
      // The request was made, but the server responded with an error status code (e.g., 403 or 429).
      console.error("Request failed with status code", error.response.status);
    } else if (error.request) {
      // The request was made, but no response was received.
      console.error("No response received from the server");
    } else {
      // Something else went wrong.
      console.error("Error:", error.message);
    }
  }
};
