import axios from 'axios';
const token = localStorage.getItem('token')

const api = axios.create({
    baseURL: 'http://localhost:4000/v1',
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export default api;
