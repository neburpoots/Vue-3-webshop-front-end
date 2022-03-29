import api from './api';

class UserService {
    getPublicContent() {
        return api.get('products')
    }
    getUserContent() {
        return api.get('user')
    }
}

export default new UserService();
