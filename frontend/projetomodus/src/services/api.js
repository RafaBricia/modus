import axios from 'axios'

const api = axios.create({
    baseURL: 'http://54.153.118.38:80/api'
});


export default api;