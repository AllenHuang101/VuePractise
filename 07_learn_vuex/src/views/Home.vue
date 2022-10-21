<template>
  <div class="app">
    <h2>Home Page</h2>
    <!-- 1.使用state時需要使用state.moduleName.xxx -->
    <h2>Counter模塊的counter: {{ $store.state.counter.count }}</h2>
    <!-- 1.使用getters時, 是直接getter.xxx-->
    <h2>
      Counter模塊的doubleCounter: {{ $store.getters['counter/doubleCount'] }}
    </h2>

    <button @click="incrementCount">count模塊+1</button>
  </div>
</template>

<script></script>

<script setup>
import { useStore } from 'vuex';

// 告訴vuex發起網路請求
const store = useStore();

// 派發事件時 & 提交mutation 默認不需要分模塊
store.dispatch('fetchHomeMulidataAction').then((res) => {
  console.log(res);
});

function incrementCount() {
  store.dispatch('counter/incrementCountAction');
}
</script>

<style scoped></style>
