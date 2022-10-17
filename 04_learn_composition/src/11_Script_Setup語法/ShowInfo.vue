<template>
  <div>ShowInfo: {{ name }}-{{ age }}</div>
  <button @click="showInfoBtnClick">showInfoButton</button>
</template>

<script setup>
import { stringLiteral } from '@babel/types';

// 定義props
const props = defineProps({
  name: {
    type: String,
    default: '默認值',
  },
  age: {
    type: Number,
    default: 0,
  },
});

// 綁定函數, 並且發出事件
const emits = defineEmits(['showInfoBtnClick']);
function showInfoBtnClick() {
  emits('showInfoBtnClick', 'showInfo內部發生了點擊');
}

function foo() {
  console.log('foo');
}

// 通過模板ref 或者 $parent 鏈獲取到的組件的公開實例，不會暴露任何 <script setup> 中聲明的綁定
// 通過 defineExpose 顯示指定暴露的函數或屬性
defineExpose({
  foo,
});
</script>

<style lang="scss" scoped></style>
