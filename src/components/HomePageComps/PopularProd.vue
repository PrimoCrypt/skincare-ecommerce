<template>
    <div>
        <h1 class="h1">Popular Products</h1>
        <div class="p_productItems">
            <div class="item"  v-for="item in popularProdData" :key="item.value">
                <img :src="item.img" />
                <div class="ProdnPrice">
                    <h4>{{item.name}}</h4>
                    <h4 class="prod-price">${{ item.price }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { popularProdData } from '../../pageData.js'
import { onMounted } from 'vue'


    // const { popularProdData } = pageData
    async function fetchData() {
    // Code to fetch data from another component or API
    // Since you're using a separate file, you may skip the fetching logic here
    // Assigning `topPicksData` directly to `myData` is sufficient
    }

    onMounted(fetchData)

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

.p_productItems{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Creates four equal-width columns */
    gap: 10px;
}

.item{
    padding: 0 10px;
    max-width: 100%;
}

.item img{
    max-width: 100%;
    height: auto;
}
/* .item1 {

}

.item2{

}

.item3{

}

.item4{

} */
.ProdnPrice{
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    color: #292929;
    font-family: Rubik;
    font-size: 18px;
    font-style: normal;
    font-weight: 600
}

 @media (max-width: 880px) {
    .p_productItems{
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
    .p_productItems{
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
        width: 40vh;
        height: 50vh;
    }
    .prod-price{
        margin-left: 20px;
    }
}
</style>../../pageData.js