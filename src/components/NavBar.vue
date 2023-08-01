<template>
    <div class="totalNavBar">
        <div v-if="!isSmallScreen" class="navbar content">
            <h1>{{ pageNameHeader }}.</h1>
            <div class="nav-links">
                <router-link to="/">Home</router-link>
                <router-link to="/products">Products</router-link>
                <span>Sale</span>
                <router-link to="/blog">Blog</router-link>
                <router-link to="/about">About Us</router-link>
            </div>
            <span>
                <router-link to="/cart">Cart({{ totalCartItems.length }})</router-link>
            </span>
        </div>
        
        <div v-else class="navbar content">
            <h1>{{ pageNameHeader }}.</h1>
            <span>
                <router-link to="/cart">Cart({{ totalCartItems.length }})</router-link>
            </span>
            <div class="whole-harmburger-menu">
                <button class="hamburger-menu" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="nav-links" :class="{ show: isMenuOpen }">
                    <router-link to="/">Home</router-link>
                    <router-link to="/products">Products</router-link>
                    <span>Sale</span>
                    <router-link to="/blog">Blog</router-link>
                    <router-link to="/about">About Us</router-link>
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
.navbar {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}


.nav-link-center {
    width: 100%;

}

/* nav h1 {
    float: left;
    width: 120px;
} */

.nav-link{
    margin: 0 20px;
}

.nav-link a{
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


@media (max-width: 800px) {
    .navbar a {
        margin: 0 10px;
    }
}


@media (max-width: 750px) {
    .navbar a {
        margin: 0 5px;
    }

}


@media (max-width: 700px) {
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
    }
    .hamburger-menu span {
        display: block;
        width: 25px;
        height: 3px;
        margin-bottom: 5px;
        background-color: #000;
    }
    .nav-links {
        display: flex;
        flex-direction: column;
        align-items: center;
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
    }
    /* Show the navigation links when the menu is open */
    .nav-links.show {
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 100px;
        position: relative;
    }
    
}


</style>