<template>
  <div class="app">
    <button @click="changeName">修改name</button>
    <button @click="incrementLevel">遞增level</button>
    <button @click="changeInfo">changeInfo</button>
    <h2>Store Name: {{ $store.state.name }}</h2>
    <h2>Store Level: {{ $store.state.level }}</h2>
  </div>
</template>

<script>
import { CHANGE_INFO } from '@/store/mutation_types';
export default {
  computed: {},
  methods: {
    changeName() {
      this.$store.commit('changeName', 'Allen');
    },
    incrementLevel() {
      this.$store.commit('incrementLevel');
    },
    changeInfo() {
      this.$store.commit(CHANGE_INFO, {
        name: 'Tommy',
        level: 100,
      });
    },
  },
};
</script>

<script setup></script>

<style scoped></style>
