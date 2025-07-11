<template>
    <div class="productsPage">
        <div class="navigationBar">
            <NavBar />
        </div>
        <div class="container">
            <h1 class="title">OUR COLLECTION</h1>
            
            <!-- Search Bar -->
            <div class="search-container">
                <input 
                    type="text" 
                    v-model="searchQuery" 
                    placeholder="Search products..."
                    class="search-input"
                />
                <BaseButton 
                    v-if="searchQuery" 
                    variant="danger" 
                    size="small"
                    @click="clearSearch"
                >
                    Clear
                </BaseButton>
            </div>
            
            <div class="content">
                <div class="filter" v-if="!isSmallScreen">
                    <h3>Sort by</h3>
                    <h5 @click="setSortBy('new-releases')" :class="{ active: sortBy === 'new-releases' }">New Releases</h5>   
                    <h5 @click="setSortBy('price-high-low')" :class="{ active: sortBy === 'price-high-low' }">Price : High to Low</h5>
                    <h5 @click="setSortBy('price-low-high')" :class="{ active: sortBy === 'price-low-high' }">Price : Low to High</h5>
                    <h5 @click="setSortBy('name-a-z')" :class="{ active: sortBy === 'name-a-z' }">Name : A to Z</h5>
                    <h5 @click="setSortBy('name-z-a')" :class="{ active: sortBy === 'name-z-a' }">Name : Z to A</h5>
                    <div class="categorySort">
                        <h5>Category</h5>
                        <label v-for="category in productsStore.getCategories" :key="category">
                            <input 
                                type="checkbox" 
                                :checked="selectedCategories.includes(category)"
                                @change="toggleCategory(category)" 
                            />
                            {{ category }}
                        </label>
                    </div>
                    <div class="priceSort">
                        <h5>Price</h5>
                        <p @click="setPriceRange('all')" :class="{ active: priceRange === 'all' }">All</p>
                        <p @click="setPriceRange('below-100')" :class="{ active: priceRange === 'below-100' }">Below $100.00</p>
                        <p @click="setPriceRange('100-150')" :class="{ active: priceRange === '100-150' }">$100.00 - $150.00</p>
                        <p @click="setPriceRange('150-200')" :class="{ active: priceRange === '150-200' }">$150.00 - $200.00</p>
                        <p @click="setPriceRange('above-200')" :class="{ active: priceRange === 'above-200' }">Above $200.00</p>
                    </div>
                </div>
                
                <div v-else>
                    <div class="ss-filter" v-if="!isFilterOpen" @click="isFilterOpen = true">
                        <h5>Filter ></h5>
                    </div>
                
                    <div class="filter-window" v-if="isFilterOpen">
                        <div class="filter-content">
                            <div class="filter-content-details">
                                <h3>Sort by</h3>
                                <h5 @click="setSortBy('new-releases')" :class="{ active: sortBy === 'new-releases' }">New Releases</h5>   
                                <h5 @click="setSortBy('price-high-low')" :class="{ active: sortBy === 'price-high-low' }">Price : High to Low</h5>
                                <h5 @click="setSortBy('price-low-high')" :class="{ active: sortBy === 'price-low-high' }">Price : Low to High</h5>
                                <h5 @click="setSortBy('name-a-z')" :class="{ active: sortBy === 'name-a-z' }">Name : A to Z</h5>
                                <h5 @click="setSortBy('name-z-a')" :class="{ active: sortBy === 'name-z-a' }">Name : Z to A</h5>
                                <div class="categorySort">
                                    <h5>Category</h5>
                                    <div class="category-label">
                                        <label v-for="category in productsStore.getCategories" :key="category">
                                            <input 
                                                type="checkbox" 
                                                :checked="selectedCategories.includes(category)"
                                                @change="toggleCategory(category)" 
                                            />
                                            {{ category }}
                                        </label>
                                    </div>
                                </div>
                                <div class="priceSort">
                                    <h5>Price</h5>
                                    <p @click="setPriceRange('all')" :class="{ active: priceRange === 'all' }">All</p>
                                    <p @click="setPriceRange('below-100')" :class="{ active: priceRange === 'below-100' }">Below $100.00</p>
                                    <p @click="setPriceRange('100-150')" :class="{ active: priceRange === '100-150' }">$100.00 - $150.00</p>
                                    <p @click="setPriceRange('150-200')" :class="{ active: priceRange === '150-200' }">$150.00 - $200.00</p>
                                    <p @click="setPriceRange('above-200')" :class="{ active: priceRange === 'above-200' }">Above $200.00</p>
                                </div>
                            </div>
                            <button class="close-filter" @click="isFilterOpen = false">×</button>
                        </div>
                    </div>
                </div>
                
                <div class="products-grid">
                    <LoadingSkeleton 
                        v-if="isLoading" 
                        type="product-list" 
                        :count="8" 
                    />
                    
                    <div v-else-if="filteredProducts.length === 0" class="no-results">
                        <h3>No products found</h3>
                        <p>Try adjusting your search or filters</p>
                        <BaseButton 
                            variant="outline" 
                            @click="clearAllFilters"
                        >
                            Clear All Filters
                        </BaseButton>
                    </div>
                    
                    <ProductCard 
                        v-else
                        v-for="item in filteredProducts" 
                        :key="item.value"
                        :product="item"
                        @add-to-cart="handleAddToCart"
                    />
                </div>
            </div>
        </div>
        
        <CartAnimation 
            ref="cartAnimationRef"
            :product-image="lastAddedProduct?.img"
            :product-name="lastAddedProduct?.name"
            :start-position="animationStartPos"
            :end-position="animationEndPos"
        />
    </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import BaseButton from '@/components/BaseButton.vue'
