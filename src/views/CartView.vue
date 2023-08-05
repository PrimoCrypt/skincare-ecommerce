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
            <div class="cart-body" v-for="(item, index) in cartArray" :key="item.index">
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
                            <h4>Clearamane</h4>
                            <p>Size:<span class="item-size">   200 ml/3.3 fl oz</span></p>
                            <p>Unit Price: ${{item.price}}</p>
                            <h3 class="item-quantity">QTY: {{ item.count }} </h3>
                        </div>
                    </div>
                    <div class="right">
                    <p @click="removeItem(index)">Remove</p>
                    <h3>
                        ${{ (item.price * item.count).toFixed(2) }}
                    </h3>
                    </div>
                </div>
            </div>
            <hr>
            <div class="other-section">
            <div class="continue-shopping">
                <router-link to="/products">Continue Shopping</router-link>
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
    font-family: Rubik;
}
.content{
    width:100% ;
}
.navigationBar{
    margin-right: 80px;
    color: #000;
    width: 100%;
}
.cart-body{
    width: 100%;
    height: 200px;
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
.right p{
    margin: 0;
    text-align: left;
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
.continue-shopping a{
    font-size: 24px;
    font-weight: 400;
    color: #2F4333;
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
}
.total-final .value{
    color: #000000;
    margin-left: 50px;
  

}
.checkout-button{
    width: 100%;
    padding: 30px;
    font-size: 23px;
}
</style>