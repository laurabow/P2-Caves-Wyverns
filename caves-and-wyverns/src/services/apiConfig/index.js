import axios from "axios";

const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;

// console.log(BASE);
// console.log(KEY);

const baseURL = `https://api.airtable.com/v0/${BASE}/Characters`
// const baseURL = `https://api.airtable.com/v0/${BASE}/Characters?maxRecords=3&view=Grid%20view`

const api = axios.create({
  baseURL,
  headers: {
    "Authorization": `Bearer ${KEY}`,
  },
});

export default api;