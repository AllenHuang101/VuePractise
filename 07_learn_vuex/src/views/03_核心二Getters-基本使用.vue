<template>
  <div class="app">
    <h2>doubleCounter: {{ $store.getters.doubleCounter }}</h2>
    <h2>friendsTotalAge: {{ $store.getters.totalAge }}</h2>
    <h2>message: {{ $store.getters.message }}</h2>

    <!-- 根據id獲取某一個朋友的訊息 -->
    <h1>朋友111訊息: {{ $store.getters.getFriendById(111) }}</h1>
    <h1>朋友112訊息: {{ $store.getters.getFriendById(112) }}</h1>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<script setup></script>

<style scoped></style>
