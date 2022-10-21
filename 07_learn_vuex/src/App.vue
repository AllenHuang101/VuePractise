<template>
  <div class="app">
    <!-- store中的counter -->
    <h2>App當前計數:{{ $store.state.counter }}</h2>

    <hr />
    <!-- home頁面 -->
    <Home />
  </div>
</template>

<script setup>
import Home from './views/Home.vue';
</script>

<style></style>
