<template>
  <h2>message: {{ message }}-{{ counter }}</h2>
  <button @click="message = 'Hello World'">修改message</button>
  <button @click="counter++">+1</button>

  <div>
    <button @click="isShowHome = !isShowHome">顯示Home</button>
    <home v-if="isShowHome"></home>
  </div>
</template>

<script>
import Home from './Home.vue';

export default {
  components: {
    Home,
  },
  data() {
    return {
      message: 'Hello App',
      counter: 0,
      isShowHome: true,
    };
  },
  // 1.組件被創建之前
  beforeCreate() {
    console.log('beforeCreate');
  },
  // 2.組件被創建完成
  created() {
    console.log('created');
    console.log('1.發送網路請求，請求數據');
    console.log('2.監聽eventbus事件');
    console.log('3.監聽watch數據');
  },
  // 3.組件template準備被掛載
  beforeMount() {
    console.log('beforeMount');
  },
  // 4.組件template被掛載: 虛擬DOM -> 真實DOM
  mounted() {
    console.log('mounted');
    console.log('1.獲取DOM');
    console.log('2.使用DOM');
  },
  // 5.數據發生改變
  // 5.1. 準備更新DOM
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  // 5.2. 更新DOM
  updated() {
    console.log('updated');
  },

  // 6.卸載VNode -> DOM元素
  // 6.1.卸載之前
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  // 6.2.DOM元素被卸載完成
  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style scoped></style>
