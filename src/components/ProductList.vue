<template>
  <div id="product-list">
    <h1>Product List</h1>
    <img
      v-if="loading"
      src="https://media3.giphy.com/media/l4FGv5Ci0WIp8kYhO/giphy.gif"
    />
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} 
        <button @click="addToCart(product)">Add to cart</button> - {{ product.inventory }}
      </li>
    </ul>
  </div>
</template>

<script>
import shop from '@/api/shop.js';

export default {
  name: 'ProductList',
  data: function() {
    return {
      loading: false
    }
  },
  computed: {
    products: function() {
      return this.$store.getters.availableProducts
    }
  },
  methods: {
    addToCart: function(product) {
      this.$store.dispatch('addProductToCart', product)
    }
  },
  created: function() {
    this.loading = true
    // like .commit() but for calling actions
    this.$store.dispatch('fetchProducts')
      .then(() => this.loading = false)
  }

}
</script>

<style>

</style>