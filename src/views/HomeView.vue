<template>
    <div class="home">
        <div class="homeHeader">
            <div class="navigationBar">
                <NavBar />
            </div>
            <div class="homeHeaderMid">
                <h3>{{ pageName }} : Skin for days</h3>
                <p>Skin care us a science, {{ pageName }} makes it art. Reduce finelines and wrinkles with alpha hydroxy
                    acid skin care products. Say HI to a new found glow routine.</p>
                <button @click="navigateToProductView">Shop now</button>
            </div>
        </div>
        <div class="homeAboutUs">
            <AboutUs />
        </div>
        <div class="homeWhyUs">
            <WhyUs />
        </div>
        <div class="homePopularProd">
            <PopularProd />
        </div>
        <div class="homeTopPicks">
            <TopPicks />
        </div>
        <div class="homeNecessities">
            <Necessities />
        </div>
        <div class="blogView" :ref="BlogView">
            <BlogView />
        </div>
    </div>
    <Footer />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import AboutUs from '@/components/HomePageComps/AboutUs.vue'
import WhyUs from '@/components/HomePageComps/WhyUs.vue'
import PopularProd from '@/components/HomePageComps/PopularProd.vue'
import TopPicks from '@/components/HomePageComps/TopPicks.vue'
import Necessities from '@/components/HomePageComps/Necessities.vue'
import BlogView from '@/views/BlogView.vue'
import Footer from '@/components/Footer.vue'
import { pageName } from '@/pageData.js'
import { useRouter, useRoute } from 'vue-router';


// const { pageName } = pageData
const router = useRouter();
const route = useRoute();
const navigateToProductView = () => {
    router.push('/products')
}
</script>

<style scoped>
/* .home{
    
} */

.homeHeader {
    width: 100%;
    height: 120vh;
    background: linear-gradient(rgba(0, 0, 0, 0.372), rgba(0, 0, 0, 0.194)), url('/src/assets/HomeHeaderImage.jpeg') no-repeat;
    background-size: cover;
    background-position: center;
}

.navigationBar{
    margin: 0 80px;
}

.homeHeaderMid {
    width: 60%;
    text-align: left;
    margin: 0 80px;

}

.homeHeaderMid h3 {
    font-size: 4rem;
    margin: 15vh 0 40px 0;
}

.homeHeaderMid p {
    font-size: 1.4rem;
}

.homeHeaderMid button {
    border: none;
    background: #2F4333;
    color: white;
    font-size: 1.4rem;
    border-radius: 3px;
    font-weight: bold;
    padding: 20px 50px;
}

.homeAboutUs {
    margin: 0 80px;
    height: auto;
}

.homeWhyUs {
    margin: 0 80px;
    height: auto;
}

.homePopularProd {
    height: auto;
    color: #2F4333;
    margin: 0 80px;
}

.homeTopPicks {
    margin: 0 80px;
    height: auto;
}

.homeNecessities {
    margin: 0 80px;
    height: auto;
}

.blogView {
    margin: 0 80px;
    height: auto;
}

@media (max-width: 700px) {
    .navigationBar{
        margin: 0 20px;
    }      
    .homeHeaderMid{
        margin: 0 20px;
    }
    .homeAboutUs{
        margin: 0 20px;
    }
    .homeWhyUs{
        margin: 0 20px;
    }
    .homePopularProd{
        margin: 0 20px 20px 20px;
    }
    .homeTopPicks{
        margin: 0 20px;
    }
    .homeNecessities{
        margin: 0 20px;
    }
    .blogView{
        margin: 0 20px;
    }
}
</style>