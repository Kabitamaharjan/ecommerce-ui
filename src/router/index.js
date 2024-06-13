import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Category from '../views/Category/Category'
import AddCategory from '../views/Category/AddCategory'
import EditCategory from "../views/Category/EditCategory";
import ListProducts from "../views/Category/ListProducts";
import SignUp from "../views/SignUp";
import SignIn from '../views/SignIn';

import Product from '../views/Product/Product'
import AddProduct from "../views/Product/AddProduct";
import EditProduct from "../views/Product/EditProduct";
import ShowDetails from "../views/Product/ShowDetails";
import WishList from "../views/Product/WishList";

import Order from '../views/Orders/Order.vue';

// import Khalti from '../views/Khalti.vue';

import Admin from "../views/AdminPanel";

import OrderDetails from "../views/Orders/OrderDetails";

import Cart from '../views/Cart';


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  //Category routes
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  //category detail page
  {
    path:'/category/show/:id',
    name:'ListProducts',
    component: ListProducts

  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  },
  //category edit
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
    // admin home page
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
   //Product routes
   {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
    // add product
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  //edit product
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  //show details of products
  {
    path:'/product/show/:id',
    name:"ShowDetails",
    component: ShowDetails
  },
  //signin and signup
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path : '/order',
    name : 'Order',
    component : Order
  },
  {
    path:'/order/:id',
    name:'OrderDetails',
    component: OrderDetails
  },

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
}) 
//scroll to top after every route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router