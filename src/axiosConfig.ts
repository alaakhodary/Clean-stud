import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["lang"] = "ar";

export const setAccessToken = (token: string) => {
  axios.defaults.headers.common["Authorization"] = token;
};
