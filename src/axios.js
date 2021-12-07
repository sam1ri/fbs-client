import Axios from 'axios';

const axiosInstance = Axios.create({
    baseURL: 'http://localhost:8000/'
    //  baseURL: 'https://services.cacttus.com:5010/'
});

export default axiosInstance;