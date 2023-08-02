<template>
  <div class="footer">
    <img src="@/assets/FooterImage.png" alt="Footer Image" />
    <div class="footer-text">
        <div class="left">
            <h3>{{ pageNameHeader }}</h3>
            <h5>
                Skin care is a science, Allure makes it art. <br>
                Reduce fine lines & wrinkles with alpha <br>
                hydroxy acid skin care products. Say HI to a<br>
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
                <p>Soft Avenue, House 15, Ibeju Lekki,<br/>Lagos,Nigeria.</p>
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
    margin: 80px 180px 0;
}
.left{
    width: 40%;
    text-align: left;
}

.right{
    width: 40%;
    text-align: left;
}
.nav-links{
    display: flex;
    flex-direction: column;
}
</style>
