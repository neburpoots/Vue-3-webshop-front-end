import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/';

class AuthService {
    login(user) {
        console.log(user);

        return axios.post(API_URL + 'login', {
            "email": user.email,
            "password": user.password
        })
        .then(response => {
            if(response.data.access_token) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data;
        });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'register', {
            name: user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
        });
    }
}
export default new AuthService();