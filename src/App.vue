<script setup>
import { provide,ref } from 'vue';

// Define the isMenuOpen state and the toggleMenu method
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Provide the state and method to child components
provide('isMenuOpen', isMenuOpen);
provide('toggleMenu', toggleMenu);
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


.app {
    height: 100%;
    font-family: 'Cardo', serif;
}

#app {
    width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    padding: 0;
    margin: 0;
}
</style>
