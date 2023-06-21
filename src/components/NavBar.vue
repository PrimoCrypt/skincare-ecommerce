<template>
    <nav>
        <h1>ALLURE.</h1>
        <div class="nav-link-center">
            <router-link to="/">Home</router-link>
            <router-link to="/products">Products</router-link>
            <span>Sale</span>
            <router-link to="/blog">Blog</router-link>
            <router-link to="/about">About Us</router-link>
        </div>
        <span>
            <router-link to="/cart">Cart</router-link>
        </span>
    </nav>
</template>

<script>
export default{
    
}
</script>

<style>
nav {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 30px;

}

.nav-link-center {
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
}

/* nav h1 {
    float: left;
    width: 120px;
} */

.nav-link-center a{
    width: 100px;
}

nav a {
    margin: 0 20px;
    text-decoration: none;
    color: #E9E9E9;
}

nav a.router-link-exact-active {
    font-weight: bold;
    text-decoration: underline;
}
</style>
