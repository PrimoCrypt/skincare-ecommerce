import { ref, computed } from 'vue';

export const pageName = ref('Allure');

export const pageNameHeader = computed(() => {
    return pageName.value.toUpperCase();
  });
export const totalCartItems = ref([])

export const updateCartItemsCount = (itemValue) => {
  totalCartItems.value.push(itemValue);
};



import rectangle6 from "@/assets/Rectangle6.png";
import rectangle7 from "@/assets/Rectangle7.png";
import rectangle8 from "@/assets/Rectangle8.png";
import rectangle9 from "@/assets/Rectangle9.png";

export const popularProdData = ref([{
    value: 'alleyFaceCream',
    name: "ALLURE FACE CREAM",
    price: 45.00.toFixed(2),
    img: rectangle6
  },
  {
    value: 'philaeHairSerum',
    name:"PHILAE HAIR SERUM",
    price: 45.00.toFixed(2),
    img: rectangle7
  },
  {
    value: 'alley2xCleaner',
    name: "ALLEY 2X CLEANSER",
    price: 45.00.toFixed(2),
    img : rectangle8
  },

  {
    value: 'allyBodyWash',
    name: "ALLY BODY WASH",
    price: 45.00.toFixed(2),
    img : rectangle9
  }
])



import rectangle10 from "@/assets/Rectangle10.png";
import rectangle11 from "@/assets/Rectangle11.png";
import rectangle12 from "@/assets/Rectangle12.png";
import rectangle13 from "@/assets/Rectangle13.png";

export const topPicksData = ref([
{
  value: 'aylaSkinSerum',
  name: "Ayla Skin Repair Serum",
  price: 30.00.toFixed(2),
  prevPrice: 45.00.toFixed(2),
  img : rectangle10
},
{
  value: 'allureSpfSunscreen',
  name: "Allure SPF Sunscreen",
  price: 30.00.toFixed(2),
  prevPrice: 45.00.toFixed(2),
  img : rectangle11
},
{
  value: 'toniccMoisturizer',
  name: "Tonic Moisturizer",
  price: 30.00.toFixed(2),
  prevPrice: 45.00.toFixed(2),
  img : rectangle12
},
{
  value:'allurePeeling',
  name: "Allure Peeling Solution",
  price: 30.00.toFixed(2),
  prevPrice: 45.00.toFixed(2),
  img : rectangle13
}])



import rectangle25 from "@/assets/Rectangle25.png";
import rectangle26 from "@/assets/Rectangle26.png";
import rectangle27 from "@/assets/Rectangle27.png";
import rectangle28 from "@/assets/Rectangle28.png";
import rectangle29 from "@/assets/Rectangle29.png";
import rectangle30 from "@/assets/Rectangle30.png";


export const productsData = ref([
  {
    value: 'RevoxVitCSerum',
    name: "Revox Vit.C Serum",
    price: 45.00.toFixed(2),
    img : rectangle25
  },
  {
    value: 'RevoxCleanser',
    name: "Revox Cleanser",
    price: 45.00.toFixed(2),
    img : rectangle9
  },
  {
    value: 'AvantShowerGel',
    name: "Avant Shower Gel",
    price: 39.00.toFixed(2),
    img : rectangle26
  },
  {
    value: 'CurologyFaceCream',
    name: "Curology Face Cream",
    price: 64.90.toFixed(2),
    img : rectangle27
  },
  {
    value: 'CocoBodyOil',
    name: "Coco Body Oil",
    price: 4.00.toFixed(2),
    img : rectangle28
  },
  {
    value: 'AllieRosewater',
    name: "Allie Rosewater",
    price: 36.00.toFixed(2),
    img : rectangle29
  },
  {
    value: 'AvocadoFaceOil',
    name: "Avocado Face Oil",
    price: 45.90.toFixed(2),
    img : rectangle30
  },
  
]);