import { ref } from 'vue';

export default function useCounter() {
  //1.定義counter的數據
  //默認定義的數據都不是響應式數據，因此需要使用 ref, reactive
  let counter = ref(100);
  const increment = () => {
    counter.value++;
  };
  const decrement = () => {
    counter.value--;
  };

  return { counter, increment, decrement };
}
