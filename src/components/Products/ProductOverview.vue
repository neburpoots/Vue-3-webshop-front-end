<template>
  <div class="container mt-5">
    <h1 class="title">Products</h1>
      <div class="products d-flex justify-content-between flex-wrap">
        <product-item
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
  </div>
</template>

<script>
import UserService from "../../services/user.service";
import ProductItem from "./ProductItem.vue";

export default {
  name: "ProductOverview",
  components: {
    ProductItem,
  },
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