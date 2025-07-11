<template>
    <div class="skeleton-container" :class="type">
        <div v-if="type === 'product-card'" class="skeleton-product-card">
            <div class="skeleton-image"></div>
            <div class="skeleton-content">
                <div class="skeleton-title"></div>
                <div class="skeleton-price"></div>
            </div>
        </div>
        
        <div v-else-if="type === 'product-list'" class="skeleton-product-list">
            <div v-for="i in count" :key="i" class="skeleton-product-card">
                <div class="skeleton-image"></div>
                <div class="skeleton-content">
                    <div class="skeleton-title"></div>
                    <div class="skeleton-price"></div>
                </div>
            </div>
        </div>
        
        <div v-else-if="type === 'cart-item'" class="skeleton-cart-item">
            <div class="skeleton-image"></div>
            <div class="skeleton-content">
                <div class="skeleton-title"></div>
                <div class="skeleton-text"></div>
                <div class="skeleton-text short"></div>
            </div>
            <div class="skeleton-price"></div>
        </div>
        
        <div v-else-if="type === 'text'" class="skeleton-text" :style="{ width: width }"></div>
        
        <div v-else class="skeleton-default"></div>
    </div>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'default',
        validator: (value) => ['product-card', 'product-list', 'cart-item', 'text', 'default'].includes(value)
    },
    count: {
        type: Number,
        default: 1
    },
    width: {
        type: String,
        default: '100%'
    }
})
</script>

<style scoped>
.skeleton-container {
    width: 100%;
}

.skeleton-product-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.skeleton-image {
    width: 100%;
    height: 200px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

.skeleton-content {
    padding: 16px;
}

.skeleton-title {
    height: 20px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    margin-bottom: 8px;
    border-radius: 4px;
}

.skeleton-price {
    height: 16px;
    width: 60px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 4px;
}

.skeleton-text {
    height: 14px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    margin-bottom: 6px;
    border-radius: 4px;
}

.skeleton-text.short {
    width: 70%;
}

.skeleton-default {
    width: 100%;
    height: 100px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 8px;
}

.skeleton-product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.skeleton-cart-item {
    display: flex;
    gap: 16px;
    padding: 16px;
    background: white;
    border-radius: 8px;
    margin-bottom: 16px;
}

.skeleton-cart-item .skeleton-image {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
}

.skeleton-cart-item .skeleton-content {
    flex: 1;
    padding: 0;
}

.skeleton-cart-item .skeleton-price {
    width: 80px;
    height: 20px;
    flex-shrink: 0;
}

@keyframes loading {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}

@media (max-width: 768px) {
    .skeleton-product-list {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
    }
    
    .skeleton-cart-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .skeleton-cart-item .skeleton-content {
        width: 100%;
    }
}
</style> 