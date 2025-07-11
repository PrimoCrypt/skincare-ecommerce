<template>
    <div v-if="showAnimation" class="cart-animation" :style="animationStyle">
        <div class="cart-animation__item">
            <img :src="productImage" :alt="productName" />
            <div class="cart-animation__check">✓</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    productImage: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    startPosition: {
        type: Object,
        default: () => ({ x: 0, y: 0 })
    },
    endPosition: {
        type: Object,
        default: () => ({ x: 0, y: 0 })
    }
})

const showAnimation = ref(false)
const animationStyle = ref({})

const startAnimation = () => {
    showAnimation.value = true
    
    // Calculate the animation path
    const startX = props.startPosition.x
    const startY = props.startPosition.y
    const endX = props.endPosition.x
    const endY = props.endPosition.y
    
    // Set initial position
    animationStyle.value = {
        left: `${startX}px`,
        top: `${startY}px`,
        transform: 'scale(0.5)',
        opacity: '1'
    }
    
    // Animate to end position
    setTimeout(() => {
        animationStyle.value = {
            left: `${endX}px`,
            top: `${endY}px`,
            transform: 'scale(0.2)',
            opacity: '0',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }
    }, 50)
    
    // Hide animation after completion
    setTimeout(() => {
        showAnimation.value = false
    }, 900)
}

// Expose the start method
defineExpose({
    startAnimation
})
</script>

<style scoped>
.cart-animation {
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    width: 60px;
    height: 60px;
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cart-animation__item {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    background: white;
}

.cart-animation__item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cart-animation__check {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: #4CAF50;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    opacity: 0;
    animation: checkAppear 0.3s ease-out 0.4s forwards;
}

@keyframes checkAppear {
    from {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}
</style> 