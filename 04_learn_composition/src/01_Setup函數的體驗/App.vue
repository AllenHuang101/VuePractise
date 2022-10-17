<template>
  <div class="app">
    <!-- template中ref對象會自動解包，不需要 .value -->
    <h2>當前計數: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import useCounter from './hooks/useCounter';

export default {
  setup() {
    // //1.定義counter的數據
    // //默認定義的數據都不是響應式數據，因此需要使用 ref, reactive
    // let counter = ref(100);
    // const increment = () => {
    //   counter.value++;
    // };
    // const decrement = () => {
    //   counter.value--;
    // };

    // const { counter, increment, decrement } = useCounter();

    return {
      // counter,
      // increment,
      // decrement,
      ...useCounter(),
    };
  },
};
</script>

<style></style>
