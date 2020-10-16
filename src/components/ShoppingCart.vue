<template>
  <div id="shopping-cart">
    <h1>Shopping Cart</h1>
    <ul
      v-if="products"
      class="no-bullets"
    >
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} - {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
      <button @click="checkout">Checkout</button>
      <p v-if="checkoutStatus">{{checkoutStatus}}</p>
  </div>
</template>

<script>
 import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'ShoppingCart',
  computed: {
    ...mapGetters('cart', {
        products: 'cartProducts',
        total: 'cartTotal'
      }),
      ...mapState('cart', {
        checkoutStatus: state => state.checkoutStatus
      })
  },
   methods: {
      ...mapActions('cart', ['checkout'])
    }
}
</script>

<style>

</style>