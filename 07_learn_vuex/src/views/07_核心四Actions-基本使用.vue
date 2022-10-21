<template>
  <div class="app">
    <h2>當前計數: {{ $store.state.counter }}</h2>
    <button @click="counterBtnClick">發起action修改counter</button>
    <h2>當前name: {{ $store.state.name }}</h2>
    <button @click="nameBtnClick">發起action修改name</button>
  </div>
</template>

<script>
export default {
  methods: {
    counterBtnClick() {
      this.$store.dispatch('incrementAction');
    },
    nameBtnClick() {
      this.$store.dispatch('changeNameAction', 'Allen');
    },
  },
};
</script>

<script setup>
import { mapMutations, useStore } from 'vuex';

const store = useStore();
</script>

<style scoped></style>
