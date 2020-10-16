<template>
  <div id="product-list">
    <h1>Product List</h1>
    <img
      v-if="loading"
      src="https://media3.giphy.com/media/l4FGv5Ci0WIp8kYhO/giphy.gif"
    />
    <ul
      v-else
      class="no-bullets"
    >
      <li
        v-for="product in products"
        :key="product.id"
      >
        {{ product.title }} - {{ product.price | currency }} 
        <button
          :disabled="!productInStock(product)"
          @click="addToCart(product)"
        >
          Add to cart
        </button> - {{ product.inventory }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import shop from '@/api/shop.js';

export default {
  name: 'ProductList',
  data: function() {
    return {
      loading: false,
      productIndex: 1
    }
  },
  computed: {
    ...mapState('products', {
        products: state => state.items
      }),
    ...mapGetters('products', {
        productInStock: 'productStocked'
      })
  },
  methods: {
    ...mapActions({
        fetchProducts: 'products/fetchProducts',
        addProductToCart: 'cart/addProductToCart'
      })
  },
  created: function() {
    this.loading = true
    // like .commit() but for calling actions
    this.fetchProducts()
      .then(() => this.loading = false)
  }

}
</script>

<style>

</style>