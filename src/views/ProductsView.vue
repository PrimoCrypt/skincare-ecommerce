<template>
    <div class="productsPage">
        <div class="navigationBar">
            <NavBar />
        </div>
        <div class="container">
            <h1 class="title">OUR COLLECTION</h1>
            <div class="content">
                <div class="sort">
                    <h3>Sort by</h3>
                    <h5>New Releases</h5>   
                    <h5>Price : High to Low</h5>
                    <h5>Price : Low to High</h5>
                    <div class="categorySort">
                        <h5>Category</h5>
                        <label>
                            <input type="checkbox" v-model="isChecked1" @change="handleCheckboxChange1" />
                            {{ label1 }}
                        </label>
                        <label>
                            <input type="checkbox" v-model="isChecked2" @change="handleCheckboxChange2" />
                            {{ label2 }}
                        </label>
                        <label>
                            <input type="checkbox" v-model="isChecked3" @change="handleCheckboxChange3" />
                            {{ label3 }}
                        </label>
                        <label>
                            <input type="checkbox" v-model="isChecked4" @change="handleCheckboxChange4" />
                            {{ label4 }}
                        </label>
                    </div>
                    <div class="priceSort">
                        <h5>Price</h5>
                        <p>All</p>
                        <p>Below $100.00</p>
                        <p>$100.00 - $150.00</p>
                        <p>$150.00 - $200.00</p>
                        <p>Above $200.00</p>
                    </div>
                </div>
                <div class="product">
                    <div class="item" v-for="item in productsData" :key="item.value">
                        <router-link :to="{name: 'ItemDetails', params:{value: item.value}}">
                            <img :src="item.img" />
                            <div class="">
                                <h4>{{item.name}}</h4>
                                <div class="prices">
                                    <h4>${{ item.price }}</h4>
                                </div>
                            </div>
                            <h4 class="addToCart" @click="addToCart(item.value)">Add to cart 
                                <span class="div">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path></svg>
                                </span>
                            </h4>
                        </router-link>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { productsData , updateCartItemsCount } from '@/pageData.js';
import { ref, onMounted } from 'vue';


    // const emits = defineEmits(['add-to-cart']);
    
    // const addToCart = ()=>{
    //     emits('add-to-cart');
    // }

    const addToCart = (value) => {
        updateCartItemsCount(value) 
    };



    const label1 = 'Body scrubs';
    const label2 = 'Lip care'; 
    const label3 = 'Glow recipe';
    const label4 = 'Moisturizers'

    const isChecked1 = ref(false); 
    const isChecked2 = ref(false); 
    const isChecked3 = ref(false); 
    const isChecked4 = ref(false); 

    const handleCheckboxChange1 = () => {
        if (isChecked1.value) {
            myFunction1(); // Call the function for checkbox 1
        }
    };
    const handleCheckboxChange2 = () => {
        if (isChecked2.value) {
            myFunction2(); // Call the function for checkbox 2
        }
    };
    const handleCheckboxChange3 = () => {
        if (isChecked3.value) {
            myFunction3(); // Call the function for checkbox 3
        }
    };
    const handleCheckboxChange4 = () => {
        if (isChecked4.value) {
            myFunction4(); // Call the function for checkbox 3
        }
    };

    const myFunction1 = () => {
    // Your function code for checkbox 1 goes here
    };
    const myFunction2 = () => {
    // Your function code for checkbox 2 goes here
    };
    const myFunction3 = () => {
    // Your function code for checkbox 3 goes here
    };
    const myFunction4 = () => {
    // Your function code for checkbox 3 goes here
    
    };


    async function fetchData() {
    // Code to fetch data from another component or API
    // Since you're using a separate file, you may skip the fetching logic here
    // Assigning `topPicksData` directly to `myData` is sufficient
    }

    onMounted(fetchData)

</script>

<style scoped>
.productsPage{
    color: #000;
}
.navigationBar{
    margin: 0 80px;
}
.container{
    margin: 0 80px;
}
.content{
    display: flex;
}

.sort{
    width: 30vw;
    text-align: left;
}
.categorySort, .priceSort{
    display: flex;
    flex-direction: column;
}

.addToCart{
    cursor: pointer;
}

.product{
    width: 100%;
    display: grid;
    text-align: left;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}
.priceSort p{
    color: black;
    text-decoration: none;
    cursor: pointer;
}
.priceSort p:active{
    text-decoration: underline;
}
@media(max-width: 700px){
    .navigationBar{
        margin: 0 20px;
    }
    .container{
        margin: 0 20px;
    }
}
</style>