<template>
    <div>
        <h1 class="h1">Top Picks</h1>
        <div class="topPicksItems" >
            <div class="item" v-for="item in topPicksData" :key="item.value">
                <img :src="item.img" />
                <div class="ProdnPrice">
                    <h4>{{item.name}}</h4>
                    <div class="prices">
                        <h4>${{ item.price }}</h4>
                        <h4 class="prevPrice">${{ item.prevPrice }}</h4>
                    </div>
                </div>
                <h4 class="addToCart">Add to cart 
                    <span class="div">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path></svg>
                    </span>
                </h4>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { topPicksData } from '@/pageData.js'
import { onMounted } from 'vue'


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
    position: relative;
    flex-direction: row;
    overflow-x:scroll;
    overflow-y: hidden;
    white-space: nowrap;
}

.item{
    margin: 0 10px;
}
.item1 {
    width: 300px;
}

.item2{
    width: 300px;
}

.item3{
    width: 300px;
}

.item4{
    width: 300px;
}
.ProdnPrice{
    flex-direction: column;
    text-align: left;
    color: #292929;
    font-family: Rubik;
    font-size: 20px;
    font-style: normal;
    font-weight: lighter;
    margin: 10px 0;
}
.prices{
    flex-direction: row;
    margin: 10px 0;
}

.prices h4{
    color: #2F4333;
    font-family: Cardo;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    margin-right: 20px;
}


.prevPrice {
    position: relative;
    margin-left: 70px;

}
.prevPrice:before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 0;
    border-bottom: 1px solid #111;
    width: 100%;
}

.addToCart{
    color: #292929;
    font-family: Rubik;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
}
</style>../../pageData.js