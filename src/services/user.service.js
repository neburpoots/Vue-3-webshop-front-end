import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://127.0.0.1:8000/api/'

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'products')
    }
    getUserContent() {
        return axios.get(API_URL + 'user', { headers: authHeader()})
    }
}

export default new UserService();
