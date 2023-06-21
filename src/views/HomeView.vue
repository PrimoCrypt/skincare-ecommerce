<template>
  <div class="home">
    <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: { NavBar }
}
</script>

<style>
.home{
  height: 100%;
  background: url('/src/assets/HomeHeaderImage.jpeg') #f00 no-repeat;
  background-size: cover;
  }
</style>