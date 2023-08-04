import axios from "axios";

const axiosInterface = axios.create();

axiosInterface.defaults.baseURL = 'http://localhost:3000/api';

export default axiosInterface;