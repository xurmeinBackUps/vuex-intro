import Vuex from 'vuex';
import Vue from 'vue';
import cart from './modules/cart'
import products from './modules/products'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products
  },

  state: { // equivalent to component `data:` property
    // products: [],
    // cart: [],
    // checkoutStatus: null
  },
  getters: { // equivalent to component `computed:` property 
  // as computed properties, getters track their own dependencies and update automatically
    // availableProducts: function(state, getters) {
    //   // returns array of available products
    //   return state.products.filter(product => product.inventory > 0)
    // },
    // cartProducts: function(state, getters) {
    //   return state.cart.map(cartItem => {
    //     const product = state.products.find(product => product.id === cartItem.id)
    //     return {
    //       title: product.title,
    //       price: product.price,
    //       quantity: cartItem.quantity
    //     }
    //   })
    // },
    // cartTotal: function(state, getters) {
    // //   let total = 0
    // //   getters.cartProducts.forEach(product => {
    // //     total += product.price * product.quantity
    // //   })
    // //   return total
    // // }e
    //   return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    // },
    // productStocked: function() {
    //   return (product) => {
    //     return product.inventory > 0
    //   }
    // }
  },
  actions: { // equivalent to component `methods:` property
  // may use complex logic, but NOT directly manipulate {state}
    // fetchProducts: function({commit}) {
    //   // make api call
    //   return new Promise((resolve, reject) =>
    //   // run setProducts mutation
    //     shop.getProducts(products => {
    //       // DO NOT mutate state directly in component!
    //       // call mutation w/ .commit('mustationName', {pieceOfState})
    //       commit('setProducts', products)
    //       resolve()
    //     })
    //   )
    // },
    // addProductToCart: function({state, getters, commit}, product) {
    //   if(getters.productStocked(product)){
    //     const cartItem = state.cart.find(item => item.id === product.id)
    //     if(!cartItem) {
    //       commit('pushProductToCart', product.id)
    //     } else {
    //       commit('incremementItemQuantity',cartItem)
    //     }
    //     commit('decrementProductInventory', product)
    //   }
    // },
    // checkoutCart: function({state, commit}) {
    //   shop.buyProducts(
    //     state.cart,
    //     () => {
    //       commit('emptyCart')
    //       commit('setCheckoutStatus', 'success')
    //     },
    //     () => {
    //       commit('setCheckoutStatus', 'fail')
    //     }
    //   )
    // }
  },
  mutations: { // no component equivalent; responsible for setting & updating single state changes
  //   setProducts: function(state, products) { // mutations ALWAYS take state and *may* take a params option of some piece of state
  //     // updates products array
  //     // each mutation is responsible for updating one piece of state
  //     state.products = products
  //   },
  //   pushProductToCart: function(state, productId) {
  //     state.cart.push({
  //       id: productId,
  //       quantity: 1
  //     })
  //   },
  //   incremementItemQuantity: function(state, cartItem) {
  //     cartItem.quantity++
  //   },
  //   decrementProductInventory: function(state, product) {
  //     product.inventory--
  //   },
  //   setCheckoutStatus(state, status) {
  //     state.checkoutStatus = status
  //   },
  //   emptyCart: function(state) {
  //     state.cart = []
  //   }
  }
})