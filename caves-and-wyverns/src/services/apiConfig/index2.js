import axios from "axios";

const BASE2 = process.env.REACT_APP_AIRTABLE_BASE2;
const KEY2 = process.env.REACT_APP_AIRTABLE_KEY2;

const baseURL = `https://api.airtable.com/v0/${BASE2}/NPC`

const api2 = axios.create({
  baseURL,
  headers: {
    "Authorization": `Bearer ${KEY2}`,
  },
});

export default api2;