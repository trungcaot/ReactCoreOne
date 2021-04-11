import axios from "axios"

const baseURL = ''

let headers = {};

if(localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosIntance = axios.create({
  baseURL: baseURL,
  headers,
})

export default axiosIntance;