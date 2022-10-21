<template>
  <div class="app">
    <h2>Home Page</h2>
    <ul>
      <!-- 獲取數據: 需要從模塊中獲取 state.modulename.xxx -->
      <template v-for="item in $store.state.home.banners" :key="item.acm">
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
