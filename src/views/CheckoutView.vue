<template>
    <div class="checkout-page">
        <div class="navigationBar">
            <NavBar />
        </div>
        
        <div class="checkout-container">
            <h1>Checkout</h1>
            
            <div class="checkout-content">
                <div class="order-summary">
                    <h2>Order Summary</h2>
                    <div class="cart-items">
                        <div v-for="item in cartWithProductData" :key="item.item" class="cart-item">
                            <img :src="item.img" :alt="item.name" />
                            <div class="item-details">
                                <h4>{{ item.name }}</h4>
                                <p>Qty: {{ item.count }}</p>
                                <p class="item-price">${{ (item.price * item.count).toFixed(2) }}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="order-total">
                        <div class="subtotal">
                            <span>Subtotal:</span>
                            <span>${{ subtotal.toFixed(2) }}</span>
                        </div>
                        <div class="shipping">
                            <span>Shipping:</span>
                            <span>${{ shipping.toFixed(2) }}</span>
                        </div>
                        <div class="tax">
                            <span>Tax:</span>
                            <span>${{ tax.toFixed(2) }}</span>
                        </div>
                        <div class="total">
                            <span>Total:</span>
                            <span>${{ total.toFixed(2) }}</span>
                        </div>
                    </div>
                </div>
                
                <div class="checkout-form">
                    <h2>Shipping Information</h2>
                    <form @submit.prevent="processCheckout">
                        <div class="form-group">
                            <label for="firstName">First Name *</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                v-model="form.firstName" 
                                required
                            />
                        </div>
                        
                        <div class="form-group">
                            <label for="lastName">Last Name *</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                v-model="form.lastName" 
                                required
                            />
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input 
                                type="email" 
                                id="email" 
                                v-model="form.email" 
                                required
                            />
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Phone *</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                v-model="form.phone" 
                                required
                            />
                        </div>
                        
                        <div class="form-group">
                            <label for="address">Address *</label>
                            <input 
                                type="text" 
                                id="address" 
                                v-model="form.address" 
                                required
                            />
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="city">City *</label>
                                <input 
                                    type="text" 
                                    id="city" 
                                    v-model="form.city" 
                                    required
                                />
                            </div>
                            
                            <div class="form-group">
                                <label for="state">State *</label>
                                <input 
                                    type="text" 
                                    id="state" 
                                    v-model="form.state" 
                                    required
                                />
                            </div>
                            
                            <div class="form-group">
                                <label for="zipCode">ZIP Code *</label>
                                <input 
                                    type="text" 
                                    id="zipCode" 
                                    v-model="form.zipCode" 
                                    required
                                />
                            </div>
                        </div>
                        
                        <h2>Payment Information</h2>
                        
                        <div class="form-group">
                            <label for="cardNumber">Card Number *</label>
                            <input 
                                type="text" 
                                id="cardNumber" 
                                v-model="form.cardNumber" 
                                placeholder="1234 5678 9012 3456"
                                required
                            />
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="expiryDate">Expiry Date *</label>
                                <input 
                                    type="text" 
                                    id="expiryDate" 
                                    v-model="form.expiryDate" 
                                    placeholder="MM/YY"
                                    required
                                />
                            </div>
                            
                            <div class="form-group">
                                <label for="cvv">CVV *</label>
                                <input 
                                    type="text" 
                                    id="cvv" 
                                    v-model="form.cvv" 
                                    placeholder="123"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="cardName">Name on Card *</label>
                            <input 
                                type="text" 
                                id="cardName" 
                                v-model="form.cardName" 
                                required
                            />
                        </div>
                        
                        <div class="checkout-actions">
                            <button type="button" @click="goBack" class="back-btn">
                                Back to Cart
                            </button>
                            <button type="submit" class="place-order-btn" :disabled="isProcessing">
                                {{ isProcessing ? 'Processing...' : 'Place Order' }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import { useCartStore, useProductsStore } from '@/stores'

const router = useRouter()
const cartStore = useCartStore()
const productsStore = useProductsStore()

const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
})

