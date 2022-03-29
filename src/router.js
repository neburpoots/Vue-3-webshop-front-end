import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/users/Login.vue";
import Register from "./components/users/Register.vue";
import MyOrders from "./components/Orders/users/MyOrders.vue";
import OrderDetail from "./components/Orders/users/OrderDetail.vue";
import ShoppingCart from "./components/Cart/ShoppingCart.vue";

import ProductOverview from './components/Products/ProductOverview.vue';
// lazy-loaded
const Profile = () => import("./components/users/Profile.vue")
const routes = [
  {
    path: "/",
    name: "/",
    component: ProductOverview,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/myorders",
    name: "myorders",
    // lazy-loaded
    component: MyOrders,
  },
  { 
    path: '/orderdetail/:id', 
    component: OrderDetail, 
    props: true  
  },
  { 
    path: '/shoppingcart', 
    component: ShoppingCart, 
  }

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/', '/shoppingcart'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('userObject');
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
});

export default router;

