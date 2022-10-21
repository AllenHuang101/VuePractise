<template>
  <div class="app">
    <h2>Home當前計數: {{ $store.state.counter }}</h2>
    <h2>Computed當前計數: {{ storeCounter }}</h2>
    <h2>Setup當前計數: {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  computed: {
    storeCounter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<script setup>
import { toRefs } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
// counter 不是響應式的
// const { counter } = store.state;
// counter 是響應式的
const { counter } = toRefs(store.state);
//
function increment() {
  // store.state.counter++;
  store.commit('increment');
}
</script>

<style scoped></style>