const isProcessing = ref(false)

const cartWithProductData = computed(() => {
    return cartStore.groupedItems.map(cartItem => {
        const productData = productsStore.getProductByValue(cartItem.item)
        return productData ? { ...cartItem, ...productData } : cartItem
    })
})

const subtotal = computed(() => {
    return cartStore.getCartTotalWithProducts(productsStore)
})

const shipping = computed(() => {
    return subtotal.value > 50 ? 0 : 5.99
})

const tax = computed(() => {
    return subtotal.value * 0.08 // 8% tax
})

const total = computed(() => {
    return subtotal.value + shipping.value + tax.value
})

const goBack = () => {
    router.push('/cart')
}

const processCheckout = async () => {
    isProcessing.value = true
    
    try {
        await new Promise(resolve => setTimeout(resolve, 2000))
        cartStore.clearCart()
        alert('Order placed successfully! Thank you for your purchase.')
        router.push('/')
        
    } catch (error) {
        alert('There was an error processing your order. Please try again.')
    } finally {
        isProcessing.value = false
    }
}
</script>

<style scoped>
.checkout-page {
    min-height: 100vh;
    background: #F1F5F2;
}

.navigationBar {
    margin: 0 80px;
}

.checkout-container {
    margin: 0 80px;
    padding: 40px 0;
}

.checkout-container h1 {
    font-size: 2.5rem;
    color: #2F4333;
    margin-bottom: 30px;
}

.checkout-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
}

.order-summary {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    height: fit-content;
    border: 1px solid #e0e0e0;
}

.order-summary h2 {
    color: #2F4333;
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: 700;
    border-bottom: 2px solid #2F4333;
    padding-bottom: 10px;
}

.cart-items {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.cart-item {
    display: flex;
    gap: 20px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #fafafa;
    transition: all 0.3s ease;
}

.cart-item:hover {
    background: #f5f5f5;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.cart-item:last-child {
    border-bottom: none;
}

.cart-item img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item-details h4 {
    margin: 0 0 5px 0;
    font-size: 16px;
    font-weight: 600;
    color: #333;
}

.item-details p {
    margin: 2px 0;
    color: #666;
    font-size: 14px;
}

.item-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 60px;
    text-align: left;
}

.item-price {
    font-weight: 800;
    font-size: 20px;
    color: #2F4333 !important;
    margin-top: 8px;
    text-align: center;
    background: rgba(47, 67, 51, 0.1);
    padding: 8px 12px;
    border-radius: 6px;
    border: 2px solid #2F4333;
}

.order-total {
    border-top: 2px solid #eee;
    padding-top: 20px;
}

.order-total > div {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    color: #333;
    font-size: 16px;
}

.total {
    font-size: 1.4rem;
    font-weight: 700;
    color: #2F4333;
    border-top: 2px solid #2F4333;
    padding-top: 15px;
    margin-top: 15px;
}

.checkout-form {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.checkout-form h2 {
    color: #2F4333;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #333;
}

.form-group input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s;
    background-color: white;
    color: #333;
}

.form-group input:focus {
    outline: none;
    border-color: #2F4333;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(47, 67, 51, 0.1);
    transform: translateY(-1px);
}

.form-group input::placeholder {
    color: #999;
}

.checkout-actions {
    display: flex;
    gap: 20px;
    margin-top: 30px;
}

.back-btn, .place-order-btn {
    padding: 15px 30px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.back-btn {
    background: #f0f0f0;
    color: #333;
}

.back-btn:hover {
    background: rgba(47, 67, 51, 0.1);
    color: #2F4333;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(47, 67, 51, 0.2);
}

.place-order-btn {
    background: #2F4333;
    color: white;
    flex: 1;
}

.place-order-btn:hover:not(:disabled) {
    background: #1a2a1f;
}

.place-order-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
}

@media (max-width: 1024px) {
    .checkout-content {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .navigationBar, .checkout-container {
        margin: 0 20px;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .checkout-actions {
        flex-direction: column;
    }
}
</style> 