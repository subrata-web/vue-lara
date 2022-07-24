import axios from "axios";
const http = axios.create({
    baseURL: 'http://127.0.0.1:8000/frontend',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default http;