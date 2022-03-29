class CartService {
    addToCartStorage(product) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if(cart) {
        cart.products.push({
            product,
            quantity: 1,
        });
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        const cart = { products: [] };

        cart.products.push({
            product,
            quantity: 1,
        });
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
    incrementAmount(id) {
        const cart = JSON.parse(localStorage.getItem("cart"));
        const cartItem = cart.products.find(item => item.product.id === id)
        cartItem.quantity++
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // getLocalAccessToken() {
    //   const user = JSON.parse(localStorage.getItem("userObject"));
    //   return user?.access_token;
    // }
    // updateLocalAccessToken(token) {
    //   let user = JSON.parse(localStorage.getItem("userObject"));
    //   user.access_token = token;
    //   localStorage.setItem("userObject", JSON.stringify(user));
    // }
    // updateLocalRefreshToken(token) {
    //   let user = JSON.parse(localStorage.getItem("userObject"));
    //   user.refresh_token = token;
    //   localStorage.setItem("userObject", JSON.stringify(user));
    // }
    // getUser() {
    //   return JSON.parse(localStorage.getItem("userObject"));
    // }
    // setUser(user) {
    //   console.log(JSON.stringify(user));
    //   localStorage.setItem("userObject", JSON.stringify(user));
    // }
    // removeUser() {
    //   localStorage.removeItem("userObject");
    // }
  }
  export default new CartService();