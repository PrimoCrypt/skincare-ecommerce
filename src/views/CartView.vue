<script setup>
import { computed, ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import BaseButton from '@/components/BaseButton.vue'
import LoadingSkeleton from '@/components/LoadingSkeleton.vue'
import { useCartStore, useProductsStore } from '@/stores'
import { useRouter, useRoute } from 'vue-router'



const cartStore = useCartStore()
const productsStore = useProductsStore()

const isLoading = ref(false)

const cartArray = computed(() => {
    return cartStore.groupedItems
});

const cartWithProductData = computed(() => {
    return cartArray.value.map(cartItem => {
        const productData = productsStore.getProductByValue(cartItem.item);
        return productData ? { ...cartItem, ...productData } : cartItem;
    });
});


const totalPrice = computed(() => {
    return cartStore.getCartTotalWithProducts(productsStore)
});

const totalItems = computed(() => {
    return cartStore.cartCount
});


const props = defineProps(['value'])


const router = useRouter();
const route = useRoute();

const navigateToCheckout = () => {
    if (cartArray.value.length === 0) {
        alert('Your cart is empty. Please add some products before checkout.');
        return;
    }
    router.push('/checkout');
}

const clearAllItems = () => {
    if (confirm('Are you sure you want to clear your cart?')) {
        cartStore.clearCart();
    }
}

const removeItem = (index) => {
  const itemToRemove = cartWithProductData.value[index];
  if (itemToRemove) {
    cartStore.removeAllInstances(itemToRemove.item);
  }
};

const updateQuantity = (itemValue, newQuantity) => {
  cartStore.updateQuantity(itemValue, newQuantity);
};

</script>


<template>
    <div class="container">
        <div class="navigationBar">
            <NavBar />
        </div>
        <div class="content">
            <div v-if="isLoading" class="loading-state">
                <LoadingSkeleton type="cart-item" :count="3" />
            </div>
            
            <div v-else-if="cartWithProductData.length" class="cart-items">
                <div class="cart-item" v-for="(item, index) in cartWithProductData" :key="item.item">
                    <div class="cart-item-content">
                        <div class="cart-item-left">
                            <router-link :to="{name: 'ItemDetails', params:{value: item.value}}" class="cart-item-image">
                                <img :src="item.img" :alt="item.name" />
                            </router-link>
                            <div class="cart-item-details">
                                <h3 class="cart-item-title">{{ item.name }}</h3>
                                <div class="cart-item-info">
                                    <p class="cart-item-brand">Clearamane</p>
                                    <p class="cart-item-size">Size: <span>200 ml/3.3 fl oz</span></p>
                                    <p class="cart-item-price">Unit Price: ${{item.price}}</p>
                                </div>
                                <div class="quantity-controls">
                                    <BaseButton 
                                        variant="outline" 
                                        size="small"
                                        :disabled="item.count <= 1"
                                        @click="updateQuantity(item.item, item.count - 1)"
                                        class="qty-btn"
                                    >
                                        -
                                    </BaseButton>
                                    <span class="item-quantity">{{ item.count }}</span>
                                    <BaseButton 
                                        variant="outline" 
                                        size="small"
                                        @click="updateQuantity(item.item, item.count + 1)"
                                        class="qty-btn"
                                    >
                                        +
                                    </BaseButton>
                                </div>
                            </div>
                        </div>
                        <div class="cart-item-right">
                            <BaseButton 
                                variant="ghost" 
                                size="small"
                                @click="removeItem(index)"
                                class="remove-btn"
                            >
                                ×
                            </BaseButton>
                            <h3 class="cart-item-total">
                                ${{ (item.price * item.count).toFixed(2) }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
           
            <div v-else class="empty-cart">
                <div class="empty-cart-content">
                    <h1>Your cart is empty</h1>
                    <p>Add some products to get started!</p>
                    <BaseButton 
                        variant="primary" 
                        size="large"
                        @click="$router.push('/products')"
                    >
                        Start Shopping
                    </BaseButton>
                </div>
            </div>
            
            <div v-if="cartWithProductData.length" class="cart-summary">
                <div class="cart-actions">
                    <BaseButton 
                        variant="ghost" 
                        @click="$router.push('/products')"
                    >
                        ← Continue Shopping
                    </BaseButton>
                    <BaseButton 
                        variant="danger" 
                        @click="clearAllItems"
                    >
                        Clear Cart
                    </BaseButton>
                </div>
                <div class="cart-totals">
                    <div class="total-row">
                        <span>Products in cart:</span>
                        <span class="total-value">{{ totalItems }} items</span>
                    </div>
                    <div class="total-row">
                        <span>Total:</span>
                        <span class="total-value">${{ totalPrice?.toFixed(2) }}</span>
                    </div>
                    <BaseButton 
                        variant="primary" 
                        size="large"
                        fullWidth
                        @click="navigateToCheckout"
                        class="checkout-btn"
                    >
                        Proceed to Checkout
                    </BaseButton>
                </div>
            </div>
        </div>
    </div>
</template>
  

<style scoped>
.container {
    display: flex;
    align-items: start;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100%;
    margin: 0 80px;
    color: #000;
    background: #F1F5F2;
    font-family: Rubik;
}

.content {
    width: 100%;
    margin-top: 40px;
}

.navigationBar {
    margin-right: 80px;
    color: #000;
    width: 100%;
}

/* Loading State */
.loading-state {
    width: 100%;
}

/* Cart Items */
.cart-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.cart-item {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.cart-item-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
}

.cart-item-left {
    display: flex;
    gap: 20px;
    flex: 1;
}

.cart-item-image {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    border-radius: 8px;
    overflow: hidden;
}

.cart-item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cart-item-details {
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
}

.cart-item-title {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #333;
}

.cart-item-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.cart-item-brand,
.cart-item-size,
.cart-item-price {
    margin: 0;
    font-size: 14px;
    color: #666;
}

.cart-item-size span {
    color: #333;
    font-weight: 500;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 12px;
}

.qty-btn {
    width: 32px !important;
    height: 32px !important;
    padding: 0 !important;
    min-height: 32px !important;
}

.item-quantity {
    font-size: 16px;
    font-weight: 600;
    min-width: 40px;
    text-align: center;
    color: #333;
}

.cart-item-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
}

.remove-btn {
    width: 32px !important;
    height: 32px !important;
    padding: 0 !important;
    min-height: 32px !important;
    font-size: 18px;
    font-weight: bold;
}

.cart-item-total {
    font-size: 24px;
    font-weight: 600;
    color: #2F4333;
    margin: 0;
}

/* Empty Cart */
.empty-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    text-align: center;
}

