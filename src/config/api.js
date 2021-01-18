import axios from "axios";

require('dotenv').config();

const production = process.env.NODE_ENV === 'production'
 

// Create an axios instance
export default axios.create({
  baseURL: (production ? "https://fridge-mate.herokuapp.com/" : "http://localhost:3009"), 
  timeout: 10000,
  withCredentials: true,
  // headers: {
  //  "Access-Control-Allow-Origin": "*",
  // },
});
