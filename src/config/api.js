import axios from "axios";

// Create an axios instance
export default axios.create({
  baseURL: "http://localhost:3009",
  timeout: 5000,
  headers: {
    "access-control-allow-origin": "*",
  },
});
