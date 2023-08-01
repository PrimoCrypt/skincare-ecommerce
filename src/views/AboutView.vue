<template>
    <div class="about">
        <div class="navigationBar">
            <NavBar />
        </div>
        <div v-if="!isMobileScreen" class="content">
            <div class="item">
                <div class="left">
                    <img src="@/assets/Rectangle21.png" />
                </div>
                <div class="right">
                    <h3>OUR STORY</h3>
                    <h5>
                        We are a brand and representation for everyone who believes that
                        beauty does not come from a snapshot, but from a sequence.
                    </h5>
                    <p>
                        We recognise nature as bold and full of surprises,but we also saw
                        that “natural beauty” brands were predictable and flat. So with our
                        deliberate use of minimal colours, Art Deco grandeur, and modern
                        aesthetics, we are unveiling what is actually ‘natural’ in beauty
                        ;which are power,intrigue, and a bit of whimsy too.
                    </p>
                </div>
            </div>
            <div class="item">
                <div class="left">
                    <h3>OUR PHILOSOPHY</h3>
                    <h5>
                        We believe in inclusivity and equity. Our skincare products are
                        tailored to care for all skin type and skin color. They cater for
                        your skin needs and work effectively irrespective of the type,
                        foundation and color.
                    </h5>
                    <p>
                        During our 60s and 70s, skin can feel dry and irritated. This
                        happens for many reasons, including that skin is thinner and loses
                        water more easily. Medications and medical conditions can also play
                        a role.
                    </p>
                    <p>
                        There is good news. The right skin care from Allure can improve how
                        your skin feels — and looks.
                    </p>
                </div>
                <div class="right">
                    <img src="@/assets/Rectangle22.png" />
                </div>
            </div>
            <div class="item">
                <div class="left">
                    <img src="@/assets/Rectangle23.png" />
                </div>
                <div class="right">
                    <h5>With Allure, age is just a number!</h5>
                    <p>
                        During our 60s and 70s, skin can feel dry and irritated. This
                        happens for many reasons, including that skin is thinner and loses
                        water more easily. Medications and medical conditions can also play
                        a role.
                    </p>
                    <p>
                        There is good news. The right skin care from Allure can improve how
                        your skin feels — and looks.
                    </p>
                </div>
            </div>
            <div class="item">
                <div class="left">
                    <p>
                        Our high-performance skin care line helps you achieve a healthy,
                        clear complexion with results-driven formulas & powerful
                        ingredients. Whether your skin is dry or oily, our hyaluronic acid
                        skincare products will keep your skin hydrated and nourished. Need
                        to combat acne? Our salicylic acid skincare products will help clear
                        up breakouts and prevent future ones from forming. Are fine lines &
                        wrinkles giving you a hard time? Our alpha hydroxy acids skincare
                        products are the perfect way to fight back against the signs of
                        aging. With our premium natural & organic ingredients, you can be
                        sure that every skincare product we make is pure & effective.
                    </p>
                </div>
                <div class="right">
                    <img src="@/assets/Rectangle24.png" />
                </div>
            </div>
        </div>

        <div v-else class="small-screen-content">
            <img src="@/assets/Rectangle21.png" />
            <div class="small-screen-text">
                <h3>OUR STORY</h3>
                <h5>
                    We are a brand and representation for everyone who believes that
                    beauty does not come from a snapshot, but from a sequence.
                </h5>
                <p>
                    We recognise nature as bold and full of surprises,but we also saw
                    that “natural beauty” brands were predictable and flat. So with our
                    deliberate use of minimal colours, Art Deco grandeur, and modern
                    aesthetics, we are unveiling what is actually ‘natural’ in beauty
                    ;which are power,intrigue, and a bit of whimsy too.
                </p>
            </div>
            <img src="@/assets/Rectangle22.png" />
            <div class="small-screen-text">
                <h3>OUR PHILOSOPHY</h3>
                <h5>
                    We believe in inclusivity and equity. Our skincare products are
                    tailored to care for all skin type and skin color. They cater for
                    your skin needs and work effectively irrespective of the type,
                    foundation and color.
                </h5>
                <p>
                    During our 60s and 70s, skin can feel dry and irritated. This
                    happens for many reasons, including that skin is thinner and loses
                    water more easily. Medications and medical conditions can also play
                    a role.
                </p>
                <p>
                    There is good news. The right skin care from Allure can improve how
                    your skin feels — and looks.
                </p>
            </div>
            <img src="@/assets/Rectangle23.png" />
            <div class="small-screen-text">
                <h5>With Allure, age is just a number!</h5>
                <p>
                    During our 60s and 70s, skin can feel dry and irritated. This
                    happens for many reasons, including that skin is thinner and loses
                    water more easily. Medications and medical conditions can also play
                    a role.
                </p>
                <p>
                    There is good news. The right skin care from Allure can improve how
                    your skin feels — and looks.
                </p>
            </div>
            <img src="@/assets/Rectangle24.png" />
            <div class="small-screen-text">
                <p>
                    Our high-performance skin care line helps you achieve a healthy,
                    clear complexion with results-driven formulas & powerful
                    ingredients. Whether your skin is dry or oily, our hyaluronic acid
                    skincare products will keep your skin hydrated and nourished. Need
                    to combat acne? Our salicylic acid skincare products will help clear
                    up breakouts and prevent future ones from forming. Are fine lines &
                    wrinkles giving you a hard time? Our alpha hydroxy acids skincare
                    products are the perfect way to fight back against the signs of
                    aging. With our premium natural & organic ingredients, you can be
                    sure that every skincare product we make is pure & effective.
                </p>
            </div>
        </div>
        <div class="Footer">
            <Footer/>
        </div>
    </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue"
