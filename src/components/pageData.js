import { ref, computed } from 'vue';

const pageData = () => {
  const pageName = ref('Allure');

  const pageNameHeader = computed(() => {
    return pageName.value.toUpperCase();
  });
  const totalCartItem = ref(0)


  return { pageName, pageNameHeader };
};

export default pageData;