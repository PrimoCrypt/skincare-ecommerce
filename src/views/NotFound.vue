<template>
    <div class="container">
        <div class="navigationBar">
            <NavBar />
        </div>
        <div class="content">
            <h2>404 </h2>
            <h3>Page not found</h3>
        </div>
        
    </div>
    
</template>


<script setup>
    import NavBar from '@/components/NavBar.vue';

</script>


<style scoped>
    .container{
        color: black;
        display: flex;
        margin: 0 80px;
        flex-direction: column;
        min-height: 100vh;
    }
</style>