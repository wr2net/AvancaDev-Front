import axios from 'axios';

const host = process.env.API_HOST
const key = process.env.API_KEY

export const cryptoHttp = axios.create ({
  baseURL: host,
  headers: {
    authorization: `Apikey ${key}`
  }
})