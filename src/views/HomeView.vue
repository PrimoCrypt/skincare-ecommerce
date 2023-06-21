<template>
  <div class="home">
    <div class="homeHeader">
      <NavBar />
      <div class="homeHeaderMid">
        <h3>{{ pageName }} : Skin for days</h3>
        <p>Skin care us a science, {{ pageName }} makes it art. Reduce finelines and wrinkles with alpha hydroxy acid skin care products. Say HI to a new found glow routine.</p>
        <button @click="navigateToProductView">Shop now</button>
      </div>
    </div>
  </div>
  <FooterImage />
</template>

<script>
import FooterImage from '@/components/footer/FooterImage.vue'
import pageData from '@/components/pageData.js'
import NavBar from '@/components/NavBar.vue'
import { useRouter,useRoute } from 'vue-router';

export default {
  name: 'Home',
  components: { NavBar, FooterImage},
  setup(){
    const { pageName } = pageData()
    const router = useRouter();
    const route = useRoute();
    const navigateToProductView = ()=>{
        router.push('/products')
    }

    
    return{ pageName, navigateToProductView }
  }
}
</script>

<style scoped>

.homeHeader{
  height: 120vh;
  background: linear-gradient(rgba(0, 0, 0, 0.372), rgba(0, 0, 0, 0.194)), url('/src/assets/HomeHeaderImage.jpeg') no-repeat;
  background-size: cover;
  padding: 0 100px;

}

.homeHeaderMid{
  width: 60%;
  text-align: left;
}

.homeHeaderMid h3{
  font-size: 4rem;
  margin: 180px 0 40px 0;
}

.homeHeaderMid p{
  font-size: 1.4rem;
}

.homeHeaderMid button{
    border: none;
    background: #2F4333;
    color: white;
    font-size: 1.4rem;
    border-radius: 3px;
    font-weight: bold;
    padding: 20px 50px;
}
</style>