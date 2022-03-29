import api from './api';

class OrderService {

    getMyOrders() {
        return api.get('user/orders')
    }
    getOneOrder(id) {
        return api.get('user/orders/' + id)
    }
}

export default new OrderService();
