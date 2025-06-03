import axios from 'axios'

const api = axios.create({
    baseURL: 'http://54.153.113.20:80/api'
});


export default api;