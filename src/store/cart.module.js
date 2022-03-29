import CartService from '../services/cart.service';
const cartLocal = JSON.parse(localStorage.getItem('cart'));

const initialState = cartLocal
  ? { products: cartLocal.products }
  : { products: [] };

export const cart = {
  namespaced: true,
  state: {
    products: initialState.products,
  },
  getters: {
    getProducts(state) {
      return state.products;
    }
  },
  actions: {
    addProductToCart ({ state, commit }, product) {
      const cartItem = state.products.find(item => item.product.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { product })
      } else {
        commit('incrementItemQuantity', { product })
      }      
    }
  },
  mutations: {
    pushProductToCart (state, { product }) {
      CartService.addToCartStorage(product);
      state.products.push({
        product,
        quantity: 1,
      })
    },
    incrementItemQuantity (state, { product }) {
      console.log(product.id);
      CartService.incrementAmount(product.id);
      const cartItem = state.products.find(item => item.product.id === product.id)
      cartItem.quantity++
    },
  
  }
};