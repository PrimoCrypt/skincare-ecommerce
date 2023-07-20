import { ref, computed } from 'vue';

const pageData = () => {
  const pageName = ref('Allure');

  const pageNameHeader = computed(() => {
    return pageName.value.toUpperCase();
  });
  const totalCartItem = ref(0)

  const popularProdData = ref([{
    value: 'alleyFaceCream',
    name: "ALLURE FACE CREAM",
    price: 45.00.toFixed(2),
    img: require("@/assets/Rectangle6.png")
  },
  {
    value: 'philaeHairSerum',
    name:"PHILAE HAIR SERUM",
    price: 45.00.toFixed(2),
    img: require("@/assets/Rectangle7.png")
  },
  {
    value: 'alley2xCleaner',
    name: "ALLEY 2X CLEANSER",
    price: 45.00.toFixed(2),
    img : require("@/assets/Rectangle8.png")
  },
  {
    value: 'allyBodyWash',
    name: "ALLY BODY WASH",
    price: 45.00.toFixed(2),
    img : require("@/assets/Rectangle9.png")
  }])



  const topPicksData = ref([
  {
    value: 'aylaSkinSerum',
    name: "Ayla Skin Repair Serum",
    price: 30.00.toFixed(2),
    prevPrice: 45.00.toFixed(2),
    img : require("@/assets/Rectangle10.png")
  },
  {
    value: 'allureSpfSunscreen',
    name: "Allure SPF Sunscreen",
    price: 30.00.toFixed(2),
    prevPrice: 45.00.toFixed(2),
    img : require("@/assets/Rectangle11.png")
  },
  {
    value: 'toniccMoisturizer',
    name: "Tonic Moisturizer",
    price: 30.00.toFixed(2),
    prevPrice: 45.00.toFixed(2),
    img : require("@/assets/Rectangle12.png")
  },
  {
    value:'allurePeeling',
    name: "Allure Peeling Solution",
    price: 30.00.toFixed(2),
    prevPrice: 45.00.toFixed(2),
    img : require("@/assets/Rectangle13.png")
  }])


  return { 
    pageName,
    pageNameHeader,
    totalCartItem,
    popularProdData,
    topPicksData
  };
};

export default pageData;