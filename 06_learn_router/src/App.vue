<template>
  <div class="app">
    <h2>App Content</h2>
    <div class="nav">
      <router-link to="/home" replace>首頁</router-link>
      <router-link to="/about" replace>關於</router-link>
      <router-link to="/user/123">User123</router-link>
      <router-link to="/user/321">User321</router-link>
      <router-link to="/order">訂單</router-link>

      <!-- 其他元素跳轉 -->
      <span @click="homeSpanClick">首頁</span>
      <button @click="aboutBtnClick">關於</button>
    </div>
    <!-- 路由佔位 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function homeSpanClick() {
  // 跳轉到首頁
  // router.push('/home');
  router.push({
    path: '/home',
  });
}

function aboutBtnClick() {
  // 跳轉到關於
  // router.push('/about');
  router.push({
    path: '/about',
    query: {
      name: 'allen',
      age: 30,
    },
  });
}
</script>

<style>
.router-link-active {
  color: red;
  font-size: 20px;
}

.link-active {
  color: red;
  font-size: 20px;
}
</style>
