<template>
  <div class="app">
    <button @click="changeName('Allen')">修改name</button>
    <button @click="incrementLevel">遞增level</button>
    <button @click="changeInfo({ name: 'James', level: 300 })">
      changeInfo
    </button>
    <h2>Store Name: {{ $store.state.name }}</h2>
    <h2>Store Level: {{ $store.state.level }}</h2>
  </div>
</template>

<script>
import { CHANGE_INFO } from '@/store/mutation_types';
import { mapMutations } from 'vuex';

export default {
  computed: {},
  methods: {
    btnClick() {
      console.log('btnClick');
    },
    // ...mapMutations(['changeName', 'incrementLevel', CHANGE_INFO]),
  },
};
</script>

<script setup>
import { CHANGE_INFO } from '@/store/mutation_types';
import { mapMutations, useStore } from 'vuex';

const store = useStore();

// 1. 手動映射和綁定
const mutations = mapMutations(['changeName', 'incrementLevel', CHANGE_INFO]);
const newMutations = {};
Object.keys(mutations).forEach((key) => {
  newMutations[key] = mutations[key].bind({ $store: store });
});

const { changeName, incrementLevel, changeInfo } = newMutations;
</script>

<style scoped></style>
