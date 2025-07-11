<template>
    <div class="product-card" :class="{ 'product-card--loading': loading }">
        <div v-if="loading" class="product-card__skeleton">
            <LoadingSkeleton type="product-card" />
        </div>
        
        <div v-else class="product-card__content">
            <router-link 
                :to="{ name: 'ItemDetails', params: { value: product.value }}" 
                class="product-card__image-link"
            >
                <img 
                    :src="product.img" 
                    :alt="product.name"
                    class="product-card__image"
                    @load="imageLoaded = true"
                    @error="imageError = true"
                />
                <div v-if="!imageLoaded && !imageError" class="product-card__image-placeholder">
                    <LoadingSkeleton type="text" width="60%" />
                </div>
            </router-link>
            
            <div class="product-card__info">
                <h4 class="product-card__title">{{ product.name }}</h4>
                
                <div class="product-card__pricing">
                    <span class="product-card__price">${{ product.price.toFixed(2) }}</span>
                    <span v-if="product.prevPrice" class="product-card__prev-price">
                        ${{ product.prevPrice.toFixed(2) }}
                    </span>
                </div>
                
                <div class="product-card__actions">
                    <BaseButton 
                        variant="primary" 
                        size="small"
                        :loading="addingToCart"
                        @click="handleAddToCart"
                        class="product-card__add-btn"
                    >
                        <template v-if="!addingToCart">
                            Add to Cart
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path>
                            </svg>
                        </template>
                    </BaseButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores'
import BaseButton from './BaseButton.vue'
import LoadingSkeleton from './LoadingSkeleton.vue'

const props = defineProps({
    product: {
        type: Object,
        required: true
    },
    loading: {
        type: Boolean,
        default: false
    }
})

const cartStore = useCartStore()
const imageLoaded = ref(false)
const imageError = ref(false)
const addingToCart = ref(false)

const handleAddToCart = async () => {
    if (addingToCart.value) return
    
    addingToCart.value = true
    
    try {
        // Simulate a small delay for better UX
        await new Promise(resolve => setTimeout(resolve, 300))
        cartStore.addItem(props.product.value)
        
        // Show success feedback (you could add a toast notification here)
        console.log('Added to cart:', props.product.name)
    } catch (error) {
        console.error('Error adding to cart:', error)
    } finally {
        addingToCart.value = false
    }
}
</script>

<style scoped>
.product-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    max-width: 320px;
    width: 100%;
    height: 480px;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.product-card--loading {
    pointer-events: none;
}

.product-card__content {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.product-card__image-link {
    display: block;
    position: relative;
    overflow: hidden;
    aspect-ratio: 1;
    flex-shrink: 0;
}

.product-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-card__image-link:hover .product-card__image {
    transform: scale(1.05);
}

.product-card__image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
}

.product-card__info {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
}

.product-card__title {
    margin: 0 0 8px 0;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 42px;
}

.product-card__pricing {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    height: 24px;
}

.product-card__price {
    font-size: 18px;
    font-weight: 700;
    color: #2F4333;
}

.product-card__prev-price {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
}

.product-card__actions {
    margin-top: auto;
    height: 44px;
    display: flex;
    align-items: center;
}

.product-card__add-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
}

.product-card__add-btn svg {
    transition: transform 0.2s ease;
}

.product-card__add-btn:hover svg {
    transform: translateX(2px);
}

/* Loading state */
.product-card__skeleton {
    height: 100%;
}

/* Responsive */
@media (max-width: 768px) {
    .product-card {
        max-width: 280px;
        height: 420px;
    }
    
    .product-card__content {
        height: 100%;
    }
    
    .product-card__info {
        padding: 12px;
    }
    
    .product-card__title {
        font-size: 14px;
        height: 38px;
    }
    
    .product-card__price {
        font-size: 16px;
    }
    
    .product-card__prev-price {
        font-size: 12px;
    }
    
    .product-card__actions {
        height: 40px;
    }
}

@media (max-width: 480px) {
    .product-card {
        max-width: 240px;
        height: 380px;
    }
    
    .product-card__content {
        height: 100%;
    }
    
    .product-card__title {
        height: 34px;
    }
    
    .product-card__actions {
        height: 36px;
    }
}

/* Animation for new cards */
.product-card {
    animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style> 