
<template>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h4 class="pt-3">Your WishList</h4>
        </div>
      </div>
  
      <!-- display products -->
  
      <div class="row">
        <div v-for="product of products" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <ProductBox :product="product"> </ProductBox>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  import ProductBox from "../../components/ProductBox.vue";
  export default {
    emits: ['fetchData'], // Declare the fetchData event
    components: { ProductBox },
    data() {
      return {
        token: null,
        products: null,
      };
    },
    props: ["baseURL"],
    methods: {
      fetchWishList() {
        axios
          .get(`${this.baseURL}wishlist/${this.token}`)
          .then((data) => {
            console.log(data);
            localStorage.setItem('token',data.token);//stroing token into local storage
            this.products = data.data;
          })
          .catch((err) => {
            console.log("err", err);
          });
      },
    },
    async mounted() {
  this.token = await localStorage.getItem("token");
       // Add this line to log the retrieved token
    console.log("Token:", this.token);
      this.fetchWishList();
    },
  };
  </script> 
  <style scoped>
  h4 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
  }
  </style>