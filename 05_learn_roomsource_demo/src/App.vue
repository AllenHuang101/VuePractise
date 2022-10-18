<template>
  <div class="app">
    <!-- 1.高評價 -->
    <room-area :area-data="highScore"></room-area>
  </div>
</template>

<script setup>
import RoomArea from './components/RoomArea.vue';
// 1.獲取數據
import highScore from './data/high_score.json';

console.log(highScore);
</script>

<style lang="less" scoped>
.app {
  width: 1032px;
  padding: 40px;
  margin: 0 auto;
}
</style>
