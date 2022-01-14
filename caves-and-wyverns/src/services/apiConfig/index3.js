import axios from "axios";

const BASE3 = process.env.REACT_APP_AIRTABLE_BASE3;
const KEY3 = process.env.REACT_APP_AIRTABLE_KEY3;

const baseURL = `https://api.airtable.com/v0/${BASE3}/Winners/`

const api3 = axios.create({
  baseURL,
  headers: {
    "Authorization": `Bearer ${KEY3}`,
  },
});

export default api3;