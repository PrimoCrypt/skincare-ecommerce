import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const initializeCart = () => {
    try {
      const savedCart = localStorage.getItem('allure-cart')
      if (savedCart) {
        items.value = JSON.parse(savedCart)
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error)
      items.value = []
    }
  }

  const cartItems = computed(() => items.value)
  
  const cartCount = computed(() => items.value.length)
  
  const cartTotal = computed(() => {
    return items.value.reduce((total, itemValue) => {
      return total
    }, 0)
  })

  const groupedItems = computed(() => {
    const grouped = {}
    items.value.forEach(item => {
      if (!grouped[item]) {
        grouped[item] = { item, count: 1 }
      } else {
        grouped[item].count++
      }
    })
    return Object.values(grouped)
  })

  const getCartTotalWithProducts = (productsStore) => {
    return groupedItems.value.reduce((total, cartItem) => {
      const productData = productsStore.getProductByValue(cartItem.item)
      if (productData) {
        return total + (productData.price * cartItem.count)
      }
      return total
    }, 0)
  }

  const addItem = (itemValue) => {
    items.value.push(itemValue)
    saveToLocalStorage()
  }

  const removeItem = (itemValue) => {
    const index = items.value.indexOf(itemValue)
    if (index > -1) {
      items.value.splice(index, 1)
      saveToLocalStorage()
    }
  }

  const removeAllInstances = (itemValue) => {
    items.value = items.value.filter(item => item !== itemValue)
    saveToLocalStorage()
  }

  const updateQuantity = (itemValue, newQuantity) => {
    if (newQuantity <= 0) {
      removeAllInstances(itemValue)
      return
    }
    
    const currentCount = items.value.filter(item => item === itemValue).length
    const difference = newQuantity - currentCount
    
    if (difference > 0) {
      for (let i = 0; i < difference; i++) {
        items.value.push(itemValue)
      }
    } else if (difference < 0) {
      const itemsToRemove = Math.abs(difference)
      let removed = 0
      items.value = items.value.filter(item => {
        if (item === itemValue && removed < itemsToRemove) {
          removed++
          return false
        }
        return true
      })
    }
    
    saveToLocalStorage()
  }

  const clearCart = () => {
    items.value = []
    try {
      localStorage.removeItem('allure-cart')
    } catch (error) {
      console.error('Error clearing cart from localStorage:', error)
    }
  }

  const saveToLocalStorage = () => {
    try {
      localStorage.setItem('allure-cart', JSON.stringify(items.value))
    } catch (error) {
      console.error('Error saving cart to localStorage:', error)
    }
  }

  initializeCart()

  return {
    items,
    cartItems,
    cartCount,
    cartTotal,
    groupedItems,
    getCartTotalWithProducts,
    addItem,
    removeItem,
    removeAllInstances,
    updateQuantity,
    clearCart,
    saveToLocalStorage,
    initializeCart
  }
}) 