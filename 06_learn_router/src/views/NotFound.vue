<template>
  <div class="not-found">
    <h2>
      NotFound: 您當前的路徑
      {{ $route.params.pathMatch }} 不正確，請輸入正確的路徑
    </h2>
  </div>
</template>

<script setup></script>

<style scoped>
.net-found {
  color: red;
}
</style>
