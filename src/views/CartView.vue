<script setup>
import{computed, ref} from 'vue'
import NavBar from '@/components/NavBar.vue'
import { totalCartItems, popularProdData, productsData, topPicksData } from '@/pageData.js'
import { useRouter, useRoute } from 'vue-router';



// The code to sort all the items in the cart to one each and also ther total number of occurence
const cartArray =ref([]);
const cartItemsOccurence ={};

totalCartItems.value.forEach(item =>{
    if (!cartItemsOccurence[item]){
        cartItemsOccurence[item] = 1
    } else {
        cartItemsOccurence[item]++
    }
})

Object.keys(cartItemsOccurence).forEach(item =>{
    cartArray.value.push({item: item, count: cartItemsOccurence[item]})
})

//the code to get the data from the data file 

for(let i= 0; i < productsData.value.length; i++ ){
    for(let j = 0; j < cartArray.value.length; j++){
        if(cartArray.value[j].item == productsData.value[i].value){
            cartArray.value[j] = { ...cartArray.value[j], ...productsData.value[i] }
        }
    }
}  
for(let i= 0; i < topPicksData.value.length; i++ ){  
    for(let j = 0; j < cartArray.value.length; j++){
        if(cartArray.value[j].item == topPicksData.value[i].value){
            cartArray.value[j] = { ...cartArray.value[j], ...topPicksData.value[i] }
        }
    }
}
for(let i= 0; i < popularProdData.value.length; i++ ){
    for(let j = 0; j < cartArray.value.length; j++){
        if(cartArray.value[j].item == popularProdData.value[i].value){
            cartArray.value[j] = { ...cartArray.value[j], ...popularProdData.value[i] }
        }
    }
}

// const totalSum = ref(0 )


const totalPrice = computed(() => {
    if(cartArray.value){
        return cartArray.value.reduce((acc, item) => {
            return acc + item.price * item.count;
    }, 0); 
    }
  removeItem
});
const totalItems = computed(() => {
    if(cartArray.value){
        return cartArray.value.reduce((acc, item) => {
            return acc + item.count;
    }, 0); 
    }
  
});
console.log(cartArray.value[1])

const props = defineProps(['value'])


// To redirect the checkout to not found page
const router = useRouter();
const route = useRoute();

const navigateToNotFound = () => {
    router.push('/none')
}

const removeItem = (index) => {
//   cartArray.value[index].count = 0;
  // Alternatively, you can completely remove the item from the cartArray if you don't want to display it at all.
  cartArray.value.splice(index, 1);
};

</script>


