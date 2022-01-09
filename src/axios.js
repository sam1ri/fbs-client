import Axios from 'axios';

const axiosInstance = Axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {accessToken: 'bearer '+ localStorage.getItem('access_token') }
    //  baseURL: 'https://services.cacttus.com:5010/'
});

export default axiosInstance;