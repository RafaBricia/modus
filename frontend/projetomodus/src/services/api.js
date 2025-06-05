import axios from 'axios'

const api = axios.create({
    baseURL: 'http://18.144.85.72:80/api'
});


export default api;