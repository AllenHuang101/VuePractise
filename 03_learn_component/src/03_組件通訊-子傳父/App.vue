<template>
  <div class="app">
    <h2>當前計數: {{ counter }}</h2>
    <!-- 1.自訂義add-counter, 監聽內部的add事件 -->
    <add-counter @add="addBtnClick"></add-counter>

    <!-- 2.自訂義sub-counter, 監聽內部的sub事件 -->
    <sub-counter @sub="subBtnClick"></sub-counter>
  </div>
</template>

<script>
import AddCounter from './AddCounter.vue';
import SubCounter from './SubCounter.vue';
export default {
  components: {
    AddCounter,
    SubCounter,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addBtnClick(count) {
      this.counter += count;
    },
    subBtnClick(count) {
      this.counter -= count;
    },
  },
};
</script>

<style lang="scss" scoped></style>
