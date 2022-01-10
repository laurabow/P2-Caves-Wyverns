import axios from "axios";

const BASE2 = process.env.REACT_APP_AIRTABLE_BASE2;
const KEY2 = process.env.REACT_APP_AIRTABLE_KEY2;

const baseURL2 = `https://api.airtable.com/v0/${BASE2}/Characters`

const api2 = axios.create({
  baseURL2,
  headers: {
    "Authorization": `Bearer ${KEY2}`,
  },
});

export default api2;