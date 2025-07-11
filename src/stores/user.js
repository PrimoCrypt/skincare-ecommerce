import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref(null)
  const isAuthenticated = ref(false)
  const preferences = ref({
    theme: 'light',
    currency: 'USD',
    language: 'en',
    notifications: true
  })

  // Initialize user from localStorage
  const initializeUser = () => {
    try {
      const savedUser = localStorage.getItem('allure-user')
      const savedPreferences = localStorage.getItem('allure-preferences')
      
      if (savedUser) {
        user.value = JSON.parse(savedUser)
        isAuthenticated.value = true
      }
      
      if (savedPreferences) {
        preferences.value = { ...preferences.value, ...JSON.parse(savedPreferences) }
      }
    } catch (error) {
      console.error('Error loading user data from localStorage:', error)
    }
  }

  // Getters
  const getUser = computed(() => user.value)
  const getIsAuthenticated = computed(() => isAuthenticated.value)
  const getPreferences = computed(() => preferences.value)

  // Actions
  const login = (userData) => {
    user.value = userData
    isAuthenticated.value = true
    saveUserToLocalStorage()
  }

  const logout = () => {
    user.value = null
    isAuthenticated.value = false
    try {
      localStorage.removeItem('allure-user')
    } catch (error) {
      console.error('Error removing user from localStorage:', error)
    }
  }

  const updatePreferences = (newPreferences) => {
    preferences.value = { ...preferences.value, ...newPreferences }
    savePreferencesToLocalStorage()
  }

  const saveUserToLocalStorage = () => {
    try {
      localStorage.setItem('allure-user', JSON.stringify(user.value))
    } catch (error) {
      console.error('Error saving user to localStorage:', error)
    }
  }

  const savePreferencesToLocalStorage = () => {
    try {
      localStorage.setItem('allure-preferences', JSON.stringify(preferences.value))
    } catch (error) {
      console.error('Error saving preferences to localStorage:', error)
    }
  }

  // Initialize user on store creation
  initializeUser()

  return {
    // State
    user,
    isAuthenticated,
    preferences,
    
    // Getters
    getUser,
    getIsAuthenticated,
    getPreferences,
    
    // Actions
    login,
    logout,
    updatePreferences,
    saveUserToLocalStorage,
    savePreferencesToLocalStorage,
    initializeUser
  }
}) 