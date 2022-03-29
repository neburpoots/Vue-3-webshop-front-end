import api from "./api";
import TokenService from "./token.service";

class AuthService {
    login(user) {
        console.log(user);

        return api.post('login', {
            "email": user.email,
            "password": user.password
        })
        .then(response => {
            console.log(response.data);
            if(response.data.access_token) {
                localStorage.setItem('userObject', JSON.stringify(response.data))
            }
            return response.data;
        });
    }

    logout() {
        TokenService.removeUser();
    }

    register(user) {
        return api.post('register', {
            name: user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
        });
    }
}
export default new AuthService();