import { ref, onMounted, onUnmounted } from 'vue';


    const isMobileScreen = ref(window.innerWidth <= 950);

    const handleMobileResize = () => {
        isMobileScreen.value = window.innerWidth <= 950;
    };

    onMounted(() => {
        window.addEventListener('resize', handleMobileResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleMobileResize);
    });

</script>

<style scoped>
* {
    color: #292929;
    font-family: Rubik;
}

.navigationBar{
    margin: 0 80px;
    color:#292929;
}


.item {
    display: flex;
    flex-direction: row;
    width: 100%;
    text-align: left;
}

.item_isSmallScreen{
    flex-direction: column;
}

.content{
    margin: 0 80px;
    max-width: 100%; 
    display: flex;
    flex-direction: column;
}
.right{
    padding: 80px 0 80px 80px;
}

.left{
    padding: 80px 80px 80px 0;
}

.right_isSmallScreen{
    padding: 40px 0;
    width: 100%;
}

.left_isSmallScreen{
    width: 100%;
    padding: 40px 0;
}
.item h3{
    font-size: 20px;
    font-weight: 400;
}
.item h5{
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
}
.item p{
    font-size: 20px;
    font-weight: 400;
    line-height: 40px;
}

.small-screen-content{
    max-width: 100%;
}
.small-screen-text{
    margin: 0;
}


@media(max-width: 950px){
    
    img{
        max-width: 100%;
    }

    .small-screen-content{
        margin: 0 20px;
    }

    .small-screen-content img{
        margin: 20px 0;
    }

}


@media(max-width: 700px){
    *{
        max-width: 100%;
    }
    .about{
        margin: 0;
    }
    .navigationBar{
        margin: 0 20px;
    }

    .small-screen-text{
        font-family: 10px;
    }
    .small-screen-text h3{
    font-size: 20px;
    font-weight: 400;
    }
    .small-screen-text h5{
        font-size: 21px;
        font-weight: 400;
        line-height: 27px;
        margin: 10px 0;
    }
    .small-screen-text p{
        font-size: 17px;
        font-weight: 400;
        line-height: 27px;
        margin: 15px 5px;
    }
}
</style>
