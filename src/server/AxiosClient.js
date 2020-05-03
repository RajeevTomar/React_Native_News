import axios from 'axios';
import {BASE_URL} from '../server/Url';
import {API_AUTH_KEY} from '../server/Config';

const axiosClient = axios.create({
    // baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
        Authorization:API_AUTH_KEY
    }
});



export default axiosClient;