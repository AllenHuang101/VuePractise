<template>
  <div>AppContent: {{ message }}</div>
  <button @click="changeMessage">修改message</button>
  <show-info
    name="Allen"
    :age="30"
    @show-info-btn-click="infoBtnClick"
    ref="showInfoRef"
  ></show-info>
  <show-info></show-info>
  <show-info></show-info>
</template>

<script setup>
//1.所有編寫在頂層中的代碼，都會暴露給template使用
import { ref, onMounted } from 'vue';
import ShowInfo from './ShowInfo.vue';

//2.定義響應式數據
const message = ref('Hello World');
console.log(message);

//3.定義綁定的函數
function changeMessage() {
  message.value = '您好阿~~~';
}

function infoBtnClick(payload) {
  console.log('監聽到showInfo內部的點擊', payload);
}

//4.獲取組件實例
const showInfoRef = ref();
onMounted(() => {
  showInfoRef.value.foo();
});
</script>

<style lang="scss" scoped></style>
