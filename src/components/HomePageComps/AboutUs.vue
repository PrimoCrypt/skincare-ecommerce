<template>
    <div class="container">
        <div class="heading-container">
            <p class="heading-p">We are a brand and representation for everyone who believes that beauty does not come from a snapshot, but from a sequence.</p>
        </div>
        <div class="flex-container">
            <div class="l-section">
                <div class="top-l-section">
                    <button @click="navigateToAboutView">LEARN MORE</button>
                </div>
                <div class="bottom-l-section">
                    <h3>ABOUT US</h3>
                    <h1>EARTH IS OUR TRUE SOURCE OF BEAUTY</h1>
                    <p>Allure is a cosmetic brand of face oils,body care and wellness products for all skin types. </p>
                </div>
            </div>
            <div class="r-section">
                <img src="../../assets/homeAboutUsImage.png" class="homeAboutUsImage"/>
            </div>
        </div>
    </div>
  </template>

<script setup>
import { useRouter, useRoute } from 'vue-router';


const router = useRouter();
const navigateToAboutView = () => {
    router.push('/about')
}

</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end; 
  text-align: right;
  width: 100%;
}

.heading-container {
  width: 25vw;
  margin-right: 80px;
}

.heading-p {
  font-family: 'Rubik';
  font-weight: 300;
  font-size: 1.4rem;
  color: black;
  text-align: left;
  width: 100%;
}

.flex-container{
    display: flex;
    color: black;
    margin: 0;
    width: 100%;
}

.l-section{
    width: 65%;
    margin: 0 auto 0 80px;
}

.top-l-section{
    padding: 0 50px 0 0;
}

.top-l-section button{

    border: none;
    background: #2F4333;
    color: white;
    font-size: 1.4rem;
    border-radius: 3px;
    font-weight: bold;
    padding: 20px 50px;
}

.bottom-l-section{
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
}

.bottom-l-section p{
    text-align: center;
    width: 30vw;
    font-size: 1.3rem;
}


.l-section h1{
    /* overflow: scroll; */
    width: 100%;
    text-align: left;
    font-family: 'Cardo';
    font-weight: 700;
    font-size: 60px;
    line-height: 85px;
    color: #703E2D;
    margin: 0;
}


.r-section{
    margin: 40px 80px 0 auto;
}

.homeAboutUsImage{
    width: 25vw;
}

@media (max-width:450px){
    .heading-container{
        width: 100%;
        margin: 0 0 0 20px;
    }
    .heading-p{
        text-align: center;
    }
    .flex-container{
        flex-direction: column;
        width: 100%;
        height: auto;
        padding: 0;
    }
    .l-section{
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .top-l-section{
        padding: 0;
        display: flex;
        justify-content: center;
    }
    .top-l-section button{
        font-size: 15px;
        padding: auto 10px;
    }
    .bottom-l-section{
        width: 100%;
    }
    .bottom-l-section h1{
        font-size: 25px;
        line-height: 40px;
        width: 100%;
        text-align: center;
    }
    .bottom-l-section p{
        width: 80%;
    }
    .r-section{
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        /* height: 500px; */
    }
    .homeAboutUsImage{
        width: 80%;
    }
}
</style>