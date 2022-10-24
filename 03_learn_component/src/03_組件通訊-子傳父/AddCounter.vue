<template>
  <div class="add">
    <button @click="btnClick(1)">+1</button>
    <button @click="btnClick(5)">+5</button>
    <button @click="btnClick(10)">+10</button>
  </div>
</template>

<script>
export default {
  // 1.emits 數組語法
  // emits: ['add'],
  // 2.emits 對象語法(少用)
  emits: {
    add: function (count) {
      if (count < 10) {
        return true;
      }
      return false;
    },
  },
  methods: {
    btnClick(count) {
      console.log('btnClick:', count);
      // 讓子組件發出去一個自訂義事件
      // 第一個參數自訂義的事件名稱
      // 第二個參數是傳遞的參數
      this.$emit('add', count);
    },
  },
};
</script>

<style lang="scss" scoped></style>
