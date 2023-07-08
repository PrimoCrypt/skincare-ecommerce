<template>
    <div class="navbar">
            <h1>{{ pageNameHeader }}.</h1>
            <div class="nav-link-center">
                <router-link to="/">Home</router-link>
                <router-link to="/products">Products</router-link>
                <span>Sale</span>
                <router-link to="/blog">Blog</router-link>
                <router-link to="/about">About Us</router-link>
            </div>
            <span>
                <router-link to="/cart">Cart({{ totalCartItems }})</router-link>
            </span>
    </div>
    
</template>

<script>
import { ref } from 'vue'
import pageData from './pageData.js'

export default{
    setup(){
        const { pageNameHeader } = pageData()   
        const totalCartItems = ref(0)


        return{ pageNameHeader , totalCartItems}
    }
}
</script>

<style>
.navbar {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 80px;
}
/* 
.nav-link-center {
    width: 100%;

} */

/* nav h1 {
    float: left;
    width: 120px;
} */

.nav-link-center a{
    width: 100px;
}

.navbar a {
    margin: 0 20px;
    text-decoration: none;
    color: #E9E9E9;
}

.navbar a.router-link-exact-active {
    font-weight: bold;
    text-decoration: underline;
}
</style>
