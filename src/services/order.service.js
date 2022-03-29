import api from './api';

class OrderService {

    getMyOrders() {
        return api.get('user/orders')
    }
    getOneOrder(id) {
        return api.get('user/orders/' + id)
    }

    orderItems(items) {
        
        const order = { products: [] };

        items.forEach(item => {
            order.products.push({
                product_id: item.product.id,
                quantity: item.quantity
            })
        })

        let jsonOrder = JSON.stringify(order);
        
        try {
            return api.post("user/orders", jsonOrder);
        } catch (_error) {
            return Promise.reject(_error);
        }
    }
}

export default new OrderService();
