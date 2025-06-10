import axios from 'axios'

const api = axios.create({
    baseURL: 'http://54.177.136.55:80/api'
});


export default api;