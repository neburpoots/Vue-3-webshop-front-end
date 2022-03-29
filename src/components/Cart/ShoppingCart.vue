<template>
  <div class="container mt-5">
    <h1 class="title">Shopping cart</h1>
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
import ProductItem from "./../Products/ProductItem.vue";

export default {
  name: "ShoppingCart",
  components: {
    ProductItem,
  },
  computed: {
      products() {
          return this.$store.getters['cart/getProducts'];
      }
  }
};
</script>