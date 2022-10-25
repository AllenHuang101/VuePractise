<template>
  <div class="app">
    <home></home>
    <h2>App: {{ message }}</h2>
    <button @click="message = 'hello world'">修改message</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import Home from './Home.vue';
export default {
  components: {
    Home,
  },
  data() {
    return {
      message: 'Hello App',
    };
  },
  // provide: {
  //   name: 'why',
  //   age: 18,
  // },
  // provde 一般都寫成函數，這樣才能使用 this 取得 data 的數據
  provide() {
    return {
      name: 'why',
      age: 18,
      message: computed(() => this.message),
    };
  },
};
</script>

<style lang="scss" scoped></style>
