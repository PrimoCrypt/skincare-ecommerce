<template>
    <div class="container">
        <div class="navigationBar">
            <NavBar />
        </div>
        <div class="content">
            <div class="item-content-main" v-if="!isSmallScreen">
                <div class="item-image">
                    <img :src="item.img">
                </div>
                <div class="item-details" >
                    <div class="section1">
                        <h2>{{ item.name }}</h2>
                        <p class="price">${{ item.price }}</p>
                    </div>
                    <hr>
                    <div class="section2">
                        <h3>Notes</h3>
                        <p>{{ item.notes }}</p>
                    </div>
                    <hr>
                    <div class="section3">
                        <h3>Description</h3>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
            <div class="item-content-main ss-main" v-else>
                <div class="ss-section1">
                    <div class="item-image">
                        <img :src="item.img">
                    </div>
                    <div class="item-details" >
                        <div class="section1">
                            <h2>{{ item.name }}</h2>
                            <p class="price">${{ item.price }}</p>
                        </div>
                        <hr>
                        <div class="section2">
                            <h3>Notes</h3>
                            <p>{{ item.notes }}</p>
                        </div>
                    </div>
                </div>
                <div class="descripton-main">
                    <div class="section3 ss-section2">
                        <h3>Description</h3>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
                
            </div>
            <div class="other-content">
                <div class="quantity">
                    <div class="quantity-h2">
                        <h2>QTY: {{ cartItemValue.length }}</h2>
                    </div>
                </div>
                <div class="addToCart" @click="addToCart(item.value)" >
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div> 
        
    </div>
    <div class="footer">
        <Footer/>
    </div>
</template>

<script setup>
import {ref, computed, watch, onMounted, onUnmounted, nextTick} from 'vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { useProductsStore, useCartStore } from '@/stores'

// Use stores
const productsStore = useProductsStore()
const cartStore = useCartStore()

const addToCart = (value) => {
    cartStore.addItem(value) 
};

const item = computed(() => {
    return productsStore.getProductByValue(props.value)
})



// To watch the items added to cart and update the cart value
const cartItemValue = computed(() => {
    return cartStore.cartItems.filter(item => item === props.value)
})






// TO handke responsiveness when the screen size changes
const isSmallScreen = ref(window.innerWidth < 800);

    const handleResize = () => {
        isSmallScreen.value = window.innerWidth < 800;
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });

const props = defineProps(['value']);
</script> 


<style scoped>
.container{
    display: flex;
    align-items: start;
    flex-direction: column;
    height: auto;
    max-width: 100%;
    margin:0 80px;
    color: #000;
}
.navigationBar{
    margin-right: 80px;
    color: #000;
    width: 100%;
}
.content{
    width: 100%;
    height: auto;
    margin-top: 10px;
}
.item-content-main{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
}
.item-image{
    width: 40%;
    max-height: 100%;  
    display: flex;
    justify-content: start; 
}
.item-image img{
    width: 90%;
    min-height: 400px;
    max-height: 100%;
    border-radius: 20px;
}
.item-details{
    font-family: Cardo;
    width: 60%;
    max-width: 450px;
    text-align: left;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
}
.item-details h2, .item-details h3{
    margin: 0;
}
.item-details p{
    margin: 10px 0;
}
.price{
    font-size: 30px;
    margin: 0;
}
.section1 .price{
    padding-top: 20px;
    transform: scaleY(1.2);
    font-size: 32px;
}
.section1 h2{
    font-size: 32px;
}
.section2 h3    {
    font-size: 28px;
    font-weight: 600;
    padding-bottom: 20px;
}
.section2{
    font-family: Rubik;
    width: 60%;
    margin: 0;
}
.section3{
    font-family: Rubik;
    width: 100%;
    margin: 0;
}
.other-content{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 30px 0 0 0;

}
.quantity{
    width: 40%;
    display: flex;
    justify-content: start;
}
.quantity-h2{
    border: 2px black solid;
    border-radius: 20px;
    width: 90%;
    height: 80px;
}
.addToCart{
    width: 30%;
    height: 80px;
    
}
.addToCart button{
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
.footer{
    margin-top: 80px;
    width: 100%;
}
.ss-main{
    display: flex;
    flex-direction: column;
}
.ss-section1{
    display: flex;
    flex-direction: row;
}
.ss-section2{
    text-align: left;
    width: 75%;
}
@media (max-width: 900px) {
    p.price{
        margin: 0;
    }
    .item-details p{
        margin: 0;
    }
}
@media (max-width: 800px) {
   .other-content{
    width: 100%;
    justify-content: space-between;
   }
   .other-content .quantity{
    width: 100%;
    margin-right: 20px;
   }
   .other-content .quantity-h2{
    width: 100%;
    
   }
   .other-content .addToCart{
    width: 100%;
   }

}
@media (max-width: 700px) {
    .container{
        margin: 0 20px;
    }
  
    p.price{
        margin: 0;
    }

    .item-image{
        width: 50%;
    }
    .item-details{
        width: 50%;
        justify-content: start;
    }
    .section2{
        width: 80%;
    }

}
@media (max-width: 600px) {
    .ss-main{
        align-items: center;
    }
    .ss-section1{
        flex-direction: column;
        align-items: center;
    }
    .ss-section2{
        width: 90%;
    }
    .ss-section2 p{
        width: 80%;
    }
    .item-image{
        width: 90%;
        justify-content: center;
    }
    .item-details{
        margin-top: 30px;
        width: 90%;
    }
    .section1{
        display: flex;
        justify-content: space-between;
    }
    .section1 .price{
        padding: 0;
    }
    .descripton-main{
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 450px;
    }
}
@media (max-width: 450px){
    .section1{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }
    .ss-section2 p{
        width: 100%;
        font-size: 14px;
        margin: 0;
    }
    .ss-section2 h3{
        font-size: 18px;
        margin-bottom: 0;
    }
    .section2{
        width: 100%;
    }
    
    .section2 h3{
        font-size: 18px;
        padding: 0;
    }
    .section2 p{
        font-size: 14px;
    }
}
@media (min-height: 600px) and (min-width: 800px) {
    .item-content-main{
        max-height: 500px;
    }
}
@media (min-width: 1300px) {
    .item-details{
        width: 450px;
    }
}
</style>
