<template>
    <div>
        <h1 class="h1">Top Picks</h1>
        <div class="topPicksItems" >
            <div class="item" v-for="item in productsStore.topPicks" :key="item.value">
                <router-link :to="{name: 'ItemDetails', params:{value: item.value}}">
                    <img :src="item.img" />
                    
                    
                </router-link>
                <div class="ProdnPrice">
                    <h4>{{item.name}}</h4>
                    <div class="prices">
                        <h4>${{ item.price }}</h4>
                        <h4 class="prevPrice">${{ item.prevPrice }}</h4>
                    </div>
                </div>
                <h4 class="addToCart" @click="addToCart(item.value)">Add to cart 
                    <span class="div">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path></svg>
                    </span>
                </h4>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { useProductsStore, useCartStore } from '@/stores'
import { onMounted } from 'vue'

// Use stores
const productsStore = useProductsStore()
const cartStore = useCartStore()

const addToCart = (value) => {
    cartStore.addItem(value) 
};

async function fetchData() {
// Code to fetch data from another component or API
// Since you're using a separate file, you may skip the fetching logic here
// Assigning `topPicksData` directly to `myData` is sufficient
}

onMounted(fetchData)

    // console.log({alleyFaceCream})

</script>

<style scoped>
*{
    display: flex;
    flex-direction: column;
}

.h1 {
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    color: #2f4333;
    font-weight:700;
}

h4{
    margin: 0;
    font-family: Rubik;
    font-size: 22px;
    font-weight: 400;
}

.topPicksItems{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px 0;
}

.item{
    padding: 0 10px;
    max-width: 100%;
}
.item img{
    max-width: 100%;
    height: auto;
    transition: transform 0.2s;
}
.item img:hover{
    transform: scale(1.03);
}
.item img:focus{
    transform: scale(1.01);
}

.addToCart:hover{
    color: #1e1e1e;
    transform: scaleY(1.3);
}
.item a:focus{
    color: #b2b2b2;
}
.ProdnPrice{
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    color: #292929;
    font-family: Rubik;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    width: 100%;
    margin-top: 15px;
    align-items: center;
}
.prices{
    flex-direction: row;
    align-items: center;
    gap: 15px;
}

.prices h4{
    color: #2F4333;
    font-family: Cardo;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    margin: 0;
}

.prevPrice {
    position: relative;
    color: #999;
    text-decoration: line-through;
    font-size: 18px;
}

.addToCart{
    color: #2F4333;
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 12px;
    cursor: pointer;
    justify-content: center;
    width: 100%;
    padding: 8px 12px;
    background: #f8f9fa;
    border-radius: 6px;
    transition: all 0.2s ease;
    border: 1px solid #e9ecef;
    box-sizing: border-box;
}

.addToCart:hover {
    background: #2F4333;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(47, 67, 51, 0.2);
}

@media (max-width: 880px) {
    .topPicksItems{
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    .item{
        margin: 15px;
    }
    .ProdnPrice{
        margin-top: 20px;
    }
}
@media (max-width: 450px){
    .topPicksItems{
        width: 100%;
        display: flex;
        flex-direction: row;
        overflow-x:scroll;
        overflow-y: hidden;
        white-space: nowrap;
    }  
    .item{
        display: flex;
        justify-content: center;
        width: auto;
        margin: 0;
    }
    .item img{
        width: 30vh;
        height: 45vh;
    }
    .ProdnPrice{
        margin-top: 0px;
    }
    .h1{
        font-size: 2.3rem;
    }
}
</style>