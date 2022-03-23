<template>
  <div class="container">
    <header class="jumbotron">
      <div class="products" v-for="product in products" :key="product.id">
        <figure class="figure">
          <img :src=product.image alt="" class="productImage">
        </figure>
      </div>
    </header>
  </div>
</template>

<script>
import UserService from "../services/user.service";
export default {
  name: "Home",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.products = response.data.data;
        console.log(this.products);
      },
      (error) => {
        this.products =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>