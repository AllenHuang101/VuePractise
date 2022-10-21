<template>
  <div class="home">
    <h2>Home</h2>
    <h2>count: {{ counterStore.count }}</h2>
    <h2>count: {{ count }}</h2>
    <button @click="incrementCount">count+1</button>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import useCounter from '@/stores/counter';

const counterStore = useCounter();
// 解構出來不是響應式, 因此需要使用 toRefs
// const { count } = toRefs(counterStore);
const { count } = storeToRefs(counterStore);

function incrementCount() {
  counterStore.count++;
}
</script>

<style lang="scss" scoped></style>
