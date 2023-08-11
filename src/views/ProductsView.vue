<template>
    <div class="productsPage">
        <div class="navigationBar">
            <NavBar />
        </div>
        <div class="container">
            <h1 class="title">OUR COLLECTION</h1>
            <div class="content">
                <div class="filter" v-if="!isSmallScreen">
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
                <div v-else>
                    <!-- The "Filter" option -->
                    <div class="ss-filter" v-if="!isFilterOpen" @click="isFilterOpen = true">
                        <h5>Filter ></h5>
                    </div>
                
                    <!-- The filter window/modal -->
                    <div class="filter-window" v-if="isFilterOpen">
                        <!-- Content of your filter window here -->
                        <div class="filter-content">
                            <div class="filter-content-details">
                                <h3>Sort by</h3>
                                <h5>New Releases</h5>   
                                <h5>Price : High to Low</h5>
                                <h5>Price : Low to High</h5>
                                <div class="categorySort">
                                    <h5>Category</h5>
                                    <div class="category-label">
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
                            <button class="close-filter" @click="isFilterOpen = false">×</button>
                        </div>
                        <!-- Close button to close the filter window -->
                        
                    </div>
                
                    <!-- Your product items -->
                    <div class="product">
                        <!-- ... your product items loop ... -->
                    </div>
                </div>
                <div class="product">
                    <div class="item" v-for="item in productsData" :key="item.value">
                        <router-link :to="{name: 'ItemDetails', params:{value: item.value}}">
                            <img :src="item.img" />
                        </router-link>
                        <div class="item-bottom">
                            <div class="item-details">
                                <h4>{{item.name}}</h4>
                                <div class="prices">
                                    <h4>${{ item.price }}</h4>
                                </div>
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
        </div>
    </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { productsData , updateCartItemsCount } from '@/pageData.js';
import { ref, onMounted, onUnmounted } from 'vue';

    const isFilterOpen = ref(false)
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


</script>

<style scoped>

.productsPage{
    color: #000;
    width: 100%;
}
.navigationBar{
    margin: 0 80px;
}
.container{
    margin: 0 80px;
    max-width: 100%;
}
.content{
    display: flex;
    max-width: 100%;
    width: 100%;
}

.title{
    font-size: 34px;
}
.filter{
    width: auto;
    text-align: left;
}
/* Style for the filter window overlay */
.filter-window {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Make sure the filter window is above other content */
  }
  
  /* Style for the filter content within the window */
  .filter-content {
    position: relative;
    max-width: 80%;
    max-height: auto;
    width: 100%;
    padding: 0;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  }
  .filter-content-details{
    padding: 20px;
  }
  
  /* Style for the close button */
  .close-filter {
    position: absolute;
    color: black;
    top: 0;
    right: 80px;
    background: none;
    border: none;
    font-size: 50px;
    cursor: pointer;
    padding: 0;
  }
  
.categorySort, .priceSort{
    display: flex;
    flex-direction: column;
}

.addToCart{
    cursor: pointer;
}
.addToCart:hover{
    color: #1e1e1e;
    transform: scaleZ(1.2);
}

.product{
    max-width: 100%;
    width: auto;
    display: grid;
    text-align: left;
    grid-template-columns: repeat(2, calc(50% - 10px));
    gap: 20px;
    margin-left: 40px;
}
.item{
    max-width: 100%;
    box-sizing: content-box;
}

.item img{
    width: 100%;
}

.item a{
    color: #000;
}
.item img:hover{
    transform: scale(1.03);
}
.item img:focus{
    transform: scale(1.01);
}

.item a:hover{
    color: #424242;
}
.item a:focus{
    color: #b2b2b2;
}
.item h4{
    margin: 5px 0;   
}
.item .addToCart{
    margin-top: 10px;
}
.priceSort p{
    color: black;
    text-decoration: none;
    cursor: pointer;
}
.priceSort p:active{
    text-decoration: underline;
}
@media(max-width: 800px){
    .content{
        flex-direction: column;
    }
    .product{
        margin: 0;
    }
    .categorySort{
        display: flex;
        align-items: center;
    }
    .category-label{
        display: flex;
        flex-direction: column;
        align-items: start;
    }
}
@media(max-width: 700px){
    
    .navigationBar{
        margin: 0 20px;
    }
    .container{
        margin: 0 20px;
    }
    .close-filter{
        right: 10px;
        top: 10px;
        padding: 0;
        margin: 0;
        font-size: 50px;
    }
}

@media(max-width: 600px) and (max-height: 900px){
    .title{
        font-size: 1.5rem;
        margin-top: 0;
        margin-bottom: 10px;
    }
    .ss-filter h5{
        margin-top: 0;
    }
    .filter-content{
        max-height: 70%;
        overflow: scroll;
    }
    .filter-content::-webkit-scrollbar{
        width: 10px;
    }
    .filter-content::-webkit-scrollbar-thumb{
        background-color: #888;
        border-radius: 10px;
    }
    .filter-content::-webkit-scrollbar-thumb:hover{
        background-color: #666;
    }
    .filter-content::-webkit-scrollbar-thumb:active{
        background-color: #444;
    }
    .filter-content h3{
        margin-top: 0;
    }
    .close-filter{
        top: 10px;
        right: 20px;
        font-size: 30px;
        padding: 0;
        margin: 0;
    }
}

</style>    