import ProductCard from '@/components/ProductCard.vue'
import LoadingSkeleton from '@/components/LoadingSkeleton.vue'
import CartAnimation from '@/components/CartAnimation.vue'
import { useProductsStore, useCartStore } from '@/stores'
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

    const productsStore = useProductsStore()
    const cartStore = useCartStore()
    
    const searchQuery = ref('')
    const isFilterOpen = ref(false)
    const selectedCategories = ref([])
    const priceRange = ref('all')
    const sortBy = ref('default')
    const isLoading = ref(false)
    
    const cartAnimationRef = ref(null)
    const lastAddedProduct = ref(null)
    const animationStartPos = ref({ x: 0, y: 0 })
    const animationEndPos = ref({ x: 0, y: 0 })

    const handleAddToCart = async (product, event) => {
        const button = event?.target?.closest('.product-card__add-btn')
        if (button) {
            const rect = button.getBoundingClientRect()
            animationStartPos.value = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            }
        }
        
        const cartIcon = document.querySelector('.cart-icon')
        if (cartIcon) {
            const rect = cartIcon.getBoundingClientRect()
            animationEndPos.value = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            }
        }
        
        lastAddedProduct.value = product
        cartStore.addItem(product.value)
        
        await nextTick()
        if (cartAnimationRef.value) {
            cartAnimationRef.value.startAnimation()
        }
    }

const clearAllFilters = () => {
    searchQuery.value = ''
    selectedCategories.value = []
    priceRange.value = 'all'
    sortBy.value = 'default'
}





    // Search and filter functions
    const clearSearch = () => {
        searchQuery.value = ''
    }
    
    const toggleCategory = (category) => {
        const index = selectedCategories.value.indexOf(category)
        if (index > -1) {
            selectedCategories.value.splice(index, 1)
        } else {
            selectedCategories.value.push(category)
        }
    }
    
    const setPriceRange = (range) => {
        priceRange.value = range
    }
    
    const setSortBy = (sort) => {
        sortBy.value = sort
    }
    
    const filteredProducts = computed(() => {
        let products = productsStore.allProducts
        
        if (searchQuery.value.trim()) {
            products = productsStore.searchProducts(searchQuery.value.trim())
        }
        
        if (selectedCategories.value.length > 0) {
            products = products.filter(product => 
                selectedCategories.value.includes(product.category)
            )
        }
        
        if (priceRange.value !== 'all') {
            const [min, max] = priceRange.value.split('-').map(Number)
            products = products.filter(product => {
                if (priceRange.value === 'below-100') {
                    return product.price < 100
                } else if (priceRange.value === '100-150') {
                    return product.price >= 100 && product.price <= 150
                } else if (priceRange.value === '150-200') {
                    return product.price >= 150 && product.price <= 200
                } else if (priceRange.value === 'above-200') {
                    return product.price > 200
                }
                return true
            })
        }
        
        if (sortBy.value !== 'default') {
            products = [...products].sort((a, b) => {
                switch (sortBy.value) {
                    case 'new-releases':
                        return b.value - a.value
                    case 'price-high-low':
                        return b.price - a.price
                    case 'price-low-high':
                        return a.price - b.price
                    case 'name-a-z':
                        return a.name.localeCompare(b.name)
                    case 'name-z-a':
                        return b.name.localeCompare(a.name)
                    default:
                        return 0
                }
            })
        }
        
        return products
    })


    async function fetchData() {
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

/* Search styles */
.search-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
}

.search-input {
    flex: 1;
    max-width: 400px;
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
    background-color: white;
    color: #333;
}

.search-input:focus {
    border-color: #2F4333;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(47, 67, 51, 0.1);
    transform: translateY(-1px);
}

.search-input::placeholder {
    color: #999;
}

.clear-search {
    padding: 8px 16px;
    background: #ff4444;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}

.clear-search:hover {
    background: #cc0000;
}

/* Filter styles */
.priceSort p {
    color: black;
    text-decoration: none;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.priceSort p:hover {
    background-color: rgba(47, 67, 51, 0.1);
    color: #2F4333;
    transform: translateX(4px);
}

.priceSort p.active,
.filter h5.active {
    background-color: #2F4333;
    color: white;
}

.filter h5 {
    color: black;
    text-decoration: none;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s;
    margin: 4px 0;
}

.filter h5:hover {
    background-color: rgba(47, 67, 51, 0.1);
    color: #2F4333;
    transform: translateX(4px);
}

.categorySort label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 8px 0;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.categorySort input[type="checkbox"] {
    background-color: white;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #2F4333;
}

.categorySort label:hover {
    background-color: rgba(47, 67, 51, 0.1);
    color: #2F4333;
    transform: translateX(4px);
}

.no-results {
    grid-column: 1 / -1;
    text-align: center;
    padding: 40px;
    color: #666;
}

.no-results h3 {
    margin-bottom: 10px;
    color: #333;
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

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    margin-left: 40px;
    width: 100%;
    justify-items: center;
    height: fit-content;
}

.product {
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
    .products-grid {
        margin-left: 0;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        justify-items: center;
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
    .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
        justify-items: center;
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