<template>
  <div id="app">
    <img src="./assets/logo.png" heigh="60" width="60" class="l-float">
    <ProductList/>
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  name: 'app',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.l-float {
  float: left;
}

.no-bullets {
  list-style: none;
}
</style>
