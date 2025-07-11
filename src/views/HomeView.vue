<template>
    <div class="home">
        <div class="homeHeader" :class="{ show: isMenuOpen }">
            <div class="navigationBar">
                <NavBar />
            </div>
            <div class="homeHeaderMid">
                <h3>{{ pageName }} :<br> Skin for days</h3>
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
        <div class="blogView" id="blogViewComp">
            <BlogSection/>
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
import BlogSection from '@/components/HomePageComps/BlogSection.vue'
import Footer from '@/components/Footer.vue'
import { pageName } from '@/pageData.js'
import { useRouter, useRoute } from 'vue-router';
import {inject } from 'vue'


// const { pageName } = pageData
const router = useRouter();
const route = useRoute();
const navigateToProductView = () => {
    router.push('/products')
}

// Inject the state and method from the parent component
const isMenuOpen = inject('isMenuOpen');
const toggleMenu = inject('toggleMenu');

</script>

<style scoped>
.home{
  background: #F1F5F2;  
}

.homeHeader {
    width: 100%;
    height: 120vh;
    background: linear-gradient(rgba(0, 0, 0, 0.372), rgba(0, 0, 0, 0.194)), url('/src/assets/HomeHeaderImage.jpeg') no-repeat;
    background-size: cover;
    background-position: center;
}

.homeHeader.show {
    background: linear-gradient(rgba(0, 0, 0, 0.837), rgba(0, 0, 0, 0.827)), url('/src/assets/HomeHeaderImage.jpeg') no-repeat;
    width: 100%;
    height: 120vh;
    background-size: cover;
    background-position: center;
}


.navigationBar{
    margin: 0 80px;
}

.navigationBar /deep/ .nav-links.show{
    background: #ffffffed;
}
.navigationBar /deep/ .nav-links.show a{
    color: rgb(0, 0, 0);
}
.navigationBar /deep/ .nav-links a{
    color: white;
}
.navigationBar /deep/ .nav-cart a{
    color: white;
}
.navigationBar /deep/ .show .sale{
    border: 2px solid rgb(0, 0, 0);
    color: rgb(0, 0, 0);
}
.navigationBar /deep/ .sale{
    border: 1px solid rgb(255, 255, 255);
    color: white;
}

.homeHeaderMid {
    width: 80%;
    text-align: left;
    margin: 0 80px;

}

.homeHeaderMid h3 {
    font-size: 4rem;
    margin: 15vh 0 40px 0;
}

.homeHeaderMid p {
    width: 60%;
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
@media(max-width: 600px) and (max-height: 900px){
    .homeHeader {
        width: 100%;
        height: 90vh;
    }
    .homeHeader.show {
        width: 100%;
        height: 90vh;
    }
    .homeHeaderMid h3{
        font-size: 2.5rem;
    }
    .homeHeaderMid p{
        font-size: 1.2rem;
        width: 100%;
    }
    .homeHeaderMid{
        width: 80%;
    }
    
}

@media (max-width:450px) and (max-height: 650px){
    .homeHeaderMid h3{
        margin-top: 60px;
        margin-bottom: 10px;
    }
    .homeHeaderMid p{
       font-size: 1rem;
    }
    .homeHeaderMid button{
        padding: 15px 40px;
        font-size: 1rem;
    }
}
@media(max-width: 350px) and (max-height: 500px){
    .homeHeaderMid h3{
        font-size: 1.5rem;
        margin-top: 30px;
    }
}
</style>
