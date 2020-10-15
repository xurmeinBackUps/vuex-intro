<template>
  <div id="shopping-cart">
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} - {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <button @click="$store.dispatch('checkoutCart')">Checkout</button>
    <p v-if="$store.state.checkoutStatus">{{ $store.state.checkoutStatus }}</p>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  computed: {
    products: function() {
      return this.$store.getters.cartProducts
    },
    total: function() {
      return this.$store.getters.cartTotal
    }
  }
}
</script>

<style>

</style>