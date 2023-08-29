import axios from 'axios';

export const reqResApi = axios.create({
    baseURL: 'https://nestspa-production.up.railway.app/api'
});
