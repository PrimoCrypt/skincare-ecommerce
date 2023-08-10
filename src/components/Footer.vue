<template>
  <div class="footer">
    <img src="@/assets/FooterImage.png" alt="Footer Image" />
    <div class="footer-text">
        <div class="left">
            <h3>{{ pageNameHeader }}</h3>
            <h5>
                Skin care is a science, Allure makes it art.
                Reduce fine lines & wrinkles with alpha 
                hydroxy acid skin care products. Say HI to a
                new found glow routine.
            </h5>
            <p>
                Allurebeauty © 2022. All Rights Reserved.
            </p>
        </div>
        <div class="right">
            <div class="nav-links">
                <router-link to="/info/">Info</router-link>
                <router-link to="/shipping/">Shipping & Returns</router-link>
                <router-link to="/privacy-policy/">Privacy Policy</router-link>
                <router-link to="/faqs/">FAQs</router-link>
                <router-link to="/contact/t">Contact</router-link>
                <p>Soft Avenue, House 15, Ibeju Lekki, Lagos,Nigeria.</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { pageNameHeader } from "../pageData";

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;

}

.footer {
    max-width: 100%;
    height: 100%;
    background-color: #2f4333;
    overflow: hidden;
}

.footer img {
    width: 100%;
    max-height: 600px;
    
}

.footer-text {
    display: flex;
    justify-content: space-between;
    color: white;
    height: 40vh;
    margin: 40px 180px 0;
}
.left{
    width: 40%;
    text-align: left;
}
.left h3{
    font-size:22px ;
}
.left h5{
    font-size:18px ;
    font-weight: 500;
}

.left p{
    font-size: 15px;
}
.right{
    width: 40%;
    text-align: left;
}
.nav-links{
    display: flex;
    flex-direction: column;
}
@media (max-width: 1240px){
    .footer-text{
        margin: 40px 100px 0;
    }
    .left{
        width: 40%;
    }
}
@media (max-width: 800px){
    .footer-text{
        margin: 40px 70px 0px;
        height: 30vh;
    }
    .left{
        width: 45%;
    }
    .left h5{
        font-size: 1rem;
    }
    .left p{
        font-size: 0.8rem;
    }
    .right{
        width: 45%;
    }
    .right a{
        font-size: 1rem;
    }
    .right p{
        font-size: 0.8rem;
    }
}
@media (max-width: 650px){
    .footer-text{
        margin: 40px 50px 0px;
        height: 30vh;
    }
    .left{
        width: 50%;
    }
    .left h5{
        font-size: 0.8rem;
    }
    .left p{
        font-size: 0.7rem;
    }
    .right{
        width: 45%;
    }
    .right a{
        font-size: 0.8rem;
    }
    .right p{
        font-size: 0.7rem;
    }
}
@media (max-width: 450px){
    .footer-text{
        margin: 30px 20px 30px;
        height: 20vh;
    }
    .left{
        width: 50%;
    }
    .left h5{
        font-size: 0.6rem;
        font-weight: 400;
    }
    .left p{
        font-size: 0.5rem;
    }
    .right{
        width: 45%;
    }
    .right a{
        font-size: 0.8rem;
    }
    .right p{
        font-size: 0.7rem;
    }
}

</style>
