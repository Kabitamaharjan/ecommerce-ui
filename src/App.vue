<!--eslint-disable-->
<template>
  <Navbar :cartCount="cartCount" @resetCartCount="resetCartCount" />
  <router-view
    v-if="categories && products"
    style="min-height: 60vh"
    :baseURL="baseURL"
    :categories="categories"
    :products="products"
    @fetchData="fetchData"
  >
  </router-view>
  
 <!-- <Footer/> -->
<Footer v-if="!['SignUp', 'SignIn'].includes($route.name)"></Footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer";
import axios from "axios";
export default {
  components: { Navbar, Footer},
  data() {
    return {
      baseURL: 'http://localhost:8080/',
      products: null,
      categories: null,
      cartCount: 0,
    };
  },
  methods: {
    async fetchData() {
      // api call to get all the categories
      await axios
        .get(this.baseURL + 'category/')
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => console.log('err', err));

      // api call to get the products

      await axios
        .get(this.baseURL + 'product/')
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => console.log('err', err));

      // fetch cart item if token is present i.e logged in
      if (this.token) {
        await axios
          .get(`${this.baseURL}cart/?token=${this.token}`)
          .then((res) => {
            if(res.status == 200)
            {
              // update cart
              this.cartCount = Object.keys(res.data.cartItems).length;
            }     
          },
          (error) => {
            console.log(error);}
          );
    }
    },
    resetCartCount() {
      this.cartCount = 0;
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
    this.fetchData();
  },
};
</script>
<style>
html {
  overflow-y: scroll;
}

</style>