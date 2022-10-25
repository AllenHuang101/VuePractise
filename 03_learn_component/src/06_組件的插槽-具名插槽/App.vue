<template>
  <nav-bar>
    <template v-slot:left>
      <button>{{ leftText }}</button>
    </template>
    <template #center>
      <span>內容</span>
    </template>
    <template #right>
      <a href="#">登錄</a>
    </template>
  </nav-bar>

  <nav-bar>
    <template v-slot:[position]>
      <a href="#">註冊</a>
    </template>
  </nav-bar>
  <button @click="position = 'left'">左邊</button>
  <button @click="position = 'center'">中間</button>
  <button @click="position = 'right'">右邊</button>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  data() {
    return {
      position: 'right',
      leftText: '返回',
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped></style>
