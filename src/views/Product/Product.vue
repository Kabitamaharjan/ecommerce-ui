<!-- eslint-disable-->
<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4> Our Products</h4>
                <router-link id="add-product" :to="{name : 'AddProduct'}" v-show="$route.name=='AdminProduct'">                    <button class="btn" >
                        Add Product
                    </button> </router-link>
            </div>
        </div>
        <div class="row">
<!--            display all the products in productbox component-->
            <div v-for="product of products" :key="product.id"
                 class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
                <ProductBox :product="product"/>
            </div>
        </div>
    </div>
</template>
<script>
    import ProductBox from "../../components/ProductBox.vue";
    export default {
        components: {ProductBox},
        props:["baseURL","products"],
        mounted(){
    if (this.$route.name=='AdminProduct' && !localStorage.getItem('token')) {
      this.$router.push({name : 'SignIn'});
    }
  }
    }
</script>
<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-product {
  float: right;
  font-weight: 500;
}
</style>