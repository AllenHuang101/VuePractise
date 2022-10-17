<template>
  <div>
    <h2>當前的計數: {{ counter }}</h2>
    <h2>{{ name }}</h2>
    <button @click="counter++">+1</button>
    <button @click="name = 'James'">修改name</button>
  </div>
</template>

<script>
import { watchEffect, watch, ref } from 'vue';
export default {
  setup() {
    const counter = ref(0);
    const name = ref('Allen');

    watch(counter, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    // 1. watchEffect 傳入的函數默認會直接被執行
    // 2. 在執行過程中，會自動收集依賴哪些響應式數據，只要依賴發生變化，watchEffect傳入的函數會再次執行
    const stopWatch = watchEffect(() => {
      console.log('counter', counter.value);
      console.log('name', name.value);

      // 判斷counter.value >= 10 停止監聽
      if (counter.value >= 10) {
        stopWatch();
      }
    });
    return {
      counter,
      name,
    };
  },
};
</script>

<style lang="scss" scoped></style>