.empty-cart-content h1 {
    font-size: 32px;
    margin-bottom: 16px;
    color: #333;
}

.empty-cart-content p {
    font-size: 18px;
    color: #666;
    margin-bottom: 32px;
}

/* Cart Summary */
.cart-summary {
    margin-top: 40px;
    padding: 24px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.cart-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.cart-totals {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: #666;
}

.total-value {
    font-weight: 600;
    color: #333;
}

.checkout-btn {
    margin-top: 8px;
}

/* Responsive Styles */
@media (max-width: 800px) {
    .container {
        margin: 0 20px;
    }
    
    .cart-item-content {
        flex-direction: column;
        gap: 16px;
    }
    
    .cart-item-left {
        width: 100%;
    }
    
    .cart-item-right {
        align-items: flex-start;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
    
    .cart-actions {
        flex-direction: column;
        gap: 16px;
        align-items: stretch;
    }
    
    .empty-cart-content h1 {
        font-size: 24px;
    }
    
    .empty-cart-content p {
        font-size: 16px;
    }
}

@media (max-width: 600px) {
    .cart-item-image {
        width: 80px;
        height: 80px;
    }
    
    .cart-item-title {
        font-size: 16px;
    }
    
    .cart-item-brand,
    .cart-item-size,
    .cart-item-price {
        font-size: 12px;
    }
    
    .cart-item-total {
        font-size: 20px;
    }
    
    .total-row {
        font-size: 16px;
    }
    
    .empty-cart-content h1 {
        font-size: 20px;
    }
    
    .empty-cart-content p {
        font-size: 14px;
    }
}

</style>