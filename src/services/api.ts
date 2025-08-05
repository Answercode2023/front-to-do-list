import axios from "axios";

const api = axios.create({
  baseURL: "https://answer-site.onrender.com/api", 
});

export default api;
