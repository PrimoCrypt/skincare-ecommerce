import { ref, computed } from "vue";

export const pageName = ref("Allure");

export const pageNameHeader = computed(() => {
  return pageName.value.toUpperCase();
});
