<template>
  <div class="app">
    <h2>Home Page</h2>
    <ul>
      <template v-for="item in $store.state.banners" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script></script>

<script setup>
import { useStore } from 'vuex';

// 告訴vuex發起網路請求
const store = useStore();
store.dispatch('fetchHomeMulidataAction').then((res) => {
  console.log(res);
});
</script>

<style scoped></style>