<template>
    <div class="container">
        <div class="navigationBar">
            <NavBar />
        </div>
        <div class="content">
            <div class="item-true" v-if="cartArray.length">
                <div class="cart-body" v-for="(item, index) in cartArray" :key="item.index" >
                    <hr>
                    <div class="item-data">
                        <div class="left">
                            <router-link :to="{name: 'ItemDetails', params:{value: item.value}}">
                                <div class="image">
                                    <img :src="item.img" />
                                </div>
                            </router-link>
                            <div class="item-details">
                                <h3>{{ item.name }}</h3>
                                <div class="other-item-details">
                                    <h4>Clearamane</h4>
                                    <p>Size:<span class="item-size">   200 ml/3.3 fl oz</span></p>
                                    <p>Unit Price: ${{item.price}}</p>
                                </div>
                                <h3 class="item-quantity">QTY: {{ item.count }} </h3>
                            </div>
                        </div>
                        <div class="right">
                            <div class="p">
                                <p @click="removeItem(index)">x</p>
                            </div>
                            <h3>
                                ${{ (item.price * item.count).toFixed(2) }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="item-false" v-else>
                <h1>No items available in cart...</h1>
            </div>
            <hr class="bottom-hr">
            <div class="other-section">
                <div class="continue-shopping">
                    <router-link to="/products">Continue Shopping -></router-link>
                </div>
                <div class="total-final">
                    <h4>Products in cart: <span class="value"> {{ totalItems }} items</span></h4>
                    <h4>Total:  <span class="value">${{ totalPrice?.toFixed(2) }}</span> </h4>
                    <button class="checkout-button" @click="navigateToNotFound">Proceed to checkout </button>
                </div>
            </div>
        </div>
    </div>
  </template>
  

<style scoped>
.container{
    display: flex;
    align-items: start;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100%;
    margin:0 80px;
    color: #000;
    background: #F1F5F2;
    font-family: Rubik;
}
.content{
    width:100% ;
    margin-top: 40px;

}
.item-false h1{
    font-style: italic;
    font-size: 30px;
    margin:0 0 40px ;
}
.navigationBar{
    margin-right: 80px;
    color: #000;
    width: 100%;
}


hr{
    margin: 0;
    width: 100%;
}

.image{
    padding: 0;
    height: 150px;
    margin-right: 20px;
}
.image img{
    width: 150px;
    height: 150px;
    border-radius: 20px;
}
.item-data{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0;

}
.left{
    display: flex;
    width: 500px;
}
.item-details{
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
}
.item-details h3{
    margin: 0 0 10px 0;
    line-height: 1;
    font-weight: 500;
    font-size: 22px;

}
.item-details h4{
    font-size: 18px;
    font-weight: 400;
    color: #888;
    transform: scaleY(1.15);
    margin: auto 0;
}
.item-details p{
    font-size: 18px;
    font-weight: 400;
    color: #888;
    margin: auto 0;
}
.item-size{
    color: #000;
}
h3.item-quantity{
    margin: 10px 0 0 0;
    font-size: 20px;
    transform: scaleY(1.2);
}
.right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.right .p{
    margin: 0;
    border: solid 1px black;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
}
.right .p p{
    margin: 0;
}
.right h3{
    font-size: 29px;
    transform: scaleY(1.3);
    font-weight: 300;
    margin: 0;
}
.other-section{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 60px 0 ;
}
.continue-shopping{
    margin: 0;
}
.continue-shopping a{
    font-size: 24px;
    font-weight: 400;
    color: #2F4333;
    margin: 0;
}
.total-final{
    width: 350px;
    
}
.total-final h4{
    color: #888;
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    transform: scaleY(1.3);
    font-weight: 400;
    margin: 0;
}
.total-final .value{
    color: #000000;
    margin-left: 50px;
  

}
.checkout-button{
    width: 100%;
    padding: 30px;
    font-size: 23px;
    margin-top: 30px;
}

@media(max-width:800px){
    .container{
        margin: 0 20px;
    }
    .content{
        margin-top: 40px;
    }
    .item-false h1{
        font-size: 1.5rem;
        margin:-10px 0 40px ;
    }

    .left{
        height: 100px;
    }
    .image{
        height: 100px;
    }
    .image img{
        width: 100px;
        height: 100px;
    }
    .item-data{
        align-items: center;
        height: 100px;
    }
    .item-details {
        height: 100px;
    }
    .item-details h3 {
        font-size: 1rem;
        margin: 0 0 5px 0;
    }
    .item-details h4 {
        font-size: 1rem;
    }
    .item-details p {
        font-size: 1rem;
    }
    .right{
        justify-content: space-between;
        height: 100px;
    }
    .right h3{
        font-size: 1rem;
    }
    .right .p{
        width: 20px;
        height: 20px;
    }
    .right .p p{
        font-size: 0.8rem;
    }
    .continue-shopping a{
        font-size: 1.2rem;
    }
    .total-final{
        width: 250px;
    }
    .total-final h4{
        font-size: 1rem;
    }
    .checkout-button{
        margin-top: 20px;
        padding: 20px;
        font-size: 1rem;
    }
}
@media (max-width: 550px){
    .continue-shopping a{
        font-size: 1rem;
    }
    .total-final{
        width: 200px;
    }
    .total-final h4{
        font-size: 0.8rem;
    }
    .checkout-button{
        margin-top: 20px;
        padding: 20px;
        font-size: 0.8rem;
    }
}

@media (max-width: 450px){
    .item-false h1{
        font-size: 1.2rem;
        margin:-10px 0 40px ;
    }
    .image{
        margin-right: 10px;
    }
    .item-details h3 {
        font-size: 0.7rem;
    }
    .item-details h4 {
        font-size: 0.7rem;
    }
    .item-details p {
        font-size: 0.55rem;
    }
    .other-item-details{
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .right p{
        font-size: 0.7rem;
    }
    .continue-shopping a{
        font-size: 0.9rem;
    }
    .total-final{
        width: 150px;
    }
    .total-final h4{
        font-size: 0.7rem;
    }
    .total-final .value{
        margin-left: 20px;
    }
    .checkout-button{
        margin-top: 10px;
        padding: 15px;
        font-size: 0.7rem;
    }
}
@media (max-width: 350px){
    .item-false h1{
        font-size: 1rem;
        margin:-10px 0 40px ;
    }
    .right p{
        font-size: 0.6rem;
    }
    .right h3{
        font-size: 0.8rem;
    }
    .continue-shopping a{
        font-size: 0.7rem;
    }
    .total-final{
        width: 150px;
    }
    .total-final h4{
        font-size: 0.6rem;
    }
    .checkout-button{
        margin-top: 10px;
        padding: 15px 10px;
        font-size: 0.6rem;
    }
}
</style>