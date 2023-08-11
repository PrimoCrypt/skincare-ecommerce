<template>
    <div class="totalNavBar">
        <div v-if="!isSmallScreen" class="navbar content">
            <h1>{{ pageNameHeader }}.</h1>
            <div class="nav-links">
                <router-link to="/">Home</router-link>
                <router-link to="/products">Products</router-link>
                <span>Sale</span>
                <router-link to="/#blogViewComp">Blog</router-link>
                <router-link to="/about">About Us</router-link>
            </div>
            <span class="nav-cart">
                <router-link to="/cart">
                    <font-awesome-icon :icon="['fas', 'shopping-cart']" size="lg" /><span class="cart-quantity">{{ totalCartItems.length }}</span>
                </router-link>
            </span>
        </div>
        
        <div v-else class="navbar content">
            <h1>{{ pageNameHeader }}.</h1>
            <div class="leftside">
                <span class="nav-cart">
                    <router-link to="/cart">
                        <font-awesome-icon :icon="['fas', 'shopping-cart']" size="lg" /><span class="cart-quantity">{{ totalCartItems.length }}</span>
                    </router-link>
                </span>
                <div class="whole-harmburger-menu">
                    <button class="hamburger-menu" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div class="nav-links" :class="{ show: isMenuOpen }">
                        <router-link to="/">Home</router-link>
                        <hr>
                        <router-link to="/products">Products</router-link>
                        <hr>
                        <a href="/#blogViewComp">Blog</a>
                        <hr>
                        <router-link to="/about">About Us</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { pageNameHeader, totalCartItems } from '@/pageData.js';

    const isMenuOpen = ref(false)

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
    }

    const isSmallScreen = ref(window.innerWidth < 700);

    const handleResize = () => {
        isSmallScreen.value = window.innerWidth < 700;
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });

    

</script>

<style scoped>
hr{
    color: black;
    width: 90%;
    margin: 0 0 0 5px;
}
.totalNavBar{
    position: relative;
}
.navbar {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    position: relative;
    top: 10px;
    margin-bottom: 30px;
}

.nav-link-center {
    width: 100%;

}

.navbar h1 {
    margin: 0;
}

.whole-harmburger-menu{
    margin-left: 20px;
}

.nav-cart{
    position: relative;
}
.cart-quantity{
    position: absolute;
    top: -4px;
    right:12px;
    background-color: white;
    border: 1px black solid;
    width: 13px;
    height: 13px;
    border-radius: 50% ;
    font-size: 10px;
    color: black;
    font-family: Rubik;
    font-weight: 700;
}
.navbar a {
    margin: 0 20px;
    text-decoration: none;
    color: black;
}

.navbar a.router-link-exact-active {
    font-weight: bold;
    text-decoration: underline;
}


@media (max-width: 900px) {
    .navbar a {
        margin: 0 5px;
    }
    .cart-quantity{
        right: -3px;
    }
}


@media (max-width: 800px) {
    .navbar h1 {
        font-size: 2rem;
    }

}
@media (max-width: 750px) {
    .navbar a {
        margin: 0 5px;
    }

}


@media (max-width: 700px) {
    .navbar{
        height: 50px
    }
    .navbar h1{
        font-size: 2.5rem;
    }
    /* .whole-harmburger-menu{
        align-self:baseline;
    } */
    .hamburger-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
    }
    .hamburger-menu:focus, .hamburger-menu:focus-visible{
        outline: none;
    }
    .hamburger-menu span {
        display: block;
        width: 25px;
        height: 3px;
        margin-bottom: 5px;
        background-color: #000;
    }

    .hamburger-menu span:last-child{
        margin: 0;
    }
    .nav-links a, .nav-links span {
        margin: 10px 0;
        text-decoration: none;
        text-align: left;
        width: 100%;
        color: #000;
        padding-left: 10px;

    }
    /* Hide the navigation links by default */
    .nav-links {
        display: none;
        position: absolute;
        
    }
    /* Show the navigation links when the menu is open */
    .nav-links.show {
        display: flex;
        flex-direction: column;
        background-color: #dddddd6e;
        width: 100px;
        position: absolute;
        right: 0px;
        border-radius:10px;
    }
    .leftside{
        display: flex;
        align-items: center;
    }
}

@media (max-width: 500px){
    .navbar h1{
        font-size: 2rem;
    }
}


</style>