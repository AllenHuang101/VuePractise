<template>
  <!-- 1.獲取元素 -->
  <h2 ref="titleRef">我是標題</h2>
  <button ref="btnRef">按鈕</button>

  <!-- 2.獲取組件實例 -->
  <show-info ref="showInfoRef"></show-info>
  <button @click="getElements">獲取元素</button>
</template>

<script>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import ShowInfo from './ShowInfo.vue';
export default {
  components: {
    ShowInfo,
  },
  setup() {
    const titleRef = ref(null);
    const btnRef = ref(null);
    const showInfoRef = ref(null);
    // 這裡還拿不到值, 要在onMounted取
    // console.log(titleRef.value);

    // mounted的生命週期函數
    onMounted(() => {
      console.log('onMounted', titleRef.value);
      console.log('onMounted', btnRef.value);
      console.log('onMounted', showInfoRef.value);

      showInfoRef.value.showInfoFoo();
    });
    function getElements() {
      console.log(titleRef.value);
    }
    return {
      titleRef,
      btnRef,
      showInfoRef,
      getElements,
    };
  },
};
</script>

<style lang="scss" scoped></style>
