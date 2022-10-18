<template>
  <div class="login">
    <h2>登錄頁面</h2>
    <button @click="loginClick">登錄</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function loginClick() {
  // console.log('loginClick');
  // 向服務發送請求，服務器驗證返回token
  localStorage.setItem('token', '123456');
  router.push('/order');
}
</script>

<style lang="scss" scoped></style>
