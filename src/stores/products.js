import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Import product images
import rectangle6 from "@/assets/Rectangle6.png"
import rectangle7 from "@/assets/Rectangle7.png"
import rectangle8 from "@/assets/Rectangle8.png"
import rectangle9 from "@/assets/Rectangle9.png"
import rectangle10 from "@/assets/Rectangle10.png"
import rectangle11 from "@/assets/Rectangle11.png"
import rectangle12 from "@/assets/Rectangle12.png"
import rectangle13 from "@/assets/Rectangle13.png"
import rectangle25 from "@/assets/Rectangle25.png"
import rectangle26 from "@/assets/Rectangle26.png"
import rectangle27 from "@/assets/Rectangle27.png"
import rectangle28 from "@/assets/Rectangle28.png"
import rectangle29 from "@/assets/Rectangle29.png"
import rectangle30 from "@/assets/Rectangle30.png"

export const useProductsStore = defineStore('products', () => {
  // State
  const popularProducts = ref([
    {
      value: "alleyFaceCream",
      name: "ALLURE FACE CREAM",
      price: 45.0,
      img: rectangle6,
      category: "Moisturizers",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
    {
      value: "philaeHairSerum",
      name: "PHILAE HAIR SERUM",
      price: 45.0,
      img: rectangle7,
      category: "Hair Care",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
    {
      value: "alley2xCleaner",
      name: "ALLEY 2X CLEANSER",
      price: 45.0,
      img: rectangle8,
      category: "Cleansers",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
    {
      value: "allyBodyWash",
      name: "ALLY BODY WASH",
      price: 45.0,
      img: rectangle9,
      category: "Body Care",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
  ])

  const topPicks = ref([
    {
      value: "aylaSkinSerum",
      name: "Ayla Skin Repair Serum",
      price: 30.0,
      prevPrice: 45.0,
      img: rectangle10,
      category: "Serums",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
    {
      value: "allureSpfSunscreen",
      name: "Allure SPF Sunscreen",
      price: 30.0,
      prevPrice: 45.0,
      img: rectangle11,
      category: "Sunscreen",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
    {
      value: "toniccMoisturizer",
      name: "Tonic Moisturizer",
      price: 30.0,
      prevPrice: 45.0,
      img: rectangle12,
      category: "Moisturizers",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
    {
      value: "allurePeeling",
      name: "Allure Peeling Solution",
      price: 30.0,
      prevPrice: 45.0,
      img: rectangle13,
      category: "Exfoliants",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
  ])

  const allProducts = ref([
    {
      value: "RevoxVitCSerum",
      name: "Revox Vit.C Serum",
      price: 45.0,
      img: rectangle25,
      category: "Serums",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
    {
      value: "RevoxCleanser",
      name: "Revox Cleanser",
      price: 45.0,
      img: rectangle9,
      category: "Cleansers",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
    {
      value: "AvantShowerGel",
      name: "Avant Shower Gel",
      price: 39.0,
      img: rectangle26,
      category: "Body Care",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
    {
      value: "CurologyFaceCream",
      name: "Curology Face Cream",
      price: 64.9,
      img: rectangle27,
      category: "Moisturizers",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
    {
      value: "CocoBodyOil",
      name: "Coco Body Oil",
      price: 4.0,
      img: rectangle28,
      category: "Body Care",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
    {
      value: "AllieRosewater",
      name: "Allie Rosewater",
      price: 36.0,
      img: rectangle29,
      category: "Toners",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
    {
      value: "AvocadoFaceOil",
      name: "Avocado Face Oil",
      price: 45.9,
      img: rectangle30,
      category: "Face Oils",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
    },
  ])

  // Getters
  const getAllProducts = computed(() => {
    return [...popularProducts.value, ...topPicks.value, ...allProducts.value]
  })

  const getProductByValue = computed(() => {
    return (value) => {
      return getAllProducts.value.find(product => product.value === value)
    }
  })

  const getCategories = computed(() => {
    const categories = new Set()
    getAllProducts.value.forEach(product => {
      if (product.category) {
        categories.add(product.category)
      }
    })
    return Array.from(categories)
  })

  const getProductsByCategory = computed(() => {
    return (category) => {
      return getAllProducts.value.filter(product => product.category === category)
    }
  })

  const getOnSaleProducts = computed(() => {
    return getAllProducts.value.filter(product => product.prevPrice)
  })

  // Actions
  const searchProducts = (query) => {
    const lowercaseQuery = query.toLowerCase()
    return getAllProducts.value.filter(product => 
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.notes.toLowerCase().includes(lowercaseQuery)
    )
  }

  const filterProductsByPrice = (minPrice, maxPrice) => {
    return getAllProducts.value.filter(product => 
      product.price >= minPrice && product.price <= maxPrice
    )
  }

  return {
    // State
    popularProducts,
    topPicks,
    allProducts,
    
    // Getters
    getAllProducts,
    getProductByValue,
    getCategories,
    getProductsByCategory,
    getOnSaleProducts,
    
    // Actions
    searchProducts,
    filterProductsByPrice
  }
}) 