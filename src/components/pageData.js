import { ref, computed } from 'vue';

const pageData = () => {
  const pageName = ref('Allure');

  const pageNameHeader = computed(() => {
    return pageName.value.toUpperCase();
  });
  const totalCartItem = ref(0)

  const alleyFaceCream = ref({
    name: "ALLURE FACE CREAM",
    price: 45.00.toFixed(2),
    img: require("@/assets/Rectangle6.png")
  })

  const  philaeHairSerum = ref({
    name:"PHILAE HAIR SERUM",
    price: 45.00.toFixed(2),
    img: require("@/assets/Rectangle7.png")
  })

  const alley2xCleaner = ref({
    name: "ALLEY 2X CLEANSER",
    price: 45.00.toFixed(2),
    img : require("@/assets/Rectangle8.png")
  })

  const allyBodyWash = ref({
    name: "ALLY BODY WASH",
    price: 45.00.toFixed(2),
    img : require("@/assets/Rectangle9.png")
  })

  const aylaSkinSerum = ref({
    name: "Ayla Skin Repair Serum",
    price: 30.00.toFixed(2),
    prevPrice: 45.00.toFixed(2),
    img : require("@/assets/Rectangle10.png")
  })

  const allureSunscreen = ref({
    name: "Allure SPF Sunscreen",
    price: 30.00.toFixed(2),
    prevPrice: 45.00.toFixed(2),
    img : require("@/assets/Rectangle11.png")
  })

  const toniccMoisturizer = ref({
    name: "Tonic Moisturizer",
    price: 30.00.toFixed(2),
    prevPrice: 45.00.toFixed(2),
    img : require("@/assets/Rectangle12.png")
  })

  const allurePeeling = ref({
    name: "Allure Peeling Solution",
    price: 30.00.toFixed(2),
    prevPrice: 45.00.toFixed(2),
    img : require("@/assets/Rectangle13.png")
  })
  return { 
    pageName,
    pageNameHeader,
    alleyFaceCream,
    totalCartItem,
    philaeHairSerum ,
    alley2xCleaner,
    allyBodyWash,
    aylaSkinSerum,
    allureSunscreen,
    toniccMoisturizer,
    allurePeeling
  };
};

export default pageData;