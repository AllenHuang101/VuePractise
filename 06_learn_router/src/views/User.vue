<template>
  <div class="user">
    <!-- 在模板中獲取id -->
    <h2>User: {{ $route.params.id }}</h2>
  </div>
</template>

<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

// 獲取路由參數 id
// option api
// this.$route.params.id

// 在setup中，使用 useRoute 取得路由參數
const route = useRoute();
console.log('id:', route.params.id);

onBeforeRouteUpdate((to, from) => {
  console.log('from', from.params.id);
  console.log('to', to.params.id);
});
</script>

<style lang="scss" scoped></style>
