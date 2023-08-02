import { ref, computed } from "vue";

export const pageName = ref("Allure");

export const pageNameHeader = computed(() => {
  return pageName.value.toUpperCase();
});
export const totalCartItems = ref([]);

export const updateCartItemsCount = (itemValue) => {
  totalCartItems.value.push(itemValue);
};

import rectangle6 from "@/assets/Rectangle6.png";
import rectangle7 from "@/assets/Rectangle7.png";
import rectangle8 from "@/assets/Rectangle8.png";
import rectangle9 from "@/assets/Rectangle9.png";

export const popularProdData = ref([
  {
    value: "alleyFaceCream",
    name: "ALLURE FACE CREAM",
    price: (45.0).toFixed(2),
    img: rectangle6,
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
  {
    value: "philaeHairSerum",
    name: "PHILAE HAIR SERUM",
    price: (45.0).toFixed(2),
    img: rectangle7,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
  {
    value: "alley2xCleaner",
    name: "ALLEY 2X CLEANSER",
    price: (45.0).toFixed(2),
    img: rectangle8,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },

  {
    value: "allyBodyWash",
    name: "ALLY BODY WASH",
    price: (45.0).toFixed(2),
    img: rectangle9,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
]);

import rectangle10 from "@/assets/Rectangle10.png";
import rectangle11 from "@/assets/Rectangle11.png";
import rectangle12 from "@/assets/Rectangle12.png";
import rectangle13 from "@/assets/Rectangle13.png";

export const topPicksData = ref([
  {
    value: "aylaSkinSerum",
    name: "Ayla Skin Repair Serum",
    price: (30.0).toFixed(2),
    prevPrice: (45.0).toFixed(2),
    img: rectangle10,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
  {
    value: "allureSpfSunscreen",
    name: "Allure SPF Sunscreen",
    price: (30.0).toFixed(2),
    prevPrice: (45.0).toFixed(2),
    img: rectangle11,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
  {
    value: "toniccMoisturizer",
    name: "Tonic Moisturizer",
    price: (30.0).toFixed(2),
    prevPrice: (45.0).toFixed(2),
    img: rectangle12,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
  {
    value: "allurePeeling",
    name: "Allure Peeling Solution",
    price: (30.0).toFixed(2),
    prevPrice: (45.0).toFixed(2),
    img: rectangle13,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
]);

import rectangle25 from "@/assets/Rectangle25.png";
import rectangle26 from "@/assets/Rectangle26.png";
import rectangle27 from "@/assets/Rectangle27.png";
import rectangle28 from "@/assets/Rectangle28.png";
import rectangle29 from "@/assets/Rectangle29.png";
import rectangle30 from "@/assets/Rectangle30.png";

export const productsData = ref([
  {
    value: "RevoxVitCSerum",
    name: "Revox Vit.C Serum",
    price: (45.0).toFixed(2),
    img: rectangle25,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
  {
    value: "RevoxCleanser",
    name: "Revox Cleanser",
    price: (45.0).toFixed(2),
    img: rectangle9,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
  {
    value: "AvantShowerGel",
    name: "Avant Shower Gel",
    price: (39.0).toFixed(2),
    img: rectangle26,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
  {
    value: "CurologyFaceCream",
    name: "Curology Face Cream",
    price: (64.9).toFixed(2),
    img: rectangle27,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
  {
    value: "CocoBodyOil",
    name: "Coco Body Oil",
    price: (4.0).toFixed(2),
    img: rectangle28,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
  {
    value: "AllieRosewater",
    name: "Allie Rosewater",
    price: (36.0).toFixed(2),
    img: rectangle29,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
  {
    value: "AvocadoFaceOil",
    name: "Avocado Face Oil",
    price: (45.9).toFixed(2),
    img: rectangle30,
    notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sed urna aliquet ornare. Lorem semper.",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis diam sed facilisis ut ultrices eget eget tellus volutpat. Venenatis dignissim lectus eget proin eget feugiat quis congue ac. Viverra pharetra suscipit consectetur massa, eros, est sit semper egestas. Mauris tristique.",
  },
]);
