<template>
    <div class="container">
        <div class="navigationBar">
            <NavBar />
        </div>
        <div class="content">
            <div class="item-content-main">
                <div class="item-image">
                    <img :src="item.img">
                </div>
                <div class="item-details">
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
            <div class="other-content">
                <div class="quantity">
                    <div class="quantity-h2">
                        <h2>QTY: {{ cartItemValue.length }}</h2>
                    </div>
                </div>
                <div class="addToCart" @click="addToCart(item.value),displayConsole()" >
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
import {ref, watch, onMounted, nextTick} from 'vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { productsData , topPicksData , popularProdData, totalCartItems, updateCartItemsCount } from '@/pageData.js';

const addToCart = (value) => {
    updateCartItemsCount(value) 
};

const item = ref(null)

for(let i= 0; i < productsData.value.length; i++ ){
    if(props.value == productsData.value[i].value){
        item.value = productsData.value[i]
    }
}  
for(let i= 0; i < topPicksData.value.length; i++ ){  
    if(props.value == topPicksData.value[i].value){
        item.value = topPicksData.value[i]
    }
}
for(let i= 0; i < popularProdData.value.length; i++ ){
    if(props.value == popularProdData.value[i].value){
        item.value = popularProdData.value[i]
    }
}

const cartItemValue = ref(null)

const filterItemValue = (totalCartItems, certainValue)=>{
    return totalCartItems.filter(item => item === certainValue )
};
cartItemValue.value = filterItemValue(totalCartItems.value, item.value.value);

onMounted(() => {
    const filterItemValue = (totalCartItems, certainValue)=>{
    return totalCartItems.filter(item => item === certainValue )
};
  // Initialize cartItemValue with the filtered value when the page loads
  cartItemValue.value = filterItemValue(totalCartItems.value, item.value.value);
})



const displayConsole = ()=>{
    console.log('The console is working')
//     console.log(cartItemValue.value)
//     console.log(item.value)
//     console.log(totalCartItems.value)
//     nextTick(() => {
//     console.log('After DOM update:', cartItemValue.value);
// });
};

watch([totalCartItems.value], ([newTotalCartItems]) => {
  cartItemValue.value = filterItemValue(newTotalCartItems, item.value.value);
})

const props = defineProps(['value']);
</script> 


<style scoped>
.container{
    display: flex;
    align-items: start;
    flex-direction: column;
    min-height: 100vh;
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
    width: 100%}
.item-content-main{
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
}
.item-image{
    width: 50%;
    height: 600px;
}
.item-image img{
    width: 80%;
    height: 600px;
    border-radius: 20px;
}
.item-details{
    font-family: Cardo;
    width: 50%;
    text-align: left;
}
.price{
    font-size: 30px;
}
.section2{
    font-family: Rubik;
    width: 60%;
}
.section3{
    font-family: Rubik;
    width: 60%;
}
.other-content{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 30px 0 0 0;

}
.quantity{
    width: 50%;
    display: flex;
    justify-content: center;
}
.quantity-h2{
    border: 2px black solid;
    border-radius: 20px;
    width: 80%;
    height: 80px;
}
.addToCart{
    width: 50%;
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
</style>
