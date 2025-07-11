<template>
    <div>
        <h1 class="h1">Popular Products</h1>
        <div class="p_productItems">
            <div class="item"  v-for="item in productsStore.popularProducts" :key="item.value">
                <router-link :to="{name: 'ItemDetails', params:{value: item.value, image: item.img, name: item.name, price: item.price}}">
                    <img :src="item.img" />
                    
                </router-link>
                <div class="ProdnPrice">
                    <h4>{{item.name}}</h4>
                    <h4 class="prod-price">${{ item.price }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductsStore } from '@/stores'
import { onMounted } from 'vue'


    // Use stores
    const productsStore = useProductsStore()

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
.item img:hover{
    transform: scale(1.03);
}
.item img:focus{
    transform: scale(1.01);
}

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
        width: 30vh;
        height: 45vh;
    }
    .ProdnPrice{
        margin-top: 0px;
    }
    .prod-price{
        margin-left: 20px;
    }
    
    .h1{
        font-size: 2.3rem;
    }
}

</style>../../pageData.js