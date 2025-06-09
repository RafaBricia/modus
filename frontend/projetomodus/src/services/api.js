import axios from 'axios'

const api = axios.create({
    baseURL: 'http://52.53.236.241:80/api'
});


export default api;