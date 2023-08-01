<script setup>
import HomeView from '@/views/HomeView.vue';
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html{
    margin: 0;
    width: 100%;
    height: auto;
}

body {
    margin: 0;
    color: #E9E9E9;
    background-color: #F1F5F2;
    ;
}

.app {
    height: 100%;
    font-family: 'Cardo', serif;
}

#app {
    /* width: 100%; */
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    padding: 0;
}
</style>
